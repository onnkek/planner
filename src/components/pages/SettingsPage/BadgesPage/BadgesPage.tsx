import React, { useState } from 'react'
import './BadgesPage.sass'
import SettingsHeader from '../SettingsHeader/SettingsHeader'
import { PlusLg } from 'react-bootstrap-icons'
import Badge from '../../../UI/Badge/Badge'
import { useAppDispatch, useAppSelector } from '../../../../models/Hook'
import { addBadge, removeBadge } from '../../../../redux/BadgesSlice'

export enum Colors {
    Primary,
    Success,
    Danger,
    Warning,
    Purpl
}

const BadgesPage = () => {



    const [color, setColor] = useState(Colors.Primary)
    const [text, setText] = useState('')
    const badges = useAppSelector(state => state.badges.badges)

    const dispatch = useAppDispatch()

    let colorClass = 'badge-color-item_primary'

    switch (color) {
        case Colors.Primary:
            colorClass = 'badge-color-item_primary'
            break
        case Colors.Success:
            colorClass = 'badge-color-item_success'
            break
        case Colors.Danger:
            colorClass = 'badge-color-item_danger'
            break
        case Colors.Warning:
            colorClass = 'badge-color-item_warning'
            break
        default:
            colorClass = 'badge-color-item_purpl'
            break
    }

    const addBadgeHandler = async () => {
        await dispatch(addBadge({ text, color }))
        setText('')
    }

    const badgesContent = badges.map(badge => {
        const id = badge.id
        return (<li key={badge.id}><Badge isAdded id={badge.id} color={badge.color} text={badge.text} onClick={() => { dispatch(removeBadge({ id })) }} /></li>)
    })
    return (
        <>
            <div className="settings-item">
                <SettingsHeader title='Profile preferences' />


                <label className="profile-form-group-label form-label">
                    Select badge color
                </label>

                <ul className='color-list'>
                    <li onClick={() => { setColor(Colors.Primary) }} className={`badge-color-item badge-color-item_primary ${color === Colors.Primary ? 'badge-color-item_active' : ''}`}></li>
                    <li onClick={() => { setColor(Colors.Success) }} className={`badge-color-item badge-color-item_success ${color === Colors.Success ? 'badge-color-item_active' : ''}`}></li>
                    <li onClick={() => { setColor(Colors.Danger) }} className={`badge-color-item badge-color-item_danger ${color === Colors.Danger ? 'badge-color-item_active' : ''}`}></li>
                    <li onClick={() => { setColor(Colors.Warning) }} className={`badge-color-item badge-color-item_warning ${color === Colors.Warning ? 'badge-color-item_active' : ''}`}></li>
                    <li onClick={() => { setColor(Colors.Purpl) }} className={`badge-color-item badge-color-item_purpl ${color === Colors.Purpl ? 'badge-color-item_active' : ''}`}></li>
                </ul>
                <div className="profile-from-group-descr">
                    You can choose the color that will be used
                    when applying this badge to posts.
                </div>

                <form className="form-1 col-12 mt-3">
                    <div className="badge-form-group">

                        <label className="profile-form-group-label form-label">
                            Create new badge
                        </label>

                        <div className='add-badge-wrapper'>

                            <input
                                className={`add-badge form-control ${colorClass}`}
                                value={text}
                                onChange={e => setText(e.target.value)}
                            />
                            <button type="button" className="add-button btn btn-primary outline"
                                onClick={addBadgeHandler}
                            ><PlusLg size={22} /></button>
                        </div>
                        <div className="profile-from-group-descr">
                            You can choose the text that will be written
                            inside the badge when applying this badge to posts.
                        </div>

                    </div>
                </form>
            </div>
            <ul className='custom-badges-list'>
                {badgesContent}
            </ul>
        </>
    )
}

export default BadgesPage