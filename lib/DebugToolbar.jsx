/**
 * Created by yan on 16-1-15.
 */
import React from 'react';
import Toggle from 'react-toggle';

const DebugToolbar = (props)=> {
  let {
    variables=["chart", "redux-logger"]
    } = props;

  return <div className="debug-toolbar">
    <div style={{fontSize:'0.8em'}}>DebugToolbar</div>
    <hr/>
    {variables.map(v=> {
      return <div key={v}><label>
        <Toggle defaultChecked={DebugBoolean(v)}
                onChange={e=>localStorage.setItem(`debug-${v}`, e.target.checked)}/>
        <span>{v}</span>
      </label></div>
    })
    }
  </div>
}

export default DebugToolbar

export const DebugBoolean = (item)=> {
  return localStorage.getItem(`debug-${item}`) == 'true';
}