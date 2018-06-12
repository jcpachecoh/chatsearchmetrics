jest.unmock('redux-mock-store');
jest.unmock('redux');
import { createStore, compose, applyMiddleware } from 'redux';
import { chatReducer, defaultChatModel } from '../reducers/ChatReducer';
import { ChatMessage } from '../models/ChatMessage';
import { handleMessage, renderAllMessages, renderMessage, setRefreshFlag, showModal, setUpdateFlag, setError, addMessage } from '../actions/index';
import thunk from 'redux-thunk';

const configureMockStore = require('redux-mock-store');

describe('Test User reducer', () => {
    const mockStore = configureMockStore();
    let defaultChatMessagesMock: any,
        store: any,
        storeActions: any,
        action: any,
        allMessagesMocked: ChatMessage[],
        message: string,
        errorMessage: string;

    beforeEach(() => {
        allMessagesMocked = [
            {
                'id': 'cji69r8f5q6sk0111ipp8erkh',
                'message': 'hello',
                'createdAt': new Date('2018-06-08T17:53:04.000Z'),
                'updatedAt': new Date('2018-06-08T17:53:04.000Z')
            },
            {
                'id': 'cji69wd3i5oy9019252fz4yz0',
                'message': 'how are u??',
                'createdAt': new Date('2018-06-08T17:57:03.000Z'),
                'updatedAt': new Date('2018-06-08T17:57:03.000Z')
            },
        ];
        message = 'Hi how are u?';
        errorMessage = 'The message can not be empty please type something';
        store = createStore(
            chatReducer,
            compose(applyMiddleware(thunk))
        );
        defaultChatMessagesMock = {
            allMessages: [],
            message: '',
            refreshFlag: false,
            errorMessage: '',
            showModalFlag: false,
            messageModel: {},
            updateFlag: false
        };
        storeActions = mockStore(defaultChatMessagesMock);
    });
    describe('Test general actions reducer transactions', () => {
        it('Return initial state', () => {
            expect(defaultChatMessagesMock).toEqual(defaultChatModel);
        });

        it('should call handleMessage function', () => {
            storeActions.dispatch(handleMessage(message));
            action = storeActions.getActions();
            expect(action[0].type).toBe('HandleMessage');
        });

        it('should change payload calling handleMessage function', () => {
            storeActions.dispatch(handleMessage(message));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(message);
        });

        it('should change store message with handleMessage', () => {
            store.dispatch(handleMessage(message));
            store = store.getState();
            expect(store.message).toBe(message);
        });

        it('should call renderAllMessages function', () => {
            storeActions.dispatch(renderAllMessages(allMessagesMocked));
            action = storeActions.getActions();
            expect(action[0].type).toBe('RenderAllMessages');
        });

        it('should change payload calling renderAllMessages function', () => {
            storeActions.dispatch(renderAllMessages(allMessagesMocked));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(allMessagesMocked);
        });

        it('should change store allMessages with renderAllMessages', () => {
            store.dispatch(renderAllMessages(allMessagesMocked));
            store = store.getState();
            expect(store.allMessages).toBe(allMessagesMocked);
        });

        it('should call renderMessage function', () => {
            storeActions.dispatch(renderMessage(allMessagesMocked[0]));
            action = storeActions.getActions();
            expect(action[0].type).toBe('RenderMessage');
        });

        it('should change payload calling renderMessage function', () => {
            storeActions.dispatch(renderMessage(allMessagesMocked[0]));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(allMessagesMocked[0]);
        });

        it('should change store messageModel with renderMessage', () => {
            store.dispatch(renderMessage(allMessagesMocked[0]));
            store = store.getState();
            expect(store.messageModel).toBe(allMessagesMocked[0]);
        });

        it('should call setRefreshFlag function', () => {
            storeActions.dispatch(setRefreshFlag(true));
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetRefreshFlag');
        });

        it('should change payload calling setRefreshFlag function', () => {
            storeActions.dispatch(setRefreshFlag(true));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(true);
        });

        it('should change store refreshFlag with setRefreshFlag', () => {
            store.dispatch(setRefreshFlag(true));
            store = store.getState();
            expect(store.refreshFlag).toBe(true);
        });

        it('should call showModal function', () => {
            storeActions.dispatch(showModal(true));
            action = storeActions.getActions();
            expect(action[0].type).toBe('ShowModal');
        });

        it('should change payload calling showModal function', () => {
            storeActions.dispatch(showModal(true));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(true);
        });

        it('should change store showModalFlag with showModal', () => {
            store.dispatch(showModal(true));
            store = store.getState();
            expect(store.showModalFlag).toBe(true);
        });

        it('should call setUpdateFlag function', () => {
            storeActions.dispatch(setUpdateFlag(true));
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetUpdateFlag');
        });

        it('should change payload calling setUpdateFlag function', () => {
            storeActions.dispatch(setUpdateFlag(true));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(true);
        });

        it('should change store updateFlag with setUpdateFlag', () => {
            store.dispatch(setUpdateFlag(true));
            store = store.getState();
            expect(store.updateFlag).toBe(true);
        });

        it('should call setError function', () => {
            storeActions.dispatch(setError(errorMessage));
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetError');
        });

        it('should change payload calling setError function', () => {
            storeActions.dispatch(setError(errorMessage));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(errorMessage);
        });

        it('should change store updateFlag with setError', () => {
            store.dispatch(setError(errorMessage));
            store = store.getState();
            expect(store.errorMessage).toBe(errorMessage);
        });

        it('should show the error when try to send empty message with addMessage', () => {
            store.dispatch(addMessage(''));
            store = store.getState();
            expect(store.errorMessage).toBe(errorMessage);
        });

    });
});