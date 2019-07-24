import * as React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from "../App";
import TrackPage from "../pages/track-page/track-page-container";
import Header from "../components/header/header-container";
import { Container } from "@material-ui/core";
import Footer from "../content-layout/footer";
import NotFoundPage from "../components/notFoundPage";

export function Routes() {
    return (
        <BrowserRouter>
            <Header/>
            <Container style={{minHeight: '60vh'}}>
                <Switch>
                    <Route path="/:trackID" component={TrackPage} />
                    <Route path="/" component={App} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Container>
            <Footer/>
        </BrowserRouter>
    )
}