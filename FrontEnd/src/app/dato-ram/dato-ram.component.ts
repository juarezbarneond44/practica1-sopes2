import { Component, OnInit, ɵConsole } from '@angular/core';
import { BackendService } from 'src/Servicios/backend.service';
import { Ram1 } from '../Interfaz/ram';

@Component({
  selector: 'app-dato-ram',
  templateUrl: './dato-ram.component.html',
  styleUrls: ['./dato-ram.component.css']

  
})
export class DatoRamComponent implements OnInit {
  public DatosRam:string[]=["0","0","0","0","0","0","0","0","0","0","0"]
  // obtener la grafica
  public lineChartData: Array<any> = [
    { data: this.DatosRam, label: "Ram Utilizada" }
  ];
  public lineChartLabels: Array<any> = ["50","45","40","35","30","25","20","15","10","5","0"];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors:  Array<any> = [
 
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: string = 'line';
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
// fin obtener la grafica
  constructor(private BackendService:BackendService) {}
 
  ngOnInit(): void {
    this.PedirDatos()
  }
 
public valorActualRam:Ram1={"total":"","porcentaje":"","usado":""}
 PedirDatos()
  {
  
      // eliminaremos el primer dato del arreglo 
      this.DatosRam.shift();
    
    this.BackendService.GetRam().subscribe((res)=>{
    this.valorActualRam={"total":res.total,"porcentaje":res.porcentaje,"usado":res.usado};   
     this.DatosRam.push(this.valorActualRam.usado)// guardamos el valor de la ram en el arreglo de valores
      
     //console.log(this.DatosRam)
     
     // timer de 2.5 segundos para pedir el otro valor
     setTimeout(() => {
       this.PedirDatos()
     }, 2000);
     
    })
      
  }


}
