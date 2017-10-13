import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLatestPurchasesComponent } from './check-latest-purchases.component';

describe('CheckLatestPurchasesComponent', () => {
  let component: CheckLatestPurchasesComponent;
  let fixture: ComponentFixture<CheckLatestPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckLatestPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckLatestPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
