import { Action } from './action';

export const HANDLE_MESSAGE = 'HandleMessage';
export type HANDLE_MESSAGE = typeof HANDLE_MESSAGE;
export const ADD_MESSAGE = 'AddMessage';
export type ADD_MESSAGE = typeof ADD_MESSAGE;
export const DELETE_MESSAGE = 'DeleteMessage';
export type DELETE_MESSAGE = typeof DELETE_MESSAGE;
export const UPDATE_MESSAGE = 'UpdateMessage';
export type UPDATE_MESSAGE = typeof UPDATE_MESSAGE;

export class HandleMessage implements Action {
    type: HANDLE_MESSAGE;
    payload: string;
}

export function handleMessage(message: string): HandleMessage {
    return {
        type: HANDLE_MESSAGE,
        payload: message
    };
}

export class AddMessage implements Action {
    type: ADD_MESSAGE;
    payload: string;
}

export function addMessage(message: string): AddMessage {
    return {
        type: ADD_MESSAGE,
        payload: message
    };
}

export class DeleteMessage implements Action {
    type: DELETE_MESSAGE;
    payload: string;
}

export function deleteMessage(id: string): DeleteMessage {
    return {
        type: DELETE_MESSAGE,
        payload: id
    };
}

export class UpdateMessage implements Action {
    type: UPDATE_MESSAGE;
    payload: string;
}

export function updateMessage(message: string): UpdateMessage {
    return {
        type: UPDATE_MESSAGE,
        payload: message
    };
}

export type ChatActions =
    AddMessage |
    DeleteMessage |
    UpdateMessage |
    HandleMessage;