import { Component, OnInit } from '@angular/core';
import { Grade } from '../grade-interface';
import { GradeService } from '../grade.service';
import { RequestService } from '../request.service';
//import { SessionService } from '../session.service';

@Component({
  selector: 'app-pending-grades',
  templateUrl: './pending-grades.component.html',
  styleUrls: ['./pending-grades.component.css']
})
export class PendingGradesComponent implements OnInit {

  grades: Grade[];
  requests: Request[];
  tableEntries: Object[];

  constructor(private gradeService: GradeService, private requestService: RequestService, /*private sessionService: SessionService*/) { }

  ngOnInit(): void {

    let grades = this.gradeService.get();
    let requests = this.requestService.get();

    for (var grade of grades){
        for (var request of requests) {
          if (grade.requestid === request.id){
            let tableEntry = {
              requestid: request.id,
              firstName: request.firstName,
              lastName: request.lastName,
              eventType: request.eventType,
              description: request.description,
              gradingFormat: request.gradingFormat
            }
            this.tableEntries.push(tableEntry); 
          }
        }
    }
    
  }



}
