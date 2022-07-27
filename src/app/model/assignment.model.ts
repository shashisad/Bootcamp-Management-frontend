export interface  Assignment {
  AllAssignmentStatus: number;
  assignId: number;
  content: string;
  credit: number;
  dueDate: Date;
  ncgSubmittedLink: NcgSubmission[]
  teamSubmittedLink: NcgSubmission[]
  title: string;
  __v: number;
  _id:  string;
}

export interface NcgSubmission {
  ncg_id:string
  link:string
  status:number
  date:Date
  marks: number
}

export enum Status {
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
  RED = 'RED'
}
