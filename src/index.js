import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

// const httpLink = new HttpLink({
//   uri: 'https://connect.carfax.com/v1/graphql', // Server URL (must be absolute)
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// });

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
