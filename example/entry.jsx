/**
 * Created by yan on 16-1-15.
 */

import React from 'react';
import {render} from 'react-dom';
import DebugToolbar from '../lib/DebugToolbar.jsx';

import  'style!css!../style.css';
import  'style!css!react-toggle/style.css';

var element = document.createElement('div');
document.body.appendChild(element);

render(<DebugToolbar/>, element);

