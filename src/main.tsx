import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react'
import {HeroUIProvider} from "@heroui/react";

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <HeroUIProvider>
   <App />
   </HeroUIProvider>
   
  </React.StrictMode>,
)
