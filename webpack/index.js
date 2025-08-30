import React from 'react';
import {createRoot} from 'react-dom/client';
import Greetings from "./src/Greetings";

// Тестируем переменные окружения
console.log('Environment variables in browser:', {
  YAY: process.env.YAY,
  IS_PRODE: process.env.IS_PRODE
});

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(<Greetings />);
