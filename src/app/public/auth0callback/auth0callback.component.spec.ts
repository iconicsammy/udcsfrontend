import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0callbackComponent } from './auth0callback.component';

describe('Auth0callbackComponent', () => {
  let component: Auth0callbackComponent;
  let fixture: ComponentFixture<Auth0callbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auth0callbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0callbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
