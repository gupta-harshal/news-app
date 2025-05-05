import { Navbar } from "../components/navbar";
import image from "../assets/img.jpg";
import { useState, useEffect } from "react";
import data from "../data.json"; 
import ArticleCard from "../components/articlecard.jsx";

export default function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        setArticles(data);
    }, []); 

    return (
        <div className="h-screen w-screen">
            <Navbar />
            <div 
                className="w-full h-[30%] bg-cover bg-center opacity-[85%] flex items-center justify-center text-white font-bold text-6xl px-6" 
                style={{ backgroundImage: `url(${image})` }}
            >
                The latest news all here...
            </div>
            <div className="flex w-full h-[8%] shadow-lg text-2xl justify-center items-center">
                Current Articles
            </div>
            <div className="flex flex-col space-y-4 px-4 py-6">
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <ArticleCard key={index} article={article} />
                    ))
                ) : (
                    <p>Loading articles...</p>
                )}
            </div>
        </div>
    );
}