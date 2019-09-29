import React, {Component} from 'react';

import { ErrorIndicator } from './index'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    };

    componentDidCatch () {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }
        return this.props.children;
    }
};