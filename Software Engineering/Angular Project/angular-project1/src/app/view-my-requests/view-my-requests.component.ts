import { Component, OnInit } from '@angular/core';
import { Request } from "../request";
import { REQUESTS } from "../mock-requests";
import { RequestService } from "../request.service";

@Component({
  selector: 'app-view-my-requests',
  templateUrl: './view-my-requests.component.html',
  styleUrls: ['./view-my-requests.component.css']
})
export class ViewMyRequestsComponent implements OnInit {
  [x: string]: any;

  requests: Request[];
  filteredRequests: Request[];
  selected: Request[];

  // Filter by User ID
  performFilter(userid: number): Request[] {

    return this.requests.filter(

      (request: Request) => request.userid == userid
    );
  }

  // Activate when the checkbox is flipped
  FieldsChange(values: any, id: number) {
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

  // Cancel the selected requests
  cancelRequests(): void {
    for (let i: number = 0; i < this.selected.length; i++) {
      this.requestService.remove(this.selected[i]["id"]);
    }

    this.requests = REQUESTS;
    this.filteredRequests = this.performFilter(2);
    this.selected = [];

  }

  constructor(private requestService: RequestService) {
    this.requests = REQUESTS;
    this.filteredRequests = this.performFilter(2);
    this.selected = [];
  }

  ngOnInit(): void {
  }
}
