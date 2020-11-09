import { Component, OnInit } from '@angular/core';
import { Request } from "../request";
import { REQUESTS } from "../mock-requests";
import { RequestService } from "../request.service";

@Component({
  selector: 'app-upload-my-grade',
  templateUrl: './upload-my-grade.component.html',
  styleUrls: ['./upload-my-grade.component.css']
})
export class UploadMyGradeComponent implements OnInit {
  [x: string]: any;

  requests: Request[];
  filteredRequests: Request[];
  selected: Request[];

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

  // Filter by User ID
  performFilter(userid: number): Request[] {

    return this.requests.filter(

      (request: Request) => request.userid == userid
    );
  }

  constructor(private requestService: RequestService) {
    this.requests = REQUESTS;
    this.filteredRequests = this.performFilter(1);
    this.selected = [];
  }

  ngOnInit(): void {
  }

}
