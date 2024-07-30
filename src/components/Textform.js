import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick= () =>{
        console.log("Uppercase is clicked");
        let newText = text.toUpperCase();
        myText(newText)
        props.showAlert("Converted into Uppercase","success")
    }
    
    const handleOnChange = (event)=>{
        console.log("Changed")
        myText(event.target.value);

    }
    
    const handleDownClick = () =>{
        console.log('Lowercase is clicked');
        let newText = text.toLowerCase();
        myText(newText)
        props.showAlert("Converted into Lowercase","success")
    }

    const handleCopy = () =>{
        console.log("Text Selected")
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Your text is copied to Clipboard","success")
    }

    const handleSpaces =() =>{
        console.log("Text Selected")
        let newText = text.split(/[ ]+/);
        myText(newText.join(" "))
        props.showAlert("Extra spaces are removed","success")
    }
    const [text, myText] = useState(""); 

  return (
    <>
        <div className='container my-3'>
            <h3>{props.heading} </h3>
            <div className="my-3">
                <textarea className="form-control" value={text} onChange= {handleOnChange} style= {{backgroundColor: props.mode === 'light'? 'white':'rgb(165, 162, 153)', color: props.mode === 'light'? 'black':'white'}}id="myBox" rows="10"></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert into Upper Case</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleDownClick}>Convert into Lower Case</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleSpaces}>Remove extra Spaces</button>
            </div>
        </div>
        <div className="container">
            <h3> Text Summary</h3>
            <p>{text.split(" ").filter((element) =>{return element.length !== 0}).length} <b>words</b> and {text.length} <b>Characters</b></p>
            <p>{0.008 * text.split(" ").filter((element) =>{return element.length !== 0}).length} <b>Minutes Ready</b></p>
            <h3>Preview</h3>
            <p>{text === ""? "Enter something in textarea": text}</p>
        </div>
    </>
  )
}
