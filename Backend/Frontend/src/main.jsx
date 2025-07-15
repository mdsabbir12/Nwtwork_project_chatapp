import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Authprovider } from './Context/Authprovider.jsx';
import SocketProvider from './Context/SocketContex.jsx';


createRoot(document.getElementById('root')).render(
  <Authprovider>
    <SocketProvider>
    <App/>
    </SocketProvider>  
  </Authprovider>
)

