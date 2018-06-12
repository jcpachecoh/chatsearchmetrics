import * as React from 'react';
import { ChatMessage } from '../models/ChatMessage';
import { request } from 'graphql-request';
import { graphcoolEndPoint } from '../__constants__/index';
import { Dimmer, Loader, Button, Icon } from 'semantic-ui-react';
import avatarMale from '../assets/avatar_male.svg';
import { Row, Col } from 'react-bootstrap';
import { formatDate } from '../scripts/index';
import ModalConfirmContainer from '../containers/ModalConfirmContainer';

export interface ChatContentProps {
    allMessages: ChatMessage[];
    renderAllMessages: Function;
    refreshFlag: boolean;
    setRefreshFlag: Function;
    showModal: Function;
    renderMessage: Function;
    setUpdateFlag: Function;
}

interface ChatContentState {
    loading: boolean;
}

const AllMessagesQuery = `
 query allMessages {
  allMessages {
      id
      message,
      createdAt,
      updatedAt
    }
  }
`;

export class ChatContent extends React.Component<ChatContentProps, ChatContentState> {
    constructor(props: ChatContentProps) {
        super(props);

        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        this.refresh();
    }

    componentWillReceiveProps(nextProps: ChatContentProps) {
        if (nextProps.refreshFlag !== this.props.refreshFlag) {
            this.refresh();
        }
    }

    refresh() {
        this.setState({
            loading: true
        });
        request(graphcoolEndPoint, AllMessagesQuery, {})
            .then((data: any) => {
                this.props.renderAllMessages(data.allMessages);
                this.setState({
                    loading: false
                });
                this.props.setRefreshFlag(false);
                var objDiv = document.getElementById('chat-content') as HTMLElement;
                objDiv.scrollTop = objDiv.scrollHeight;
            });
    }
    public render() {
        return (
            <div className="chat-content" id="chat-content">
                {!this.state.loading && this.props.allMessages
                    && this.props.allMessages.map((item: ChatMessage, index) => {
                        return <Row key={index} className="show-grid message" >
                            <Col md={2}>
                                <img src={avatarMale} alt="avatar" />
                            </Col>
                            <Col md={10}>
                                <div className={'message-container'}>
                                    <b>{item.message}
                                        <Button
                                            className="button-message"
                                            icon={true}
                                            onClick={() => {
                                                this.props.renderMessage(item);
                                                this.props.showModal(true);
                                                this.props.setUpdateFlag(true);
                                            }
                                            }
                                        >
                                            <Icon name="edit" />
                                        </Button>
                                        <Button
                                            className="button-message"
                                            icon={true}
                                            onClick={() => {
                                                this.props.showModal(true);
                                                this.props.renderMessage(item);
                                                this.props.setUpdateFlag(false);
                                            }
                                            }
                                        >
                                            <Icon name="close" />
                                        </Button></b>
                                    <p>{formatDate(item.createdAt)}</p>
                                    <ModalConfirmContainer />
                                </div>
                            </Col>
                        </Row>;
                    })}
                {this.state.loading &&
                    <Dimmer active={true} inverted={true}>
                        <Loader>Loading</Loader>
                    </Dimmer>
                }
            </div>
        );
    }
}