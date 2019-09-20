import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from './test';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
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
    test.id = 0;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    const x = this.http.post<Test>('http://localhost:6600/api/Tests', {
      id: 0,
      type: 'myTest',
      date: '2019-09-12T00:00:00'
    }, options).toPromise();
    return x;
  }

  async deleteTest(id: number) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    console.log('Data Service: Delete');
    // this.http.delete('http://localhost:6600/api/Tests/' + id, options).subscribe(async (k) => {
    //   await console.log("delete done");
    // }, error => { console.log(error)});
    await this.http.delete('http://localhost:6600/api/Tests/' + id, options).toPromise().then((k) => {console.log('Test Deleted.'); });
  }
}
