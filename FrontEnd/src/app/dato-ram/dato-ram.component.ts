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
 
public valorActualRam:Ram1={"total":"","porcentaje":"","usado":"","libre":""}
PedirDatos()
{

    // eliminaremos el primer dato del arreglo 
    this.DatosRam.shift();

  this.BackendService.GetRam().subscribe((res)=>{

  res=res+""
  var estado=0;
  var texto=""
  var numero=""
    for (let x = 0; x < res.toString().length; x++) {
      let dato=res.toString().charAt(x);
      if(dato===" "){continue;}
      switch(estado){

        case 0:
      
          if(dato===":"){estado=1;}
          else
          {
            texto=texto+dato;
          }
        break;
        case 1:
          if(dato==="\n")
          {
            if(texto==="total"){this.valorActualRam.total=numero;}
            else if(texto==="libre"){this.valorActualRam.libre=numero;}
            else if(texto==="uso"){this.valorActualRam.usado=numero;}
            numero="";
            texto="";
            estado=0;
          }
          else{
            numero=numero+dato
          }
          break;
      }
      
    }

this.valorActualRam.porcentaje= (Number(this.valorActualRam.usado)/Number(this.valorActualRam.total))*100 +""
this.DatosRam.push(this.valorActualRam.usado)




     
   //this.DatosRam.push(this.valorActualRam.usado)// guardamos el valor de la ram en el arreglo de valores
    
   //console.log(this.DatosRam)
   
   // timer de 2.5 segundos para pedir el otro valor
   setTimeout(() => {
     this.PedirDatos()
   }, 2000);
   
  })
    
}

}
