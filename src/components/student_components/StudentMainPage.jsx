import React, { Component } from 'react'
import NavBar from './NavigationBar.jsx'

import {
    EuiPage,
    EuiPageBody,
    EuiPageSideBar,
  } from '@elastic/eui';
  
import SidebarComponent from './SidebarComponent'
import StudentExamSchedule from './StudentExamSchedule'

export class StudentMainPage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <EuiPage>
                    <EuiPageSideBar><SidebarComponent/></EuiPageSideBar>
                    <EuiPageBody>
                        <StudentExamSchedule/>
                       
                    </EuiPageBody>
                </EuiPage>
            </div>
        )
    }
}

export default StudentMainPage;
