import useToggleLamp from '../../contexts/toggleLamp';

const BackGround = () => {
  const {lightStatus} = useToggleLamp();

  return (
    <div className={`flex items-center justify-center h-full`}>
      {
        !lightStatus ? 
          <div className="bg-black h-full w-full"></div>
         : 
          <img src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg" alt="lamp" className='h-full'/>
      }
    </div>
  )
}

export default BackGround