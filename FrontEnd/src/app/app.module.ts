import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { DatoRamComponent } from './dato-ram/dato-ram.component';
import { DatoCpuComponent } from './dato-cpu/dato-cpu.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProcesosCpuComponent } from './procesos-cpu/procesos-cpu.component';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    DatoRamComponent,
    DatoCpuComponent,
    ProcesosCpuComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
