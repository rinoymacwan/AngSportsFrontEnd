import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestsListComponent } from './tests-list/tests-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserTestMappingComponent } from './user-test-mapping/user-test-mapping.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestsListComponent,
    UserComponent,
    UserTestMappingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
