import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableFilterComponent } from './mat-table-sort.component';

describe('MatTableFilterComponent', () => {
  let component: MatTableFilterComponent;
  let fixture: ComponentFixture<MatTableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
