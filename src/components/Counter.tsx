import * as React from 'react';
import { ChatMessage } from '../models/ChatMessage';
import { Badge } from 'react-bootstrap';

export interface CounterProps {
    allMessages: ChatMessage[];
}

export class Counter extends React.Component<CounterProps, {}> {
    public render () {
        return (
            <div className="counter-container">
            <Badge>{this.props.allMessages && this.props.allMessages.length}</Badge> items
            </div>
        );
    }
}