import axios from "axios";
import React, { useState } from "react";

const Aichat = () => {
  const [qns, setQns] = useState("");
  const [ans, setAns] = useState("");

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=";
  const API_KEY = "AIzaSyAwMEaKMOT0jLyKzAOV1Lw_q_nkPlk4Pss";

  const getData = async () => {
    if (!qns.trim()) return;

    const sendingData = {
      contents: [
        {
          parts: [{ text: qns }],
        },
      ],
    };

    try {
      const response = await axios.post(`${url}${API_KEY}`, sendingData);
      if (
        response.data &&
        response.data.candidates &&
        response.data.candidates.length > 0
      ) {
        setAns(response.data.candidates[0].content.parts[0].text);
      } else {
        setAns("No response from AI");
      }
    } catch (error) {
      console.error("API Error:", error);
      setAns("Error fetching response");
    }
  };

  const handleInput = (event) => {
    setQns(event.target.value);
  };

  return (
    <div className="w-[80%] m-auto p-[11px] min-h-[90vh] flex flex-col">
   
      <div className="overflow-scroll overflow-x-hidden flex-1 p-2">
        {qns && (
          <p className="bg-zinc-300 text-black border border-zinc-400 rounded p-2 w-fit self-end">
            {qns}
          </p>
        )}
        {ans && (
          <div className="max-h-[450px] overflow-y-auto  rounded p-2 w-[80%] self-start mt-2">
            {ans}
          </div>
        )}
      </div>


      <div className="w-[70%] bg-zinc-500 shadow-2xl flex items-center p-2 fixed bottom-28  h-[100px] border border-zinc-600 rounded-l-md">
        <input
          onChange={handleInput}
          className="flex-1 border-none outline-none p-2 rounded-l-md"
          type="text"
          placeholder="Ask your AI Friend!"
        />
        <button
          onClick={getData}
          className="w-[100px] h-[40px] bg-black text-white border-none outline-none rounded-r-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Aichat;
