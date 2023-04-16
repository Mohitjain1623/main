import logo from './logo.svg';
import React, { useState } from "react";
import { useParams} from 'react-router-dom';

function Summary() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8000/summary/judgement/summary";
    const data = new FormData();
    data.append("content", input1);
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setInput2(data.summary);
      })
      .catch((error) => console.error(error));
  }

  function handleInput1Change(event) {
    setInput1(event.target.value);
  }

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
    <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
      Text <span className="text-active">Summarizer</span>
    </h1>
    <h2 className="text-primary text-2xl font-light mt-6">
      Summarise your text into a shorter length.
    </h2>
    <form
      className="flex md:flex-row flex-col justify-between mt-20 w-full"
      >
      <div className="md:w-2/5 w-full">
        <label
          htmlFor="text"
          className=" text-sm font-medium text-primary"
        >
          Enter your text
        </label>
        <div className="mt-2">
          <textarea
            rows={14}
            name="input1"
            id="input1"
            className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
            value={input1} // Display default value
            onChange={handleInput1Change}
          />
        </div>
      </div>
      <div className="flex justify-center items-center md:mt-0 mt-4">
        <button
          className="w-full rounded-lg px-5 py-3 bg-active font-bold text-background hover:bg-primary sm:px-10"
          type="submit" onClick={handleSubmit}
        > Summarize
          {/* {loading ? (
            <span className="animate-pulse">Loading..</span>
          ) : (
            <>Summarize</>
          )} */}
        </button>
      </div>
      <div className="md:w-2/5 md:mt-0 mt-4 w-full">
        <label
          htmlFor="summary"
          className="text-sm font-medium text-primary"
        >
          Summarized text
        </label>
        <div className="mt-2">
          <textarea
            readOnly
            type="text"
            rows={14}
            name="input2"
            id="input2"
            className="focus:outline-none focus:ring-4 w-full focus:ring-active text-base p-4 rounded-md"
            value={input2}
          />
        </div>
      </div>
    </form>
  </div>
  );
}

export default Summary;
