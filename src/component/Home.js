import React, { useEffect, useState } from "react";
import buff from "../photo/buff.PNG";
import pp from "../photo/pp.jpg";
import axios from 'axios';


function HomePage() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPosts = async () => {
            const { data } = await axios.get("http://127.0.0.1:8000/posts/");
            setPosts(data)
            console.log("Effects loaded", data);
        }
        getPosts();
    }, []
    )
    return (
        <div>
            <div className=" flex px-8 py-16" data-aos="fade-right">
                <div className="image-section w-1/2 mx-8 pt-16 ">
                    <img src={buff} alt="buff" className=" w-full mx-5" />
                </div>
                <div className="w-1/2 px-16 ">
                    <p className="text-gray-300 pb-4">Publication Open</p>
                    <h1 className=" text-4xl font-bold"><span className="">TRUST, Transparency,</span></h1>
                    <h1 className="text-4xl font-bold">and Curiosity: Batsirai</h1>
                    <h1 className="text-4xl font-bold">Chada on Buffer's unique Culture </h1>
                    <h1 className="py-3">Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months. We spoke to him when he first joined
                        to find out about his journey to Buffer, how he works, and what he does outside of work.
                    </h1>
                    <p className="text-gray-300 pb-4">Apr,27,2024      <span>005min read</span> open</p>
                    <div className=' ring-5 ring-blue-100  '>
                        <div className='m-6  flex'>
                            <img src={pp} alt="" className="w-12 h-12 rounded-full border-4 p-1 border-blue-300" />
                            <h1 class=" ml-5 font-bold ">An update on twitter's API changes
                                and buffer</h1>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="py-4">
                <div className="flex flex-wrap mx-auto justify-between ">
                    <div className="flex flex-wrap space-x-5 mx-20">
                        <div className="space-x-5 py-3">
                            <a href="#" className="border-b-4 border-blue-400 border-bottom-width: 16px; ">Latest updates</a>
                            <a href="#" className="text-sm font-semibold">small Busines</a>
                            <a href="#" className="text-sm font-semibold">social media marketing</a>
                            <a href="#" className="text-sm font-semibold">News</a>
                            <a href="#" className="text-sm font-semibold">product</a>
                            <a href="#" className="text-sm font-semibold">open blog</a>
                            <a href="#" className="text-sm font-semibold">Case studies</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="grid grid-cols-3 divide-x space-x-5 mx-20 mb-8 divide-white border-t-4 ring-blue-100  ">
                {posts.map(post => (
                    <div className='ring-2 ring-blue-100 mt-10'>
                        <div className=' '>
                            <div className="">
                                <img src={post.image} alt="" srcset="" class="w-full h-64 " />
                                <div class="flow-root mx-1  text-xl">
                                    <p class="float-left text-blue-700 font-semibold pt-5 ">
                                        Open
                                    </p>
                                    <p class="float-right text-black font-semibold pt-5">
                                        Apr 25, 2023
                                    </p>
                                </div>
                                <h1 class="text-2xl font-bold mx-5 pt-12">{post.title}</h1>
                                <h1 class="text-xl font-normal py-7 mx-5 ">{post.content}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
