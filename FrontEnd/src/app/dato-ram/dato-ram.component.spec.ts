import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoRamComponent } from './dato-ram.component';

describe('DatoRamComponent', () => {
  let component: DatoRamComponent;
  let fixture: ComponentFixture<DatoRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatoRamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
