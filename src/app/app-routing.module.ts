import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestsListComponent } from './tests-list/tests-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'test/:id', component: TestComponent },
  { path: '', component: TestsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
