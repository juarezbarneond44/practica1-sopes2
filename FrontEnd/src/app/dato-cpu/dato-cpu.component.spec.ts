import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoCpuComponent } from './dato-cpu.component';

describe('DatoCpuComponent', () => {
  let component: DatoCpuComponent;
  let fixture: ComponentFixture<DatoCpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatoCpuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoCpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
