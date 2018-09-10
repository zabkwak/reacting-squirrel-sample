import React from 'react';

import { Page } from 'reacting-squirrel';

import User from './components/user.tsx';

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
                <User user={user} />
            </div>
        );
    }
}