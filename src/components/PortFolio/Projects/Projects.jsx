import React from 'react'
import { useLoaderData } from 'react-router'

const Projects = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="flex flex-col text-center justify-center gap-8">
        <h1 className='text-5xl text-[#ed143d]'>My Work</h1>
        <div className='grid grid-cols-3 grid-rows-3 gap-4'>
            <img src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600" width="300" height="300" alt="" />
            <img src="https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=600" width="300" height="300" alt="" />
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" width="300" height="300" alt="" />
            <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" width="300" height="300" alt="" />
            <img src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600" width="300" height="300" alt="" />
            <img src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600" width="300" height="300" alt="" />
        </div>
    </div>
  )
}

export default Projects


export const projectsConsole = async() => {
  return {
    'page': "Projects"
  }
}