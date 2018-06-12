import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../App';
import { Counter } from '../components/Counter';
import { ChatMessage } from '../models/ChatMessage';
import { InputMessage } from '../components/InputMessage';
import { ModalConfirm } from '../components/ModalConfirm';
import { ChatContent } from '../components/ChatContent';
import { Provider } from 'react-redux';
import store from '../store-index';

describe('Should render all components without crashing', () => {
  let allMessagesMocked: ChatMessage[],
    message: string,
    errorMessage: string,
    mockFn: Function;
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
    mockFn = jest.fn();
  });
  it('renders without App crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders InputMesage without  crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <InputMessage
        message={message}
        handleMessage={mockFn}
        addMessage={(mockFn)}
        errorMessage={errorMessage}
      />,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders ChatContent without  crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <ChatContent
          allMessages={allMessagesMocked}
          refreshFlag={true}
          renderAllMessages={mockFn}
          setRefreshFlag={mockFn}
          showModal={mockFn}
          renderMessage={mockFn}
          setUpdateFlag={mockFn}
        />
      </Provider>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders ModalConfirm without  crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ModalConfirm
        showModalFlag={true}
        updateFlag={true}
        deleteMessage={mockFn}
        showModal={mockFn}
        updateMessage={mockFn}
        handleMessage={mockFn}
        message={message}
        messageModel={allMessagesMocked[0]}
      />,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Counter without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Counter allMessages={allMessagesMocked} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
