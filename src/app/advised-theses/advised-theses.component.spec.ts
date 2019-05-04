import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisedThesesComponent } from './advised-theses.component';

describe('AdvisedThesesComponent', () => {
  let component: AdvisedThesesComponent;
  let fixture: ComponentFixture<AdvisedThesesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisedThesesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisedThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
