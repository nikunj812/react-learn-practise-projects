import React from 'react'
import { Link, useLoaderData } from 'react-router'

const Home = () => {
const data = useLoaderData();
console.log(data);
  return (
    <div className="h-full flex justify-center items-center text-white gap-8">
        <img width="500" height="700" src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div>
            <h1 className='font-bold text-4xl mb-2'>Hi, I'm Nick</h1>
            <h3 className='text-2xl text-[#ed143d] mb-5'>Full Stack Developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus delectus nulla praesentium. Aperiam mollitia ad omnis, natus in quasi placeat possimus velit, dolorum deserunt nulla maxime aliquam vitae consequatur harum.</p>
            <div className='flex justify-left mt-5'>
                <Link className="rounded-lg bg-[#ed143d] py-3 px-5" to="tel:+919876543210">Hire Me</Link>
            </div>
        </div>
    </div>
  )
}

export default Home


export const homeConsole = async() => {
    return {
        'page': "Home"
    }
}