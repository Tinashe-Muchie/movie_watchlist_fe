import React from 'react';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider} from '@apollo/client';
import { GlobalContext } from './Context/GlobalContext';
import { Routing } from './Routing/Routing';
import './styles.css';

const client = new ApolloClient({
  uri: 'https://pensive-kowalevski-eedfe0.netlify.app/',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
    <GlobalContext>
        <Routing />
    </GlobalContext>    
    </ApolloProvider>
  );
}

export default App;
