import { connect, Dispatch } from 'react-redux';
import { InputMessageProps, InputMessage } from '../components/InputMessage';
import { ChatActions, handleMessage, addMessage } from '../actions/index';

export type ConnectedStateProps = Pick<InputMessageProps, 'message' | 'errorMessage'>;

export function mapStateToProps({ chatReducer: { message, errorMessage } }: any): ConnectedStateProps {
    return {
        message,
        errorMessage
    };
}

export type ConnectedDispatchProps = Pick<InputMessageProps, 'handleMessage' | 'addMessage'>;
export function mapDispatchToProps(dispatch: Dispatch<ChatActions>): ConnectedDispatchProps {
    return {
        handleMessage: (message: string) => dispatch(handleMessage(message)),
        addMessage: (message: string) => dispatch(addMessage(message))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMessage);