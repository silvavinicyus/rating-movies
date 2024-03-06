import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@progress/kendo-theme-default/dist/all.css';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from './pages/home.tsx'
import { AuthProvider } from './hooks/auth.tsx';

const queryClient = new QueryClient()

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/home',
      element: <Home />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}/>
        </AuthProvider>  
      </QueryClientProvider>    
  </React.StrictMode>,
)
