import React from 'react'
import './Badge.sass'
import { X, Plus } from 'react-bootstrap-icons'
import { IBadge } from '../../ItemAddForm/ItemAddForm'

interface PropsType {
    id: number,
    color: string,
    text: string,
    isAdded?: boolean,
    onClick: (badge: IBadge) => void
}

const Badge: React.FC<PropsType> = (props) => {
    const { id, color, text, isAdded, onClick } = props
    const buttonContent = isAdded ? (
        <X size={20} />
    ) : (
        <Plus size={20} />
    )
    return (
        <div className={`badge rounded-pill text-bg-${color} badge-add`}>
            <span>
                {text}
            </span>
            <span className='badge-add-button' 
            onClick={() => onClick({id: id, color: color, text: text, isAdded: isAdded})}>
                {buttonContent}
            </span>
        </div>
    )
}

export default Badge