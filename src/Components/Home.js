import React from "react"
import Typical from 'react-typical'
import image from "../bg.jpg"
function Home() {
 return (
   <main>
    <img src={image} alt="mackbook" className="absolute object-cover w-full h-screen"/>
    <section className="relative flex flex-col justify-center items-center min-h-screen  pt-3  px-12">
    <h1 className="text-6xl text-blue-100 font-bold sans-serif leading-none lg:leading-snug home-name">Aloha I'm Nemanja Djordjevic </h1>
    <p className="text-xl text-blue-100">I'm a {''} 
    <Typical 
    wrapper = "a"
    loop={Infinity}
    steps={["Frond-end developer", 1000, "AOI Viscom operater", 1000, "Economic tehnicial", 1000]}
    />
    </p>
    
    </section>
   </main>
 )
}

export default Home
