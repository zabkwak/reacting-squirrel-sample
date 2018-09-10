import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Component } from 'reacting-squirrel';

export default class User extends Component<{ user: { name: string } }> {

    static propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
    };

    render() {
        const { user } = this.props;
        if (!user) {
            return <h2>...</h2>;
        }  
        return <h2>{user.name}</h2>
    }

}