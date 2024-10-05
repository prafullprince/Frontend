import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { PiLineVerticalLight } from "react-icons/pi";
import { RxDropdownMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import SubSectionModal from "../../../common/SubSectionModal";
import { deleteSubSection } from "../../../../services/courseApiCall";
import ConfirmationModal from "../../../common/ConfirmationModal";


const NestedView = () => {
  // hook
  const dispatch = useDispatch();

  // store
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);

  // state
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [subSectionModal, setSubSectionModal] = useState(null);

  async function deleteSubSectionHandler(subSectionId, sectionId, courseId) {
    const results = await deleteSubSection(
      subSectionId,
      sectionId,
      courseId,
      token,
      dispatch
    );
    if (results) {
      console.log("del: ", results);
    }
    setConfirmationModal(null);
  }

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
                <p className="text-sm">{section?.name}</p>
              </div>
              {/* right */}
              <div className="flex gap-1 items-center">
                <button>
                  <MdEdit />
                </button>
                <button>
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
                  className="flex items-center justify-between gap-x-3 border-b-2 ml-10 mr-6 border-b-richblack-400 mb-1"
                >
                  {/* left */}
                  <div className="flex gap-3 items-center ml-2">
                    <RxDropdownMenu className="text-lg" />
                    <p className="text-md">{subSec?.title}</p>
                  </div>
                  {/* right */}
                  <div className="flex gap-2 items-center mr-2">
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
                          btn1Handler: () =>
                            dispatch(
                              deleteSubSectionHandler(
                                subSec?._id,
                                section?._id,
                                course?._id
                              )
                            ),
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
                onClick={() =>
                  setSubSectionModal({
                    courseId: course._id,
                    sectionId: section._id,
                  })
                }
                className="mt-4 flex items-center gap-x-2 text-yellow-50 ml-6 mb-2"
              >
                <AiOutlinePlus />
                <p>Add lecture</p>
              </button>
            </div>
          </details>
        ))}
      </div>

      {subSectionModal && (
        <SubSectionModal
          modalData={subSectionModal}
          setModalData={setSubSectionModal}
        />
      )}
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default NestedView;
