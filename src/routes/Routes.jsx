import * as React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from "../App";
import TrackPage from "../pages/track-page/track-page-container";
import Header from "../components/header/header-container";
import { Container } from "@material-ui/core";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Container>
                <Switch>
                    <Route path="/:trackID" render={(props) => <TrackPage {...props} />} />
                    <Route path="/" render={(props) => <App {...props} />} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}