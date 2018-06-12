import { connect, Dispatch } from 'react-redux';
import { ChatActions, renderAllMessages, setRefreshFlag, showModal, renderMessage, setUpdateFlag } from '../actions/index';
import { ChatContent, ChatContentProps } from '../components/ChatContent';
import { ChatMessage } from '../models/ChatMessage';

export type ConnectedStateProps = Pick<ChatContentProps, 'allMessages' | 'refreshFlag'>;

export function mapStateToProps({ chatReducer: { allMessages, refreshFlag } }: any): ConnectedStateProps {
    return {
        allMessages, refreshFlag
    };
}

export type ConnectedDispatchProps = Pick<ChatContentProps, 'renderAllMessages' |
    'setRefreshFlag' |
    'showModal' |
    'renderMessage' |
    'setUpdateFlag'>;
export function mapDispatchToProps(dispatch: Dispatch<ChatActions>): ConnectedDispatchProps {
    return {
        renderAllMessages: (messages: ChatMessage[]) => dispatch(renderAllMessages(messages)),
        setRefreshFlag: (flag: boolean) => dispatch(setRefreshFlag(flag)),
        showModal: (flag: boolean) => dispatch(showModal(flag)),
        renderMessage: (message: ChatMessage) => dispatch(renderMessage(message)),
        setUpdateFlag:  (flag: boolean) => dispatch(setUpdateFlag(flag)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContent);