import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './Game'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Game />
//   </React.StrictMode>,
// )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

