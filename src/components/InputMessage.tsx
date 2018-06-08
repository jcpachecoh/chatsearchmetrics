import * as React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap/lib/InputGroup';

export interface InputMessageProps {
    message: string;
    addMessage: Function;
}

export class InputMessage extends React.Component<InputMessageProps, {}> {

    public render() {
        return (
            <div>
                <FormGroup>
                    <FormControl
                        type="text"
                        value={this.props.message}
                        placeholder="Type a message"
                        onKeyDown={(e: any) => this.props.addMessage(e)}
                        onChange={() => this.props.addMessage()}
                    />
                    <Button className="button-send-message" >Send</Button>
                </FormGroup>
            </div>
        );
    }
}