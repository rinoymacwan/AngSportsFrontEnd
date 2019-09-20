import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestsListComponent } from './tests-list/tests-list.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserTestMappingComponent } from './user-test-mapping/user-test-mapping.component';


const routes: Routes = [
  { path: 'test/:id', component: TestComponent },
  { path: 'addAthlete', component: UserTestMappingComponent },
  { path: 'user', component: UserComponent, runGuardsAndResolvers: 'always' },
  { path: '', component: TestsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
