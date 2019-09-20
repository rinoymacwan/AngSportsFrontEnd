import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-test-mapping',
  templateUrl: './user-test-mapping.component.html',
  styleUrls: ['./user-test-mapping.component.css']
})
export class UserTestMappingComponent implements OnInit {

  athletes: User[];
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getOnlyAthletes().then(
      athletes => {
        this.athletes = athletes;
      }
    );
  }

}
