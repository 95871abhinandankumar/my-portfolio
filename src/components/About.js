import React, {useEffect, useState} from 'react';
import sanityClient from "../client.js";
import image from "../annie-spratt.jpg";
import  imageUrlBuilder  from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null);
    
    useEffect(()=>{
        sanityClient.fetch(`*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
                
            }`).then((data)=>setAuthor(data[0])).catch(console.error);
    }, []);
    if(!author) return <div>Loading...</div>;
    return (
        <main className="relative">
            <img src={image}  className="absolute w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-400 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-128 h-64 lg:w-128 lg:h-64 sm:mr-30 mr-8" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-purple-900 mb-4">
                            Hey there. I'm{" "}
                            <span className ="text-purple-600">{author.name}.</span>
                            <br />
                        </h1>
                        <div className="prose lg:prose-xl text-green-900">
                            <BlockContent blocks={author.bio} projectId="lwk2l6c3" dataset="production" />
                        </div>
                        <a href="https://drive.google.com/file/d/1Q7IuVNwk3A53UH_hIFR0OMNJgbl6EMbN/view?usp=sharing" target="_blank"
                            className="text-blue-900 text-4xl hover:text-red-500  cursive">My Resume📑</a>
                        
                    </div>
                </section>
            </div>
        </main>
    )
}
