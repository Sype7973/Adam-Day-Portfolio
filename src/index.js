import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';

const Root = () => (
  <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

export default Root;

