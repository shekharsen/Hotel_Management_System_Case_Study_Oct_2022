import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistShowComponent } from './receptionist-show.component';

describe('ReceptionistShowComponent', () => {
  let component: ReceptionistShowComponent;
  let fixture: ComponentFixture<ReceptionistShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
