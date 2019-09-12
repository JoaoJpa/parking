import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCarYardComponent } from './grid-car-yard.component';

describe('GridCarYardComponent', () => {
  let component: GridCarYardComponent;
  let fixture: ComponentFixture<GridCarYardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCarYardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCarYardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
