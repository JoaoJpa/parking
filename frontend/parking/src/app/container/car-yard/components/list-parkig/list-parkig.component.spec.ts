import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParkigComponent } from './list-parkig.component';

describe('ListParkigComponent', () => {
  let component: ListParkigComponent;
  let fixture: ComponentFixture<ListParkigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParkigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParkigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
