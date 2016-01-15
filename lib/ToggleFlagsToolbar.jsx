/**
 * Created by yan on 16-1-15.
 */
import React from 'react';
import Toggle from 'react-toggle';

const PREFIX = 'REACT_TOGGLE_FLAGS';

const ToggleFlagsToolbar = (props)=> {

  let {
    flags=['debug'],
    title='Debug Flags:'
    } = props;

  return <div className="toggle-flags-toolbar">
    <div className="toggle-flags-toolbar-title">{title}</div>
    <hr/>
    {flags.map(v=> {
      return <div key={v}><label>
        <Toggle defaultChecked={Flag(v)}
                onChange={e=>localStorage.setItem(`${PREFIX}_${v}`, e.target.checked)}/>
        <span>{' '}{v}</span>
      </label></div>
    })
    }
  </div>
}

export default ToggleFlagsToolbar;

export const Flag = (item)=> {
  return localStorage.getItem(`${PREFIX}_${item}`) == 'true';
};