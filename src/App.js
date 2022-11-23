import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
