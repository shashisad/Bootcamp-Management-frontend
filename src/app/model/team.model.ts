export interface TeamModel {
  _id: string
  teamName: string
  teamMembers: string[]
  teamMentor: string
  teamAssignments: string[]
  __v: number
}


export interface MyTeamModel {
  name: string
  ncgs: string[]
  mentor: string
}
