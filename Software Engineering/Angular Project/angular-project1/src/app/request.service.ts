import { Injectable } from '@angular/core';
import { REQUESTS } from './mock-requests';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  requests = REQUESTS;

  get(): Request[] {
    return REQUESTS;
  }

  getById(id: number): Request {
      for(let i: number = 0; i < REQUESTS.length; i++){
        if (REQUESTS[i]["id"] == id){
          return REQUESTS[i];
        }
      }
      return null;
   } 
  
  add(request: Request): void { 
    let id: number = 0;
    for(let i: number = 0; i < REQUESTS.length; i++){
      id = REQUESTS[i]["id"];
    }
    id++;

    request["id"] = id;
    REQUESTS.push(request);
  }
  
  remove(id: number): void { 
    for(let i: number = 0; i < REQUESTS.length; i++){
      if (REQUESTS[i]["id"] == id){
        REQUESTS.splice(i);
        return;
      }
    }
  }
  
  supervisorApprove(id: number): void {
    for(let i: number = 0; i < REQUESTS.length; i++){
      if (REQUESTS[i]["id"] == id){
        REQUESTS[i]["status"] = "Direct Supervisor Approved";
        return;
      }
    }
   }
  
  departmentHeadApprove(id: number): void {
    for(let i: number = 0; i < REQUESTS.length; i++){
      if (REQUESTS[i]["id"] == id){
        REQUESTS[i]["status"] = "Department Head Approved";
        return;
      }
    }
  }
  
  bencoApprove(id: number): void {
    for(let i: number = 0; i < REQUESTS.length; i++){
      if (REQUESTS[i]["id"] == id){
        REQUESTS[i]["status"] = "Benefits Coordinator Approved";
        return;
      }
    }
  }

  constructor() { }
}
