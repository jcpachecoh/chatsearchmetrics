import { ADD_MESSAGE, ChatActions, HANDLE_MESSAGE } from '../actions/index';
const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

export const defaultChatModel = {
    messages: [],
    message: ''
};

export const chatReducer = (state = defaultChatModel, action: ChatActions) => {
    switch (action.type) {
        case HANDLE_MESSAGE:
            return newObject(state, { message: action.payload });

        case ADD_MESSAGE:
            let messagesClone: string[] = state.messages.slice();

            messagesClone.push(action.payload);
            return newObject(
                state,
                {
                    messages: messagesClone,
                }
            );

        default:
            return state;
    }
};