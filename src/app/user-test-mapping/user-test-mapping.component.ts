import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserTestMapping } from '../user-test-mapping';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-test-mapping',
  templateUrl: './user-test-mapping.component.html',
  styleUrls: ['./user-test-mapping.component.css']
})
export class UserTestMappingComponent implements OnInit {

  athletes: User[];
  cooper: boolean;
  sprint: boolean;
  testId: number;
  flag: boolean;
  userTestMapping: UserTestMapping;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state != null) {
      if (this.router.getCurrentNavigation().extras.state.testType === 'Coopertest') {

        this.cooper = true;
        this.sprint = false;
      } else {
        this.cooper = false;
        this.sprint = true;
      }
      this.testId = this.router.getCurrentNavigation().extras.state.TId;
    }
    if (this.router.getCurrentNavigation().extras.state.id != null) {
      this.dataService.getUserTestMapping(this.router.getCurrentNavigation().extras.state.id).then(

        data => {
          this.userTestMapping = data;
        },
        error => {
          console.log(error);
        }
      );
      this.flag = true;
    } else {
      this.userTestMapping = new UserTestMapping();
    }

  }

  ngOnInit() {
    this.dataService.getOnlyAthletes().then(
      athletes => {
        this.athletes = athletes;
      }
    );
  }
  async onSubmit(myForm: NgForm) {
    console.log("XXXXXXXXX");
    console.log(this.testId);
    this.userTestMapping.tId = this.testId;
    console.log(JSON.stringify(this.userTestMapping));
    await this.dataService.addUserTestMapping(this.userTestMapping).then(

      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate(['/test', this.testId], { state: { msg: 'UserTestMapping added.' } });
  }

  async onEdit(myForm: NgForm) {
    console.log("AAAAAA");
    console.log(this.userTestMapping.tId);
    //this.userTestMapping.tId = this.testId;
    console.log(JSON.stringify(this.userTestMapping));
    await this.dataService.editUserTestMapping(this.userTestMapping).then(

      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate(['/test', this.userTestMapping.tId], { state: { msg: 'UserTestMapping added.' } });
  }

}
