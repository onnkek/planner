import React from 'react'
import './Badge.sass'
import { X, Plus } from 'react-bootstrap-icons'
import { IBadge } from '../../../models/Badge'
import { Colors } from '../../pages/SettingsPage/BadgesPage/BadgesPage'

interface PropsType {
    id: number,
    color: number,
    text: string,
    isAdded?: boolean,
    onClick: (badge: IBadge) => void
}





const Badge: React.FC<PropsType> = (props) => {

    let colorClass = ''
    const { id, color, text, isAdded, onClick } = props
    switch (color) {
        case 0:
            colorClass = 'text-bg-primary'
            break
        case 1:
            colorClass = 'text-bg-success'
            break
        case 2:
            colorClass = 'text-bg-danger'
            break
        case 3:
            colorClass = 'text-bg-warning'
            break
        case 4:
            colorClass = 'text-bg-purpl'
            break
        default:
            break
    }


    console.log(colorClass)

    const buttonContent = isAdded ? (
        <X size={20} />
    ) : (
        <Plus size={20} />
    )
    return (
        <div className={`badge rounded-pill ${colorClass} badge-add`}>
            <span>
                {text}
            </span>
            <span className='badge-add-button'
                onClick={() => onClick({ id: id, color: Number(Colors[color]), text: text, isAdded: isAdded })}>
                {buttonContent}
            </span>
        </div>
    )
}

export default Badge