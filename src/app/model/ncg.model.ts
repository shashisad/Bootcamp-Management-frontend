import {Assignment} from "./assignment.model";

export interface Ncg {
  _id: string
  name: string
  email: string
  role: string
  assignments: Assignment[]
  __v: number
}
