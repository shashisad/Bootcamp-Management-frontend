import {Assignment} from "./assignment.model";

export interface UserModel {
  _id: string
  name: string
  email: string
  role: string
  team: string
  assignments: Assignment[]
  __v: number
}
