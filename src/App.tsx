import * as React from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { graphcoolEndPoint } from './__constants__';
import { Provider } from 'react-redux';
import { MainLayout } from './components/MainLayout';
import store from './store-index';

export const httpLink = createHttpLink({
  uri: graphcoolEndPoint,
});

export const errorLink: any = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
});

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache
});

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}  >
        <Provider store={store}>
          <div className="App">
              <MainLayout />
          </div>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
