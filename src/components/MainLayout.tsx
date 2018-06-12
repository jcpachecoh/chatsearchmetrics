import * as React from 'react';
import InputMessageContainer from '../containers/InputMessageContainer';
import ChatContentContainer from '../containers/ChatContentContainer';
import { Grid } from 'react-bootstrap';
import CounterContainer from '../containers/CounterContainer';

export class MainLayout extends React.Component<{}, {}> {
    public render() {
        return (
            <Grid>
                <CounterContainer />
                <ChatContentContainer />
                <InputMessageContainer />
            </Grid>
        );
    }
}