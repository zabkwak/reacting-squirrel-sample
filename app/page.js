import React from 'react';

import { Page } from 'reacting-squirrel';

import './page.css';
import './page.scss';

export default class PageComponent extends Page {

    state = {
        user: null,
    };

    componentDidMount() {
        super.componentDidMount();
        this.request('user.load', (err, user) => {
            if (err) {
                alert(err.message);
                return;
            }
            this.setState({ user });
        });
    }

    render() {
        const { user } = this.state;
        return (
            <div>
                <h1>Page</h1>
                <h2>{user ? user.name : '...'}</h2>
            </div>
        );
    }
}