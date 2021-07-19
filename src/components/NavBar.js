import React from 'react'
import { SocialIcon } from 'react-social-icons';
import image from "../menu.png"
import Media from "react-media";



export default function NavBar() {

    function menu_bar()
    {
            var list = document.getElementById("ullist");

            if (list.style.display === "none"){
                list.style.display = "block";
                var logo = document.getElementById("logo");
                logo.style.fontSize="xx-large";
            }else{
                list.style.display = "none";
                logo = document.getElementById("logo");
                logo.style.fontSize='3.75rem';
                logo.style.lineHeight='1';
            }
    }

    return (
        <header className="bg-gray-300 flex overflow-x-hidden">
                    <div className="pl-10 pr-10 pt-5 text-4xl text-green-900  text-bold cursive hover:text-white md:text-6xl" id="logo">
                        <a href="/">Abhinandan</a>
                    </div>
                    <div style={{flex:1}}/>
            <Media query="(max-width:900px)">
                {matches =>{return matches?
                    <div className="mb-5 menu">
                        <input type="image" onClick={menu_bar} src={image} name="menu" width="100" height="48" alt="submit" className="menu bg-gray mt-8 mr-4"/>
                        <div id="ullist" className="pr-4 p-0 nav_bar flex-column" style={{display:'none'}}>
                            <ul className="m-0 p-0 flex-column justify-between items-center float-right " >
                                <li activeClassName="text-white" className="pl-4 pr-4 pt-5 text-red-900 text-lg text-bold hover:text-white"><a href="/post">Posts</a></li>
                                <li className="pl-4 pr-4 pt-5 text-lg text-bold text-red-900 hover:text-white"><a href="/project">Projects</a></li>
                                <li className="pl-4 pr-40 pt-5 text-lg text-bold text-red-900 hover:text-white"><a href="/about">About Me!</a></li>
                                <li className="pr-60 relative float-right">
                                    <div className="relative inline-flex py-3 px-3 my-6  float-right">
                                        <SocialIcon url="https://www.linkedin.com/in/abhinandan-kumar-6077291a6/" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                                        <SocialIcon url="https://github.com/95871abhinandankumar" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                                        <SocialIcon url="https://www.hackerrank.com/abhinandank626" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                                        <SocialIcon url="https://www.instagram.com/abhinandank626/" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                                        <SocialIcon url="https://www.facebook.com/profile.php?id=100037306058535" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>  
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="pr-4 p-0 nav_bar">
                        <ul className="m-0 p-0 flex justify-between items-center float-right " >
                            <li activeClassName="text-white" className="pl-4 pr-4 pt-5 text-red-900 text-lg text-bold hover:text-white"><a href="/post">Posts</a></li>
                            <li className="pl-4 pr-4 pt-5 text-lg text-bold text-red-900 hover:text-white"><a href="/project">Projects</a></li>
                            <li className="pl-4 pr-40 pt-5 text-lg text-bold text-red-900 hover:text-white"><a href="/about">About Me!</a></li>
                            <li className="relative float-right">
                                <div className="relative inline-flex py-3 px-3 my-6  float-right">
                                    <SocialIcon url="https://www.linkedin.com/in/abhinandan-kumar-6077291a6/" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                                    <SocialIcon url="https://github.com/95871abhinandankumar" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                                    <SocialIcon url="https://www.hackerrank.com/abhinandank626" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                                    <SocialIcon url="https://www.instagram.com/abhinandank626/" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                                    <SocialIcon url="https://www.facebook.com/profile.php?id=100037306058535" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>  
                                </div>
                            </li>
                        </ul>
                    </div> }} 
                </Media>                 
        </header>
    )
}
