import { connect, Dispatch } from 'react-redux';
import { ChatActions, showModal, deleteMessage, handleMessage, updateMessage } from '../actions/index';
import { ModalConfirm, ModalConfirmProps } from '../components/ModalConfirm';

export type ConnectedStateProps = Pick<ModalConfirmProps, 'showModalFlag' | 'messageModel' | 'message' | 'updateFlag'>;

export function mapStateToProps({ chatReducer: { showModalFlag, messageModel, message, updateFlag } }: any): ConnectedStateProps {
    return {
        showModalFlag,
        messageModel,
        updateFlag,
        message
    };
}

export type ConnectedDispatchProps = Pick<ModalConfirmProps, 'showModal' | 'deleteMessage' | 'handleMessage' | 'updateMessage'>;
export function mapDispatchToProps(dispatch: Dispatch<ChatActions>): ConnectedDispatchProps {
    return {
        showModal: (flag: boolean) => dispatch(showModal(flag)),
        deleteMessage: (id: string) => dispatch(deleteMessage(id)),
        updateMessage: (id: string) => dispatch(updateMessage(id)),
        handleMessage: (message: string) => dispatch(handleMessage(message)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirm);