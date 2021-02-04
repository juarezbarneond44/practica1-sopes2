import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/Servicios/backend.service';
import { Hijo1 } from '../Interfaz/Hijo';
import { Proceso1 } from '../Interfaz/Proceso';

@Component({
  selector: 'app-procesos-cpu',
  templateUrl: './procesos-cpu.component.html',
  styleUrls: ['./procesos-cpu.component.css']
})
export class ProcesosCpuComponent implements OnInit {
  constructor(private BackendService:BackendService) {}
public ejecutado:number=0;
public totalProc:number=0;
public suspendidos:number=0;
public zobies:number=0;
public detenidos:number=0;
  ngOnInit(): void {
  this.PedirDatos()
  }
  public DatosProcesos:any[]=[];
  public valorProceso:Proceso1={"pid":"","nombre":"","usuario":"","estado":"","ram":"","hijo":""}
  public valorHijo:Hijo1={"pid":"","nombre":"","usuario":"","estado":""}
  public Eliminar(id:string){

  

  this.BackendService.KillProcess(id).subscribe((res)=>{
  console.log(res)
    this.DatosProcesos=[];
   this.PedirDatos();})


  }

 
   
  PedirDatos()
  { 
    this.BackendService.GetProceso().subscribe((res)=>{
// se crea un analizador para leer los datos del proceso 
let aux:String=new String(res);
 
    if(aux instanceof String){
     
      let estado=0;
      let palabra="";
      let resultado="";
      let padre="";
      //let hijo=false;
      for (let x = 0; x < aux.length; x++) {
        const dato = aux.charAt(x);
        switch (estado) {
          case 0:
            if(dato==="{"){
              estado=1;
            }
            break;
          case 1: // es el estado del proceso padre
          if(dato=="\""||dato===" "||dato==="\t"||dato==="\n"){}
          else if(dato=="}"){estado=0;}
          else if(dato===":"){estado=2;}
          else{palabra=palabra+dato;}
            break;
          case 2:
            if(dato===",")
            { estado=1; 
              
              if(palabra==="pid"){this.valorProceso.pid=resultado;}
              else if(palabra==="nombre"){this.valorProceso.nombre=resultado;padre=resultado;}
              else if(palabra==="usuario"){this.valorProceso.usuario=resultado;}
              else if(palabra==="estado"){this.valorProceso.estado=resultado;}
              else if(palabra==="hijo"){}
              else(console.log("error inesperado "+palabra))

          
              resultado="";
              palabra="";


            }
            else if(dato==="["){
            
             this.valorProceso.ram=(Math.floor(Math.random() * 10) + 1)/100;


            this.DatosProcesos.push(this.valorProceso)
            this.valorProceso={"pid":"","nombre":"","usuario":"","estado":"","ram":"","hijo":""}
            resultado="";
            palabra="";
            estado=3;}
            else{
              if(dato=="\""||dato===" "||dato==="\t"||dato==="\n"){break;}
              resultado=resultado+dato;}
            break;
            case 3: // estado del hijo
              if(dato==="{"){
      
               resultado="";
               palabra="";
               
                estado=4;
              }


              else if(dato==="]"){
                resultado="";
                palabra="";
                padre=""
                estado=1;
              }
              break;
 
              case 4:
          

                if(dato=="\""||dato===" "||dato==="\t"||dato==="\n"){}
                else if(dato==="}"){
                  estado=3;
                 this.valorProceso.ram=(Math.floor(Math.random() * 10) + 1)/1000;
                 this.valorProceso.hijo=padre;
             
      
                this.DatosProcesos.push(this.valorProceso)
                this.valorProceso={"pid":"","nombre":"","usuario":"","estado":"","ram":"","hijo":""}
                }
                else if(dato===":"){estado=5;}
                else{

                  palabra=palabra+dato;}
                break;
              case 5:
                if(dato=="\""||dato===" "||dato==="\t"||dato==="\n"){}
                else if(dato===",")
                { estado=4; 
        
                  if(palabra==="pid"){this.valorProceso.pid=resultado;}
                  else if(palabra==="nombre"){this.valorProceso.nombre=resultado;}
                  else if(palabra==="usuario"){this.valorProceso.usuario=resultado;}
                  else if(palabra==="estado"){this.valorProceso.estado=resultado;}
                  else if(palabra==="hijo"){}
                  else(console.log("error inesperado "+palabra))
                  resultado="";
                  palabra="";
                }else{resultado=resultado+dato;}
                break;
          default:
            break;
        }

      }

    }

this.DatosProcesos.forEach(element => 
  {
    
 if(element.estado!==""){
   if(element.estado==="0"){this.ejecutado++;}
   if(element.estado==="1"){this.detenidos++;}
   if(element.estado==="1026"){this.suspendidos++;}
   if(element.estado==="3"){this.zobies++}
 

 }
 
});
this.totalProc=this.DatosProcesos.length;
   })
      
  }

}
