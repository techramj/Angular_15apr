import { Injectable } from '@angular/core';
import { Emp } from './emp.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  //baseUrl:string = "http://localhost:3000/employees";
  baseUrl:string = "http://localhost:8080/employees";

  employees:Emp[] = [];

  httpOptions = {
    headers :  new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  constructor(private http:HttpClient) {
    console.log(http);
   }

  
  getEmployees():Observable<Emp[]>{
    return this.http.get<Emp[]>(this.baseUrl)
  }

  getEmployeeById(id:number): Observable<Emp>{
    return this.http.get<Emp>(this.baseUrl+"/"+id);
  }


  //DELETE localhost:3000/employees/
  deleteEmployee(id: number | string): Observable<any>{
    return this.http.delete<any>(this.baseUrl+"/"+id);
  }

  updateEmployee(emp:Emp) : Observable<Emp>{
    //logic
    return this.http.put<Emp>(this.baseUrl+"/"+emp.id, JSON.stringify(emp), this.httpOptions);
  }


  addEmployee(empData:any) : Observable<Emp>{
    return this.http.post<Emp>(this.baseUrl, JSON.stringify(empData), this.httpOptions);
  }
  
}
