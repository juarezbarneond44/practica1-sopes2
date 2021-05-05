import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ram1 } from '../app/Interfaz/ram';
import{HttpClient, HttpHeaders} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient,private router:Router) { }
headers:HttpHeaders=new HttpHeaders({"Content-Type":"application/json"})

GetRam(){
const url="http://35.223.64.146:4444/Ram"
 
return this.http.get(url)
}
GetCpu(){
  const url="http://35.223.64.146:4444/Cpu"
   
  return this.http.get(url)
  }

  KillProcess(id:string){
    const url="http://35.223.64.146:4444/kill/"+id
   
      return  this.http.get(url)
   
       

    }


GetProceso(){
  const url="http://35.223.64.146:4444/DatoCpu"
   
  return this.http.get(url)
  }
  

}
