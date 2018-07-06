import React from 'react'
import { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as action from "../../redux/action/index"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.actions.test({ p: 1, form: "home" })
    }
    render() {
        return (
            <h1>{this.props.res}</h1>
        );
    }
}

const StateToProps = state => {
    return {
        res: state.main.get("res")
    };
};

const DispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(action, dispatch)
    };
};
export default connect(StateToProps, DispatchToProps)(Home);