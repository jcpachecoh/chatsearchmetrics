import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ChatMessage } from '../models/ChatMessage';
import { Input } from 'semantic-ui-react';

export interface ModalConfirmProps {
    showModalFlag: boolean;
    deleteMessage: Function;
    showModal: Function;
    messageModel: ChatMessage;
    updateFlag: boolean;
    updateMessage: Function;
    handleMessage: Function;
    message: string;
}

export class ModalConfirm extends React.Component<ModalConfirmProps, {}> {
    constructor(props: ModalConfirmProps) {
        super(props);
    }

    public render() {
        return (
            <Modal
                show={this.props.showModalFlag}
                onHide={() => this.props.showModal(false)}
                container={this}
                aria-labelledby="contained-modal-title"
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title id="contained-modal-title">
                        Confirm Modal
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.updateFlag &&
                        <Input
                            type="text"
                            value={this.props.message}
                            placeholder="Type a message to update"
                            className="input-message-update"
                            size="big"
                            icon="edit"
                            onChange={(e: any) => this.props.handleMessage(e.target.value)}
                        />
                    }
                    {!this.props.updateFlag &&
                        <p>¿Are you sure that you want to delete message <b> {this.props.messageModel.message}</b>?</p>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.showModal(false)}>Close</Button>
                    <Button
                        bsStyle="primary"
                        onClick={() => {
                            if (this.props.updateFlag) {
                                this.props.updateMessage(this.props.messageModel.id);
                                this.props.showModal(false);
                            } else {
                                this.props.deleteMessage(this.props.messageModel.id);
                                this.props.showModal(false);
                            }
                        }}
                    >Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}