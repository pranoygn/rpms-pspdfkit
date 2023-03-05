import { useState, useRef } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import "./App.css";

function App() {
  const docUploadInputRef = useRef(null);
  const [document, setDocument] = useState("");

  const onOpenDocumentHandler = (event) => {
    const file = event.target.files[0];
    const documentBlobObjectUrl = URL.createObjectURL(file);
    setDocument(documentBlobObjectUrl);
  };

  return (
    <div className="App">
      <p>Upload the document to sign and download</p>
      <button
        className="App-button"
        onClick={() => {
          docUploadInputRef.current.click();
        }}
      >
        <input
          type="file"
          name="file"
          style={{ display: "none" }}
          accept="image/*, application/pdf"
          ref={docUploadInputRef}
          onChange={onOpenDocumentHandler}
        ></input>
        <span>Open Document</span>
      </button>
      <div className="App-viewer">
        <PdfViewerComponent document={document} />
      </div>
    </div>
  );
}

export default App;