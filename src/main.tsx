import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {MovieApp} from "./models/movie/view/MovieApp.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MovieApp />
  </StrictMode>,
)
