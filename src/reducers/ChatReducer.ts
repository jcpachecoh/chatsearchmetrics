import { ChatActions, HANDLE_MESSAGE, RENDER_ALL_MESSAGES, SET_REFRESH_FLAG, SET_ERROR, SHOW_MODAL, RENDER_MESSAGE, SET_UPDATE_FLAG } from '../actions/index';
const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

export const defaultChatModel = {
    allMessages: [],
    message: '',
    refreshFlag: false,
    errorMessage: '',
    showModalFlag: false,
    messageModel: {},
    updateFlag: false
};

export const chatReducer = (state = defaultChatModel, action: ChatActions) => {
    switch (action.type) {
        case HANDLE_MESSAGE:
            return newObject(state, { message: action.payload, errorMessage: '' });
        case SET_ERROR:
            return newObject(
                state,
                {
                    errorMessage: action.payload,
                }
            );

        case SHOW_MODAL:
            return newObject(
                state,
                {
                    showModalFlag: action.payload,
                }
            );

        case SET_REFRESH_FLAG:
            return newObject(
                state,
                {
                    refreshFlag: action.payload,
                }
            );
        case RENDER_ALL_MESSAGES:
            return newObject(
                state,
                {
                    allMessages: action.payload,
                }
            );
        case RENDER_MESSAGE:
            return newObject(
                state,
                {
                    messageModel: action.payload,
                }
            );

        case SET_UPDATE_FLAG:
            return newObject(
                state,
                {
                    updateFlag: action.payload,
                }
            );
        default:
            return state;
    }
};