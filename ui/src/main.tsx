import { createRoot } from 'react-dom/client'
import "./dist/index.css";
import App from './App.tsx';


createRoot(document.getElementById('app')!).render(
  <>
    <App />
  </>,
)
