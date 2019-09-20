import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Test } from '../test';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public test: Test;
  public newFlag: number;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.test = new Test();
  }

  ngOnInit() {

    const param = this.route.snapshot.paramMap.get('id');
    this.newFlag = +param;
    if (this.newFlag === 0) {
      this.test = new Test();
    } else {
      this.dataService.getTestById(+param).subscribe(
        (t) => {
          this.test = t;
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
}
