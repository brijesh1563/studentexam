import React, { Component } from 'react'
import StudentMainPage from './StudentMainPage'
import ExamWarning from './ExamWarning'
import ExaminationPage from './ExaminationPage'
import {
    BrowserRouter,
    Switch,
    Route,
  } from 'react-router-dom';

export class Routing extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>    
                        <Route exact path="/" component={StudentMainPage}/>
                        <Route exact path="/examwarning" component={ExamWarning}/>
                        <Route exact path="/expg" component={ExaminationPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routing;
