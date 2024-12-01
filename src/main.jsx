
import { createRoot } from 'react-dom/client'

//import './index.css'
import {  RouterProvider } from 'react-router-dom'
import NotebookRouter from './Router/NotebookRouter.jsx'

createRoot(document.getElementById('root')).render(


    <NotebookRouter>
    <RouterProvider router={NotebookRouter}/>
    
    </NotebookRouter>
)
