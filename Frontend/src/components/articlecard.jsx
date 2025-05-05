import axios from "axios";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { summaryState } from "../atoms/summaryAtom"; 
import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article }) {
  const [loading, setLoading] = useState(false); 
  const setSummary = useSetRecoilState(summaryState);
  const navigate = useNavigate();

  const handleClick = async () => {
    setLoading(true);  

    try {
      const response = await axios.post("http://localhost:3000/news/v1/article/", {
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
        console.log('Error response:', err.response); 
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
    </div>
  );
}
