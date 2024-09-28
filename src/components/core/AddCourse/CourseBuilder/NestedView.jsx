import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { PiLineVerticalLight } from "react-icons/pi";
import { RxDropdownMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import SubSectionModal from "../../../common/Modal/SubSectionModal";

const NestedView = () => {
  // hook
  const dispatch = useDispatch();

  // store
  const { course } = useSelector((state) => state.course);
  // const { token } = useSelector((state) => state.auth);

    // state

  const [confirmationModal, setConfirmationModal] = useState(null);
  const [subSectionModal,setSubSectionModal] = useState(null);



  return (
    <div className="text-white bg-richblack-700 rounded-lg mt-6">
      <div>
        {course?.courseContent?.map((section) => (
          <details key={section._id}>
            {/* Section */}
            <summary className="flex justify-between text-richblack-50 mx-6 my-4 border-b py-2 border-richblack-500 text-xl">
              {/* left */}
              <div className="flex gap-3 items-center">
                <RxDropdownMenu />
                <p className="text-lg">{section?.name}</p>
              </div>
              {/* right */}
              <div className="flex gap-1 items-center">
                <button>
                  <MdEdit />
                </button>
                <button
                  onClick={() => {
                    setConfirmationModal({
                      text1: "Are your sure ?",
                      text2: "All lecture of this section will be deleted",
                      btn1Text: "Delete",
                      btn2Text: "Cancel",
                      btn1Handler: () => dispatch(),
                      btn2Handler: () => setConfirmationModal(null),
                    });
                  }}
                >
                  <MdDelete />
                </button>
                <PiLineVerticalLight />
                <IoMdArrowDropdown />
              </div>
            </summary>

            {/* subSection */}
            <div>
              {section?.subSection?.map((subSec) => (
                <div
                  key={subSec?._id}
                  onClick={() => {
                    // setViewSubSection(subSec);
                  }}
                  className="flex items-center gap-x-3 border-b-2 ml-3"
                >
                  {/* left */}
                  <div className="flex gap-3 items-center">
                    <RxDropdownMenu />
                    <p className="text-lg">{subSec?.title}</p>
                  </div>
                  {/* right */}
                  <div className="flex gap-1 items-center">
                    <button>
                      <MdEdit />
                    </button>
                    <button
                      onClick={() => {
                        setConfirmationModal({
                          text1: "Are your sure ?",
                          text2: "lecture of this subSection will be deleted",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: () => dispatch(),
                          btn2Handler: () => setConfirmationModal(null),
                        });
                      }}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
              {/* Add lecture button */}
              <button
                    onClick={()=>setSubSectionModal({
                        courseId:course._id,
                        sectionId:section._id,
                    })}
              className="mt-4 flex items-center gap-x-2 text-yellow-50 ml-6 mb-2">
                <AiOutlinePlus />
                <p>Add lecture</p>
              </button>
            </div>

          </details>
        ))}
      </div>

        {
            subSectionModal && (
                <SubSectionModal modalData={subSectionModal} setModalData={setSubSectionModal} />
            )
        }


    </div>
  );
};

export default NestedView;
