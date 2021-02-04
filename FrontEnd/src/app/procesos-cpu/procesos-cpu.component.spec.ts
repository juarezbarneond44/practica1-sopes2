import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosCpuComponent } from './procesos-cpu.component';

describe('ProcesosCpuComponent', () => {
  let component: ProcesosCpuComponent;
  let fixture: ComponentFixture<ProcesosCpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesosCpuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesosCpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
