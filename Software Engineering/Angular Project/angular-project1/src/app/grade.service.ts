import { Injectable } from '@angular/core';
import {Grade} from './grade-interface';
import {GRADES} from './GRADES';

@Injectable({
  providedIn: 'root'
})

export class GradeService {

  constructor() { 

  }
 
  get(): Grade[]{
    return GRADES;
  }

  add(grades: Grade[]) {
    for (let grade of grades) {
        GRADES.push(grade);
    }
  }

  remove(grades: Grade[]){
    for (let gradeToRemove of grades) {
      let index = GRADES.indexOf(gradeToRemove, 0);
        if (index > -1) {
          GRADES.splice(index, 1)
        }
      //Alternative if top method doesn't work
      // GRADES.forEach( (grade, index) => {
      //   if(grade === gradeToRemove) GRADES.splice(index,1);
      // });
    }
  }

  approve(grades: Grade[]){
    for (let gradeToApprove of grades){
    
    //   REQUESTS.forEach( (request: Request, index: number) => {
    //     if(request.requestid === gradeToApprove.requestid) {
    //       request.status = 'approved';
    //       request.awardedAmount = request.projectedAmount;
    //     } 
    //   }
    }
  }


}
