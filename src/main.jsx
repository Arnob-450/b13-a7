import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router'
import TimeLineProvder from './context/TimeLineProvder'
import { ToastContainer } from 'react-toastify'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimeLineProvder>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </TimeLineProvder>

  </StrictMode>
)
