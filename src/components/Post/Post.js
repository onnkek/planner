import React, { Component } from 'react';
import './Post.sass'

export default class Post extends Component {

    state = {
        progress: 0,
        active: ''
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.updateItem();
        }, 500);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    updateItem = () => {
        const deadlineDate = Date.parse(this.props.deadline);

        const fullTime = deadlineDate - this.props.create;

        let currentTime = deadlineDate - Date.now();
        if (currentTime < 0) {
            currentTime = 0;
            const progress = currentTime / fullTime * 100;
            this.setState({
                progress: progress,
                active: 'active'
            });
            return;
        }
        const progress = currentTime / fullTime * 100;
        this.setState({
            progress: progress,
            active: ''
        });
    }
    getDate = () => {
        const deadlineDate = Date.parse(this.props.deadline);
        const currentTime = deadlineDate - Date.now();

        const hours = this.getNumber(Math.floor((currentTime / (1000 * 60 * 60)))),
            minutes = this.getNumber(Math.floor((currentTime / (1000 * 60)) % 60)),
            seconds = this.getNumber(Math.floor((currentTime / 1000) % 60));

        return `${hours}:${minutes}:${seconds}`;
    }

    getNumber = (number) => number < 10 ? `0${number}` : number;

    getDeadline = (deadline) => {

        const date = new Date(deadline),
              day = date.getDate(),
              month = String(date.getMonth() + 1).padStart(2, "0"),
              year = date.getFullYear(),
              hour = this.getNumber(date.getHours()), 
              minute = this.getNumber(date.getMinutes());
        return `${day}.${month}.${year} ${hour}:${minute}`;
    }

    render() {

        const { body, create, deadline } = this.props;

        const deadlineDate = Date.parse(deadline);

        const fullTime = deadlineDate - create;

        let currentTime = deadlineDate - Date.now();
        if (currentTime < 0) {
            currentTime = 0;
        }
        const prog = currentTime / fullTime * 100;


        return (
            <div className='item'>
                <div className='item-title'>
                    {body}
                </div>
                <div className='item-progress'>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar" style={{ width: `${prog}%` }}>{this.getDate()}</div>
                    </div>
                </div>
                <div className={`item-deadline ${this.state.active}`}>{this.getDeadline(deadline)}</div>
                <button
                    type='button'
                    className='item-delete btn btn-primary'
                    onClick={this.props.onDelete}
                >Delete</button>
            </div>
        );
    }

}