import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from 'react';
import cv from "../cv.docx";
import sanityClient from './../client';
import TimeLine from './TimeLine';
const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
 return builder.image(source)
}
 function About() {
  const [author, setAuthor] = useState(null)
  useEffect(()=>{
   sanityClient.fetch(`*[_type == "author"]{
    name,
    bio,
    "authorImage": image.asset->url
   }`
   )
   .then((data)=> setAuthor(data[0]))
   .catch(console.error )
  }, [])
  if(!author) return <div>Loading... </div>
  return (
   <main className="bg-green-100 h-auto w-full">
   <div className="lg:p-12 container mx-auto">
   <section className="flex flex-col md:flex-row justify-center items-center p-10">
   <img src={urlFor(author.authorImage).url()} className="rounded w-full h-full lg:w-64 lg:h-64 mr-6" alt={author.name}/>
   <div className="text-lg flex flex-col justify-center">
   <h1 className="sans-serif text-3xl lg:text-6xl text-black my-4 ">
   Hey there. I'm{" "}
   <span className="text-blue-700">{author.name}</span>
   </h1>
   <div className="prose lg:prose-xl text-black mb-4">
   <BlockContent blocks={author.bio} projectId="s486tf11" dataset="production"/>
   </div>
   <div className="mt-4">
   <a href={cv} target="_blank" rel="noopener noreferrer"  className="p-4 text-white hover:bg-purple-700 rounded bg-purple-600 cursor-pointer">Download cv</a>
   <a href="https://neckacv.netlify.app" target="_blank" rel="noopener noreferrer" className="p-4 text-white hover:bg-red-700 rounded bg-red-600 ml-2 cursor-pointer">View cv</a>
   </div>
   </div>
   </section>
   </div>
   <TimeLine/>
   </main>
  )
 }
 
 export default About
 
 