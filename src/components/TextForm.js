

import React, { useState } from 'react';

export default function TextForm(props) {
 
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase", "success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared", "success");
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/ +/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Space", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#27274c' }} stylee={{ color: props.modee === 'dark' ? 'white' : '#27274c' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{ background: props.mode  === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#27274c'  } }
          stylee={{ background: props.modee  === 'dark' ? 'grey' : 'white', color: props.modee === 'dark' ? 'white' : '#27274c'  } }
          
          rows="8"
          placeholder="Enter the text to analyze below"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} style={{ backgroundColor: 'blue' }}>Convert to upper case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} style={{ backgroundColor: 'blue' }}>Convert to lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} style={{ backgroundColor: 'blue' }}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} style={{ backgroundColor: 'blue' }}>Copy</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} style={{ backgroundColor: 'blue' }}>Remove Extra Space</button>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#27274c' }} stylee={{ color: props.modee === 'dark' ? 'white' : '#27274c' }}>
        <h2>Your text summary here</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {1000 - text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview it here"}</p>
      </div>
    </div>
  )
}
