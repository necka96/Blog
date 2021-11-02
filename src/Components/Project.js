import React, { useEffect, useState } from 'react';
import sanityClient from './../client';


function Project() {
 const [prjectData, setProjectData] = useState(null)
 useEffect(()=>{
  sanityClient
  .fetch(`*[_type == "project"]{
   title,
   date,
   place,
   description,
   projectType,
   Link,
   tags

  }`)
  .then((data)=> setProjectData(data))
  .catch(console.error)

 },[])
  return (
  <main className="bg-green-100 min-h-screen p-12">
  <section className="container mx-auto">
   <h1 className="text-3xl md:text-5xl flex justify-center sans-serif">My Project</h1>
   <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to page of my project</h2>
   <section className="grid md:grid-cols-2 lg:grid-cold-3 gap-8">
   { prjectData && prjectData.map((project, index)=>(
   <article className="realativ rounded-lg shadow-xl bg-white p-16">
   <h3 className="text-gray-800 text-xl md:text-3xl mb-3 font-bold  hover:text-red-700">
    <a href={project.Link}
    alt= {project.title}
    target="_blank"
    rel="noopener noreferrer"
    >
    {project.title}
    </a>
   </h3>
   <div className="text-gray-500 text-xs ">
  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
    <span>
     <strong className="font-bold">Finished on</strong>: <br />
     {new Date(project.date).toLocaleDateString()}
    </span>
    <span>
    <strong className="font-bold">Company</strong>: <br />
    {project.place}
    </span>
    <span>
    <strong className="font-bold">Type</strong>:<br />
    {project.projectType}
    </span>
   <span>
     <strong className="font-bold">Tags</strong>:<br />
     {project.tags}
   </span>
  </div>
   <p className="my-6 text-lh text-gray-700 leading-relaxed">{project.description}</p>
   
   <a href={project.Link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400">
   <span role="img" aria-label="right-pointer">👉</span>{" "}
   View The Project
  
   </a>
   </div>
   </article>
   ))}
   </section>
  </section>
  </main>
  )
 }
 
 export default Project