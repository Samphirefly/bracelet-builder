/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const SizeButtons = props => (

  <div id="buttonContainer">
    <button type="button" btn-type="smallbtn" className="btn" onClick={props.handler} value="small">
        Small Bracelet
      {' '}
      <br />
        6.5"
    </button>
    <button type="button" btn-type="mediumbtn" className="btn activebtn" onClick={props.handler} value="medium">
        Medium Bracelet
      {' '}
      <br />
        7"
    </button>
    <button type="button" btn-type="largebtn" className="btn" onClick={props.handler} value="large">
        Large Bracelet
      {' '}
      <br />
        7.5"
    </button>
  </div>

);

export default SizeButtons;
