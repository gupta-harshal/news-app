import axios from "axios";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { summaryState } from "../atoms/summaryAtom"; 
import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article }) {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const setSummary = useSetRecoilState(summaryState);
  const navigate = useNavigate();

  const handleClick = async () => {
    setLoading(true);  
    setError(null);  

    try {
      const response = await axios.post("https://news-app-hcnb.onrender.com/news/v1/article/", {
        content: article.content,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log('Response:', response);  
      setSummary(response.data.summary);
      navigate("/summary");
    } catch (err) {
      console.error("Error fetching summary:", err);

      if (err.response) {
        setError("There was an issue with the backend. Please try again later.");
      } else if (err.request) {
        setError("Could not connect to the backend. Please check your internet connection or try again later.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className="flex w-full h-[10%] shadow-sm p-4">
      <div className="flex-1">
        {article.title} 
      </div>
      <div>
        {loading ? (
          <div className="flex justify-center items-center">
            <span>Loading...</span>
          </div>
        ) : (
          <button
            onClick={handleClick}
            className="bg-light-blue text-white px-4 py-2 rounded"
          >
            Summary
          </button>
        )}
      </div>
      {error && (
        <div className="text-red-500 mt-2">
          {error}
        </div>
      )}
    </div>
  );
}
