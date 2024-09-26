import React, { useState } from 'react'

const Counter = () => {
    const [number,setNumber]=useState(19);

    const Increment=()=>{
        setNumber(number+1)  
    }
    const Decrement=()=>{
        setNumber(number-1)  
    }


    return (
        <div>
            <div className='flex flex-col gap-4 justify-center items-center'>
            <h1>Counter Value:{number} </h1>
            <div className='flex flex-row gap-6'>
                <button className='bg-red-300 border-2 p-1' onClick={Increment}>Increment</button>
                <button className='bg-green-300 border-2 p-1' onClick={Decrement}>Decrement</button>
            </div>
            </div>
        </div>
    )
}

export default Counter