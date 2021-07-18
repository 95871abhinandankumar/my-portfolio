import React from 'react';
import image from "../samantha-gades3.jpg"

export default function Home() {

    return (
        <main className="">
            <img src={image} alt="Backgroung_Image" className="absolute object-cover w-full h-full min-h-screen"/>
            <section className="relative flex justify-between min-h-screen pt-12 lg:pt-32 px-8" >
                <h1 className="mt-16 text-6xl text-black-600 font-bold cursive leading-none lg:leading-snug  text-left align-bottom hover:text-pink-600" id="changeColor">Hii,<br /> I'm Abhinandan kumar.<br/><h2 id="changeColor1" className="text-8xl">Welcome to my-website.</h2></h1>
                </section>
        </main>
            
    )
}
