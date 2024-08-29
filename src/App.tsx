import React from 'react';

import {RouterProvider} from "react-router-dom"
import './App.css';
import { router } from './routes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
</style>

function App() {
  return <RouterProvider router={router} />
}

export default App;
