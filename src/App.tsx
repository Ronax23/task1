import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Nav from './Components/Nav.tsx'
import BlogRead from './Components/Blogleft.tsx';
import BlogMain from './Components/BlogMain.tsx';
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Nav/>
    <BlogMain/>
  </QueryClientProvider>)
}

export default App
