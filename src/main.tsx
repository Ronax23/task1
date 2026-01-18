import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import BlogDetail from './Components/BlogDetail.tsx';
import BlogUp from './Components/BlogUp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<App/>}>
    <Route path='/blog/:id' element={<BlogDetail />}/></Route>
    <Route path="post" element={<BlogUp></BlogUp>} />
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
