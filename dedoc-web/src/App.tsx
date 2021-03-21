import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import {Layout} from "antd";

import SignIn from "./pages/SignIn";
import {ROUTES} from "./constants/routes";
import {Projects} from "./pages/Projects";
import {NewProject} from "./pages/NewM0Project";
import {Editor} from "./pages/Editor";
import SignUp from "./pages/SignUp";
import {Models} from "./pages/Models";
import {NewModel} from "./pages/NewM1Project";
import {VersionDetail} from "./pages/VersionDetail";
import {AuthenticationProvider} from "./contexts/Authentication";


const App = () => (
    <AuthenticationProvider>
        <Router>
            <Layout>
                <Route exact path={ROUTES.ROOT} component={SignIn}/>
                <Route exact path={ROUTES.SIGN_IN} component={SignIn}/>
                <Route exact path={ROUTES.SIGN_UP} component={SignUp}/>
                <Route exact path={ROUTES.HOME} component={Projects}/>
                <Route exact path={ROUTES.NEW_PROJECT} component={NewProject}/>
                <Route exact path={ROUTES.MODELS} component={Models}/>
                <Route path={ROUTES.NEW_MODEL} component={NewModel}/>
                <Route path={ROUTES.EDITOR} component={Editor}/>
                <Route path={ROUTES.VERSION} component={VersionDetail}/>
            </Layout>
        </Router>
    </AuthenticationProvider>
);

export default App;
