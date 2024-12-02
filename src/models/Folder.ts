import { INote } from "./Note"

export default interface IFolder {
  uid: number
  label: string
  create: string
  children: (IFolder | INote)[]
}