import React, { useEffect, useRef, useState } from 'react'

const options = ["1","2","3","4"];
function DropDown() {

    const [isOpen,setIsOpen] = useState(false);
    const [category,setCategory] = useState("");

    const DropDownRef = useRef(null);
    console.log(DropDownRef)

    useEffect(()=>{
        document.addEventListener("mousedown",(e)=>{
            if(DropDownRef.current && !DropDownRef.current.contains(e.target)){
                setIsOpen(false);
            }
        })

        return ()=>{
            document.removeEventListener("mousedown",(e)=>{
                if(DropDownRef.current && !DropDownRef.current.contains(e.target)){
                    setIsOpen(false);
                }
            })
        }
    },[]);

  return (
    <div className=' text-white'>
        <div ref={DropDownRef}>
            <input 
                className=' bg-black text-white outline-none px-2 py-1 border-[2px]'
                placeholder='select'
                onClick={()=>{
                    setIsOpen((prev)=>!prev)
                }}
                value={category}
            />
            {
                isOpen ? (
                    <div className=' flex flex-col gap-4 border mt-1'>
                {options.map((opt,index)=>(
                    <button onClick={()=>{
                        setCategory(opt);
                    }} key={index}>{opt}</button>
                ))}
            </div>
                ) : 
                null
            }
        </div>
    </div>
  )
}

export default DropDown
