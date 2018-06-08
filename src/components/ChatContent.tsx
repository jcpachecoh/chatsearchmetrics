import * as React from 'react';
import { ChatMessage } from '../models/ChatMessage';
import { ChildProps, graphql } from 'react-apollo';
import gql from 'graphql-tag';

export interface ChatContentProps {
    messages: string[];
}

type Data = {
    allMessages: ChatMessage[]
};

const AllMessagesQuery = gql`
 query allMessages {
  allMessages {
      id
      message,
      createdAt
    }
  }
`;

export const withChatContent = graphql<Data, ChatContentProps>(AllMessagesQuery, {
    options: () => ({
        errorPolicy: 'all',
        fetchPolicy: 'network-only'
    })
});

class ChatContent extends React.Component<ChildProps<ChatContentProps, Data>, {}> {

    public render() {
        if (this.props.data.loading) {
            return (<div>Loading</div>)
        }
        return (
            <div>
                {this.props.data.allMessages &&
                    this.props.data.allMessages.map((item, index) => ´{

                })
            }
        </div>
        );
    }
}

const ChatContentWithData = graphql(AllMessagesQuery)(ChatContent);

export default ChatContentWithData;