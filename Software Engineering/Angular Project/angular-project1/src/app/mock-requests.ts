import { Request } from "./request";

export let REQUESTS: Request[] = [
    {
        id: 1,
        eventDate: "2020-10-30",
        eventTime: "13:00:00",
        location: "USF",
        description: "Revature Training",
        cost: 2700,
        gradingFormat: "Grade",
        eventType: "Certification",
        userid: 1,
        justification: "To launch my software development career",
        firstName: "Dave",
        lastName: "Draper",
        projectedAmount: 1800,
        awardedAmount: 0,
        status: "pending"
    },
    {
        id: 2,
        eventDate: "2020-11-28",
        eventTime: "17:00:00",
        location: "Big Texas",
        description: "Big Iron",
        cost: 1000,
        gradingFormat: "Presentation",
        eventType: "Seminar",
        userid: 2,
        justification: "Big Iron",
        firstName: "Arizona",
        lastName: "Ranger",
        projectedAmount: 900,
        awardedAmount: 900,
        status: "awarded"
    }
]

/*
    ,
    {
        id: 0,
        eventDate: "",
        eventTime: "",
        location: "",
        description: "",
        cost: 0,
        gradingFormat: "",
        eventType: "",
        userid: 0,
        justification: "",
        firstName: "",
        lastName: "",
        projectedAmount: 0,
        awardedAmount: 0,
        status: ""
    }
 */