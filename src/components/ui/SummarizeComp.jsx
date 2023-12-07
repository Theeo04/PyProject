import React, { useState, useEffect } from "react";
import axios from "axios";

function SummarizeComp({ text, numSentences }) {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState("");
  const [textToSummarize, setTextToSummarize] = useState("");

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleOcrRequest = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/perform_ocr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_url: imageUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.text);

      // Summarize the text using the provided Axios code
      await summarizeText(data.text);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const summarizeText = async (text, sentnum) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("text", text);
    encodedParams.set("sentnum", sentnum);

    const options = {
      method: "POST",
      url:
        "https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer-text",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "c2c48aefdcmshed838b91ca90f63p117b77jsnafb38f7168b1",
        "X-RapidAPI-Host": "textanalysis-text-summarization.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      console.log("The New Text=>", response.data);
      setTextToSummarize(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Flask API with React</h1>
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
      </label>
      <button onClick={handleOcrRequest}>Perform OCR</button>
      <div>
        <strong>Result:</strong> {result}
      </div>
      <div className="flex flex-col">
        <h1>Resume text:</h1>
      </div>
    </div>
  );
}

export default SummarizeComp;
