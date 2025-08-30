import React from 'react';
import {createRoot} from 'react-dom/client';
import Greetings from "./src/Greetings";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(<Greetings />);
