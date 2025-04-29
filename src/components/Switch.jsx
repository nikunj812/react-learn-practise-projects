import {useState} from "react";

function Switch() {
    const [mode, setMode] = useState("light")

    return(
        <div className="w-full h-screen " style={{backgroundColor : mode == 'light' ? '#E0E0E0' : '#101010'}}>
            <div className='fixed top-11 flex flex-wrap justify-center text-center w-full'>
                <button className='bg-amber-200 p-4' onClick={() => setMode("light")}>Light</button>
                <button className='bg-amber-900 p-4' onClick={() => setMode("dark")}>Dark</button>
            </div>
        </div>
    )
}

export default Switch