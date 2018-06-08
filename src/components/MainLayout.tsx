import * as React from 'react';
import InputMessageContainer from '../containers/InputMessageContainer';
import ChatContentWithData from './ChatContent';

export class MainLayout extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="main-layout">
                <ChatContentWithData />
                <InputMessageContainer />
            </div>
        );
    }
}