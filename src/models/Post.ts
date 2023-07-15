import { IBadge } from "../components/ItemAddForm/ItemAddForm"

export default interface IPost {
    id: number
    body: string
    create: string
    remove: string
    timeleft: string
    deadline: string
    visible: boolean
    badges: IBadge[]
}