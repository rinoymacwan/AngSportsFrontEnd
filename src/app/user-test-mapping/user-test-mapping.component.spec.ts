import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestMappingComponent } from './user-test-mapping.component';

describe('UserTestMappingComponent', () => {
  let component: UserTestMappingComponent;
  let fixture: ComponentFixture<UserTestMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTestMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTestMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
