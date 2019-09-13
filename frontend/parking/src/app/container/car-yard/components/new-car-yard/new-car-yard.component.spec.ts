import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarYardComponent } from './new-car-yard.component';

describe('NewCarYardComponent', () => {
  let component: NewCarYardComponent;
  let fixture: ComponentFixture<NewCarYardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarYardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarYardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
