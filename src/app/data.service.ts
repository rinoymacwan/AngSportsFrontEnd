import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from './test';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private testUrl = 'http://localhost:6600/api/Tests/';
  constructor(private http: HttpClient) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };

  }

  getTests(): Observable<Test[]> {
    console.log('Data Service: getTests');
    return this.http.get<Test[]>(this.testUrl);
  }

  getTestById(id: number): Observable<Test> {
    return this.http.get<Test>('http://localhost:6600/api/Tests/' + id);
  }

  async addTest(test: Test): Promise<Test> {
    console.log('Data Service: Add');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    const x = this.http.post<Test>('http://localhost:6600/api/Tests', test, options).toPromise();
    return x;
  }

  async deleteTest(id: number) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    console.log('Data Service: Delete Test');
    // this.http.delete('http://localhost:6600/api/Tests/' + id, options).subscribe(async (k) => {
    //   await console.log("delete done");
    // }, error => { console.log(error)});
    await this.http.delete('http://localhost:6600/api/Tests/' + id, options).toPromise().then((k) => {console.log('Test Deleted.'); });
  }
  async addUser(user: User): Promise<User> {
    console.log('Data Service: Add User');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    const x = this.http.post<User>('http://localhost:6600/api/Users', user, options).toPromise();
    return x;
  }
  getUsers(): Promise<User[]> {
    console.log('Data Service: Get Users');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    const x = this.http.get<User[]>('http://localhost:6600/api/Users', options).toPromise();
    return x;
  }
  async deleteUser(id: number) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    console.log('Data Service: Delete User');
    console.log(+id);
    console.log('aaa');
    await this.http.delete('http://localhost:6600/api/Users/' + id, options).toPromise().then((k) => {console.log('User Deleted.'); });
  }
  getOnlyAthletes(): Promise<User[]> {
    console.log('Data Service: Get Athletes');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    const x = this.http.get<User[]>('http://localhost:6600/api/Users/Athletes', options).toPromise();
    return x;
  }
}
