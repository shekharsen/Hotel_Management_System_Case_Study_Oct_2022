import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReceptionistComponent } from './get-receptionist.component';

describe('GetReceptionistComponent', () => {
  let component: GetReceptionistComponent;
  let fixture: ComponentFixture<GetReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
