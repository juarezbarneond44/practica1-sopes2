import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/Servicios/backend.service';
import { Cpu1 } from '../Interfaz/Cpu';

@Component({
  selector: 'app-dato-cpu',
  templateUrl: './dato-cpu.component.html',
  styleUrls: ['./dato-cpu.component.css']
})
export class DatoCpuComponent implements OnInit {

  constructor(private BackendService:BackendService){ }
  public DatosCpu:string[]=["0","0","0","0","0","0","0","0","0","0","0"]
  // obtener la grafica
  public lineChartData: Array<any> = [
    { data: this.DatosCpu, label: "Cpu Utilizada" }
  ];
  public lineChartLabels: Array<any> = ["50","45","40","35","30","25","20","15","10","5","0"];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors:  Array<any> = [
 
    { // red
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: string = 'line';
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
// fin obtener la grafica


  ngOnInit(): void {
this.PedirDatos()
  }
  public valorActualRam:Cpu1={"nucleo1":"","libre1":""}
  PedirDatos()
  {
  
      // eliminaremos el primer dato del arreglo 
      this.DatosCpu.shift();
    
    this.BackendService.GetCpu().subscribe((res)=>{
    this.valorActualRam={"nucleo1":res.nucleo1,"libre1":res.libre1};   
     this.DatosCpu.push(this.valorActualRam.nucleo1)// guardamos el valor de la ram en el arreglo de valores
      
     //console.log(res)
     
     // timer de 2.5 segundos para pedir el otro valor
     setTimeout(() => {
      this.PedirDatos()
     }, 2000);
     
    })
      
  }
}
