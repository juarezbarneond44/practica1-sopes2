import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatoRamComponent } from './dato-ram/dato-ram.component';
import { DatoCpuComponent } from './dato-cpu/dato-cpu.component';
import { ProcesosCpuComponent } from './procesos-cpu/procesos-cpu.component';
const routes: Routes = [
  {
    
    path:"Proceso",
    component:ProcesosCpuComponent
      },
  {
    
path:"Ram",
component:DatoRamComponent
  },
  

  {
  path:"Cpu",
  component:DatoCpuComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
