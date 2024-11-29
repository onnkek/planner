export interface INote {
  uid: number,
  type: string,
  label: string,
  body: string,
  create: string,
  icon: string,
  children: INote[]
}