import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Test } from '../test';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserTestMapping } from '../user-test-mapping';
import { User } from '../user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public test: Test;
  public newFlag: number;
  testId: number;
  userTestMappings: UserTestMapping[];
  cooper: boolean;
  sprint: boolean;
  athletes: User[];
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.test = new Test();
  }

  ngOnInit() {

    const param = this.route.snapshot.paramMap.get('id');
    this.newFlag = +param;
    if (this.newFlag === 0) {
      this.test = new Test();
    } else {
      this.dataService.getTestById(+param).then(
        (t) => {
          this.test = t;
          console.log(this.test.type);
          if (this.test.type === 'Coopertest') {
            this.cooper = true;
            this.sprint = false;
          } else {
            this.cooper = false;
            this.sprint = true;
          }
        },
        error => {
          console.log(error);
        }
      );
      this.dataService.getAthletesByTestId(this.newFlag).subscribe(
        (utm) => {
          this.userTestMappings = utm;
        },
        error => {
          console.log(error);
        }
      );
      this.dataService.getOnlyAthletes().then(
        (athletes) => {
          this.athletes = athletes;
        },
        error => {
          console.log(error);
        }
      );

    }
  }
  async onSubmit(form: NgForm) {
    await this.dataService.addTest(this.test).then(

      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate([''], { state: { msg: 'Test added.' } });
  }
  async onDelete() {
    await this.dataService.deleteTest(this.test.id);
    this.router.navigate([''], { state: { msg: 'Test deleted.', id: this.test.id } });
  }
  getFR(dist: number) {
    if (dist <= 1000) {
      return 'Below Average';
    } else if (dist <= 2000) {
      return 'Average';
    } else if (dist <= 3500) {
      return 'Good';
    } else {
      return 'Very Good';
    }
  }
  getName(id: number) {
    return this.athletes.filter( a => a.id === id)[0].name;
  }
}
