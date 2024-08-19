import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert && props.showAlert("Converted to uppercase", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert && props.showAlert("Converted to lowercase", "success");
    };

    const handleCapClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert && props.showAlert("Deleted all text", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert && props.showAlert("Text is being copied", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert && props.showAlert("Extra spaces removed", "success");
    };

    return (
        <>
            <div className="container">
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="my-box" className="form-label">Example textarea</label>
                    <textarea
                        className="form-control"
                        id="my-box"
                        onChange={handleOnChange}
                        rows="9"
                        value={text}
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
