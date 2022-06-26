import {ApolloProvider} from '@apollo/client';
import type {AppProps} from 'next/app';
import WrapperLayout from '../components/layouts/WrapperLayout';
import {client} from '../lib/apollo';
import '../styles/global.css';


function MyApp({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <WrapperLayout>
        <Component {...pageProps} />
      </WrapperLayout>
    </ApolloProvider>
  );
}

export default MyApp;
