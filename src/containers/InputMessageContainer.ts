import { connect, Dispatch } from 'react-redux';
import { InputMessageProps, InputMessage } from '../components/InputMessage';
import { addMessage, ChatActions } from '../actions/index';

export type ConnectedStateProps = Pick<InputMessageProps, 'message'>;

export function mapStateToProps({ chatReducer: { message } }: any): ConnectedStateProps {
    return {
        message
    };
}

export type ConnectedDispatchProps = Pick<InputMessageProps, 'addMessage'>;
export function mapDispatchToProps(dispatch: Dispatch<ChatActions>): ConnectedDispatchProps {
    return { addMessage: (message: string) => dispatch(addMessage(message)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMessage);