export const queryCreateMessage = `mutation($message: String!){
    createMessage(
        message: $message,
    ){
        id
    }
  }`;

export const queryUpdateMessage = `mutation($id: ID!, $message: String! ){
  updateMessage(
        id: $id,
        message: $message
    ){
        id
    }
  }`;

export const queryUpdateMessageContent = `mutation($id: ID!, $message: String! ){
    updateMessage(
        id: $id,
        message: $message
    ){
        id
    }
  }`;

export const queryGetUser = `query($username: String!, $password: String!){
    allUsers(filter: {
      userName: $username,
      password: $password
    }){
      id
    }
  }`;

export const queryDeleteMessage = `mutation($id: ID!) {
    deleteMessage(
      id: $id
    ){
      id
    }
  }`;

export const queryCreateTodoList = `mutation($listname: String!, $authorId: ID!){
  createTodoList(
        listname: $listname,
        authorId: $authorId,
    ){
        id
    }
  }`;