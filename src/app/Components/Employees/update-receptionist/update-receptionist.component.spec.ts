import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReceptionistComponent } from './update-receptionist.component';

describe('UpdateReceptionistComponent', () => {
  let component: UpdateReceptionistComponent;
  let fixture: ComponentFixture<UpdateReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReceptionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
