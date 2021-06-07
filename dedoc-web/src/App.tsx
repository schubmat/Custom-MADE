import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import {Layout} from "antd";

import SignIn from "./gui/pages/sign_in";
import {ROUTES} from "./constants/routes";
import {ProjectsPage} from "./gui/pages/projects";
import SignUp from "./gui/pages/sign_up";
import {ModelsPage} from "./gui/pages/models/index";
import {FilesPage} from "./gui/pages/files";
import {AuthenticationProvider} from "./gui/shared/contexts/Authentication";
import {Editor} from "./gui/pages/editor";
import {NewProject} from "./gui/pages/new_project";
import {NewModel} from "./gui/pages/new_model";


const App = () => (
    <AuthenticationProvider>


        <Router>
            <Layout>
                <Route exact path={ROUTES.ROOT} component={SignIn}/>
                <Route exact path={ROUTES.SIGN_IN} component={SignIn}/>
                <Route exact path={ROUTES.SIGN_UP} component={SignUp}/>
                <Route exact path={ROUTES.HOME} component={ProjectsPage}/>
                <Route exact path={ROUTES.NEW_PROJECT} component={NewProject}/>
                <Route exact path={ROUTES.MODELS} component={ModelsPage}/>
                <Route path={ROUTES.NEW_MODEL} component={NewModel}/>
                <Route path={ROUTES.EDITOR} component={Editor}/>
                <Route path={ROUTES.VERSION} component={FilesPage}/>
            </Layout>
        </Router>


    </AuthenticationProvider>
);

export default App;
