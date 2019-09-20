import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css']
})
export class TestsListComponent implements OnInit {

  public tests: Test[];
  public test: Test;
  msg: string;
  flag: boolean;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    // this.router.events.subscribe(routerEvent => {
    //   this.fetchData();
    //   console.log("First");
    // }
    // );
    this.fetchData();
    if (this.router.getCurrentNavigation() != null) {
      this.flag = true;
      this.msg = this.router.getCurrentNavigation().extras.state.msg;
      this.tests.splice(this.router.getCurrentNavigation().extras.state.id, 1);
      console.log(this.msg);
    } else {
      this.flag = false;
      console.log("SECOND");
    }

  }
  get myFunc() {
    return JSON.stringify(this.tests);
  }
  fetchData() {
    this.dataService.getTests().subscribe(
      (t) => {
        this.tests = t.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      });
  }
}
