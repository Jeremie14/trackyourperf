import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import WelcomePage from './WelcomePage'
import Login from './login'

import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
