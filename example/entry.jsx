/**
 * Created by yan on 16-1-15.
 */

import React from 'react';
import {render} from 'react-dom';
import ToggleFlagsToolbar,{Flag} from '../lib/ToggleFlagsToolbar.jsx';

import  'style!css!../style.css';
import  'style!css!react-toggle/style.css';

var element = document.createElement('div');
document.body.appendChild(element);

render(<div>
  <div>
    <label>
      flag1
      <input readOnly defaultValue={Flag('flag1')}/>
    </label>
  </div>
  <div>
    <label>
      flag2
      <input readOnly defaultValue={Flag('flag2')}/>
    </label>
  </div>
  <ToggleFlagsToolbar flags={["flag1","flag2"]}/>
</div>, element);

