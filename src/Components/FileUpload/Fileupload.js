import React,{useState} from "react";
import "./File.css"
function FileUpload() {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState('');
  const [modifiedFileURL, setModifiedFileURL] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleOption1Change = (event) => {
    setOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setOption2(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (selectedFile  && option1 && option2) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('option1', option1);
      formData.append('option2', option2);

      setFormSubmitted(true);
      setLoading(true);
  
      try {

        const estimatedTime = await calculateEstimatedTime();
        setEstimatedTime(estimatedTime);

        const response = await fetch('/upload', {
          method: 'POST',
          body: formData,
          // headers: {
          //   'Access-Control-Allow-Origin': '*', // Or specify the allowed origin
          // },
        });
  
        if (response.ok) {
          const data = await response.json();
      console.log('Form submitted successfully');
      console.log('Selected Option 1:', data.option1);
      console.log('Selected Option 2:', data.option2);
      console.log('Selected File:', data.filename);
      setModifiedFileURL(data.filename)

      // setFormSubmitted(true);
          // Handle successful upload
        } else {
          console.error('File upload failed');
          // Handle upload failure
        }
      } catch (error) {
        console.error('Error occurred during file upload:', error);
        // Handle error
      }finally {
        setLoading(false);
      }
    } else {
      console.warn('No file selected');
    }
  }; 

  const calculateEstimatedTime = () => {
    return new Promise((resolve) => {
      // Simulating an asynchronous calculation
      setTimeout(() => {
        resolve('2 minutes');
      }, 20000);
    });
  };
  const handleDownload = () => {
    if (modifiedFileURL) {
      // Create an anchor element and set the download attribute and href
      const link = document.createElement('a');
      link.setAttribute('download', 'modified_file.pdf');
      link.href = modifiedFileURL;
      link.click();
    }
  };

    return (
      <div className="fileapp">
          <form onSubmit={handleSubmit}>
            <h1>1. Upload your PDF</h1>
            <input type="file" onChange={handleFileChange}/>
            
            <h1>2. Select a Template</h1>
            <select name="temp" id="temp" value={option1} onChange={handleOption1Change}>
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
            <select name="temp" id="temp" value={option2} onChange={handleOption2Change}>
                <option value="1"> Type 1</option>
                <option value="2"> Type 2</option>
                <option value="3"> Type 3</option>
                <option value="4"> Type 4</option>
            </select>
           
            <button ><a href="/notetaking" target="_blank">View Note taking Methods</a></button>
            <button  className="finalbtn" type="submit">Upload</button>
            
          </form>
          {formSubmitted && !loading && (
        <div>
          <h2>Form submitted successfully!</h2>
          <p>Modified File:</p>
      {modifiedFileURL ? (
        <div>
          <button onClick={handleDownload}>Download</button>
        </div>
      ) : (
        <p>No modified file available.</p>
      )}
        </div>
      )}

      {loading && (
        <div>
          <h2>Loading...</h2>
          <div className="loading-circle"></div>
        </div>
      )}
      
      </div>
    );
  }
export default FileUpload;