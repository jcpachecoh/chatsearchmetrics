import * as React from 'react';
import { Icon, Input, Button } from 'semantic-ui-react';
import { Alert } from 'react-bootstrap';

export interface InputMessageProps {
    message: string;
    handleMessage: Function;
    addMessage: Function;
    errorMessage: string;
}

export class InputMessage extends React.Component<InputMessageProps, {}> {

    public render() {
        return (
            <div className="input-message-container">
                <Input
                    type="text"
                    value={this.props.message}
                    placeholder="Type a message"
                    className="input-message"
                    onChange={(e: any) => this.props.handleMessage(e.target.value)}
                />
                <Button className="button-message" icon={true} onClick={() => this.props.addMessage(this.props.message)}>
                    <Icon name="send" />
                </Button>
                {this.props.errorMessage &&
                    <Alert bsStyle="danger" className="alert-message"><strong>{this.props.errorMessage}</strong> </Alert>
                }
            </div>
        );
    }
}