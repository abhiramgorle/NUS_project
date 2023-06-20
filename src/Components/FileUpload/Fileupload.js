import React from "react";
function FileUpload() {
    
    const handleUpload =() => {
alert("File uploaded")
    };
    return (
      <div className="App">
          <form onSubmit={handleUpload}>
            <h1>1. Upload a PDF</h1>
            <input type="file" />
            
            <h1>2. Select a Template</h1>
            <select name="temp" id="temp">
                <option value="1"> Type 1</option>
                <option value="2"> Type 2</option>
                <option value="3"> Type 3</option>
                <option value="4"> Type 4</option>
                <option value="5"> Type 5</option>
                <option value="6"> Type 6</option>
                <option value="7"> Type 7</option>
                <option value="8"> Type 8</option>
                <option value="9"> Type 9</option>
                <option value="10"> Type 10</option>
                <option value="11"> Type 11</option>
                <option value="12"> Type 12</option>
            </select>
            <button ><a href="/templates" target="_blank">View templates</a></button>
            <h1>3. Select Notetaking Method</h1>
            <select name="temp" id="temp">
                <option value="1"> Type 1</option>
                <option value="2"> Type 2</option>
                <option value="3"> Type 3</option>
                <option value="4"> Type 4</option>
            </select>
            <button ><a href="/notetaking" target="_blank">View Note taking Methods</a></button>
            <button type="submit">Upload</button>
          </form>
      </div>
    );
  }
export default FileUpload;