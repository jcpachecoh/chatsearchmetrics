import { Action } from './action';
import { ChatMessage } from '../models/ChatMessage';
import { request } from 'graphql-request';
import { graphcoolEndPoint } from '../__constants__/index';
import { queryCreateMessage, queryDeleteMessage, queryUpdateMessage } from '../querys/index';
import * as _ from 'lodash';

export const HANDLE_MESSAGE = 'HandleMessage';
export type HANDLE_MESSAGE = typeof HANDLE_MESSAGE;
export const RENDER_ALL_MESSAGES = 'RenderAllMessages';
export type RENDER_ALL_MESSAGES = typeof RENDER_ALL_MESSAGES;
export const ADD_MESSAGE = 'AddMessage';
export type ADD_MESSAGE = typeof ADD_MESSAGE;
export const DELETE_MESSAGE = 'DeleteMessage';
export type DELETE_MESSAGE = typeof DELETE_MESSAGE;
export const UPDATE_MESSAGE = 'UpdateMessage';
export type UPDATE_MESSAGE = typeof UPDATE_MESSAGE;
export const SET_REFRESH_FLAG = 'SetRefreshFlag';
export type SET_REFRESH_FLAG = typeof SET_REFRESH_FLAG;
export const SET_ERROR = 'SetError';
export type SET_ERROR = typeof SET_ERROR;
export const SHOW_MODAL = 'ShowModal';
export type SHOW_MODAL = typeof SHOW_MODAL;
export const RENDER_MESSAGE = 'RenderMessage';
export type RENDER_MESSAGE = typeof RENDER_MESSAGE;
export const SET_UPDATE_FLAG = 'SetUpdateFlag';
export type SET_UPDATE_FLAG = typeof SET_UPDATE_FLAG;

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

export class SetError implements Action {
    type: SET_ERROR;
    payload: string;
}

export function setError(error: string): SetError {
    return {
        type: SET_ERROR,
        payload: error
    };
}

export class SetRefreshFlag implements Action {
    type: SET_REFRESH_FLAG;
    payload: boolean;
}

export function setRefreshFlag(flag: boolean): SetRefreshFlag {
    return {
        type: SET_REFRESH_FLAG,
        payload: flag
    };
}

export function addMessage(message: string): any {
    return (dispatch: any, getState: any) => {
        const variables = {
            message: message
        };
        if (_.isEmpty(message)) {
            dispatch(setError('The message can not be empty please type something'));
        } else {
            request(graphcoolEndPoint, queryCreateMessage, variables)
                .then((data: any) => {
                    dispatch(setRefreshFlag(true));
                    dispatch(handleMessage(''));
                });
        }
    };
}

export class DeleteMessage implements Action {
    type: DELETE_MESSAGE;
    payload: string;
}

export function deleteMessage(id: string): any {
    return (dispatch: any, getState: any) => {
        const variables = {
            id: id
        };

        request(graphcoolEndPoint, queryDeleteMessage, variables)
            .then((data: any) => {
                dispatch(setRefreshFlag(true));
                dispatch(handleMessage(''));
            });
    };
}

export class UpdateMessage implements Action {
    type: UPDATE_MESSAGE;
    payload: string;
}

export function updateMessage(id: string): any {
    return (dispatch: any, getState: any) => {
        let state = getState();

        const variables = {
            id: id,
            message: state.chatReducer.message
        };

        request(graphcoolEndPoint, queryUpdateMessage, variables)
            .then((data: any) => {
                dispatch(setRefreshFlag(true));
                dispatch(handleMessage(''));
            });
    };
}

export class RenderAllMessages implements Action {
    type: RENDER_ALL_MESSAGES;
    payload: ChatMessage[];
}

export function renderAllMessages(allMessages: ChatMessage[]): RenderAllMessages {
    return {
        type: RENDER_ALL_MESSAGES,
        payload: allMessages
    };
}

export class ShowModal implements Action {
    type: SHOW_MODAL;
    payload: boolean;
}

export function showModal(flag: boolean): ShowModal {
    return {
        type: SHOW_MODAL,
        payload: flag
    };
}

export class SetUpdateFlag implements Action {
    type: SET_UPDATE_FLAG;
    payload: boolean;
}

export function setUpdateFlag(flag: boolean): SetUpdateFlag {
    return {
        type: SET_UPDATE_FLAG,
        payload: flag
    };
}

export class RenderMessage implements Action {
    type: RENDER_MESSAGE;
    payload: ChatMessage;
}

export function renderMessage(message: ChatMessage): RenderMessage {
    return {
        type: RENDER_MESSAGE,
        payload: message
    };
}

export type ChatActions =
    SetRefreshFlag |
    DeleteMessage |
    UpdateMessage |
    HandleMessage |
    SetError |
    RenderAllMessages |
    ShowModal |
    RenderMessage |
    SetUpdateFlag;