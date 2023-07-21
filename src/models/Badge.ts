import { BadgeType } from "../components/UI/Badge/Badge";

export interface IBadge {
    id: number,
    color: number,
    text: string,
    type?: BadgeType
}