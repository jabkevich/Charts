import React, {Component, Fragment} from 'react'
import {HashRouter as Router, Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import BudgetExecution from "./BudgetExecution/BudgetExecution";
import Menu from "./Menu"


class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                   <Menu/>
                </Switch>
            </Router>
        )
    }
}



export default App
