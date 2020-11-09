import { Component, OnInit } from '@angular/core';
import { Request } from "../request";
import { REQUESTS } from "../mock-requests";
import { RequestService } from "../request.service";

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  // Fields
  requests: Request[];
  filteredRequests: Request[];
  selected: Request[];
  action: string;

  // Filter by Request Status
  performFilter(status: string): Request[]{
  
    return this.requests.filter(

      (request: Request) => request.status == status
    );
  }

  // Activate when the checkbox is flipped
  FieldsChange(values:any,id:number){
    if (values.currentTarget.checked) {
      this.selected.push(
        this.requestService.getById(id)
      );
    } else {
      this.selected.splice(
        this.selected.indexOf(this.requestService.getById(id))
      );
    }
  }

  // Pick the request accordingly
  submit(){
    if (this.action == "Approve"){
      this.approveRequests();
    } else {
      this.denyRequests();
    }
  }

  // Deny the selected requests
  denyRequests(): void {
    for (let i: number = 0; i < this.selected.length; i++){
      this.requestService.remove(this.selected[i]["id"]);
    }
    
    this.requests = REQUESTS;
    this.filteredRequests = this.performFilter("pending");
    this.selected = [];

  }

  // Deny the selected requests
  approveRequests(): void {
    for (let i: number = 0; i < this.selected.length; i++){
      this.requestService.supervisorApprove(this.selected[i]["id"]);
    }
    
    this.requests = REQUESTS;
    this.filteredRequests = this.performFilter("pending");
    this.selected = [];

  }

  constructor(private requestService: RequestService) {
    this.requests = REQUESTS;
    this.filteredRequests = this.performFilter("pending");
    this.selected = [];
    this.action = "Approve";
  }

  ngOnInit(): void {
  }

}
