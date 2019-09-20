import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  flag: boolean;
  msg: string;
  users: User[];
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.user = new User();
    if (this.router.getCurrentNavigation().extras.state != null) {
      this.flag = true;
      this.msg = this.router.getCurrentNavigation().extras.state.msg;
    } else {
      this.flag = false;
    }
  }

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    return this.dataService.getUsers().then(
      users => {
        this.users = users;
      }
    );
  }
  async onSubmit() {
    await this.dataService.addUser(this.user).then(

      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate(['/user'], { state: { msg: 'User added.' } });
  }

  async onDelete(id: number) {
    await this.dataService.deleteUser(id);
    this.router.navigate(['/user'], { state: { msg: 'User deleted.', id: this.user.id } });
  }
}
