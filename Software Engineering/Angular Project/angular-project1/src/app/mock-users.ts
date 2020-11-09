import {user} from './user';


export const USERS: user[] = [
    { id:2, firstName:'Jesse',lastName:'Warren',userType:'Direct Supervisor',balance: 0,reportsto: 3,email:'jtwarrenz@gmail.com',username: 'jtwarrenz',password:'Jesse'},
    { id:1, firstName:'Dave',lastName:'Draper',userType:'Employee',balance: 0,reportsto: 2,email:'dirtydave@yahoo.com', username: 'drdave',password:'PleaseGiveMeMoney'},
    { id:4, firstName:'Seth',lastName:'Pennebaker',userType:'Benefits Coordinator',balance: 0,reportsto: 5, email:'pennepasta@hotmail.com', username: 'Seth',password:'TheBenco'},
    { id:3, firstName:'Morgan',lastName:'Lanueva',userType:'Department Head',balance: 0,reportsto: 4,email:'Venmoyourbenco@gmail.com', username: 'Morgan',password:'DeptDeputy'},
  ];