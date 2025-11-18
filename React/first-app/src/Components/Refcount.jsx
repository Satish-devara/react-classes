import React,{useRef} from 'react'

const Refcount = () => {

    const reff = useRef(null);

    let val = 0;
    const handler = () => {
        val = val + 1;
        count.current.innerText = val;
    };

    const count = useRef(null);


  return (
    <>
        {" "}
        <div className='flex flex-col justify-center items-center h-screen'>

            <input type="text"
            ref= {reff}
            placeholder='type here...'
            className='border-1 rounded-md p-2 m-2' />
            <h1 ref={count}>current value:-- {val}</h1>
            <button onClick={handler} className='bg-blue-400 font-bold border-2 m-1.5'>
                btn
            </button>
        </div>
    </>
  )
}

export default Refcount