import React from 'react'
import { useDispatch } from 'react-redux'

const ConfirmationModal = ({modalData}) => {
    const dispatch = useDispatch();
  return (
    <div className='flex flex-col gap-1 px-4 py-6 border-r shadow-lg m-2 bg-gradient-to-r from-pink-100 to-yellow-600 rounded-lg'>
        <p>{modalData.text1}</p>
        <p>{modalData.text2}</p>
        <div className='flex items-center gap-4'>
            <button className='rounded-lg border-r px-2 py-1 shadow-lg' onClick={()=>dispatch(modalData?.btn1Handler)}>{modalData.btn1Text}</button>
            <button className='rounded-lg border-r px-2 py-1 shadow-lg' onClick={()=>dispatch(modalData?.btn2Handler)}>{modalData.btn2Text}</button>
        </div>
    </div>
  )
}

export default ConfirmationModal