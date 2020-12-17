import React, { Component } from 'react'
import User from '../interfaces/users.interface';
import "../index.scss"
export default class Search extends Component<User> {
    render() {
        const {name} = this.props;
        return (
            <div>
                {name}
            </div>
        )
    }
}
