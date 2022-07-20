export class Assignment {
  AllAssignmentStatus: number |any;
  assignId: number |any;
  content: string| any;
  credit: number| any;
  dueDate: Date | any;
  ncgSubmittedLink: NcgSubmission[] | any;
  title: string| undefined;
  __v: number| undefined;
  _id:  string| undefined;
}
export class NcgSubmission {
  ncg_id:string| undefined;
    link:string| undefined;
  status:number| undefined;
    date:Date | undefined;
}
