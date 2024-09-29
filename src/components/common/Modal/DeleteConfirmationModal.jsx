import React from 'react'

const DeleteConfirmationModal = ({modalData}) => {
  return (
    <div className="fixed inset-0 bg-opacity-30 z-50 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col items-start gap-1 px-6 py-4 border-r shadow-lg m-1 bg-yellow-5 text-richblack-900 font-bold rounded-lg max-w-[300px]">
        <p className="text-xl">{modalData.text1}</p>
        <p className="text-xl">{modalData.text2}</p>
        <div className="flex items-center gap-2 w-full mt-2">
          <button
            className="rounded-lg border-r px-4 py-2 shadow-lg text-xl bg-[#FF0000] text-black"
            onClick={() => modalData?.btn1Handler}
          >
            {modalData.btn1Text}
          </button>
          <button
            className="rounded-lg border-r px-4 py-2 shadow-2xl text-xl bg-black text-yellow-25"
            onClick={() => modalData?.btn2Handler}
          >
            {modalData.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmationModal
