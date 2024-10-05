import toast from "react-hot-toast";
import { apiConnector } from "./apiConnector";
import { categories, coursess } from "./api";
import { setCourse, setStep } from "../slices/courseSlice";

// courseOfSelectectedCategory
export async function categoryCourses(categoryId){
        const tid = toast.loading("Loading...");
        let result = [];
        try{
            // api call
            const response = await apiConnector("POST",categories.GET_SINGLE_CATOGORIES,{categoryId:categoryId});

            if(!response?.data?.success){
                toast.error("Couldn't fetched");
            }

            // fill the result array
            result = response?.data;

        }
        catch(error){
            console.log(error);
        }
        toast.dismiss(tid);
        return result;
}


// coursePageDetails
export async function coursePageDetail(courseId){
    const tid = toast.loading("...Loading");
    let res;
    try{
        const result = await apiConnector("POST",coursess.COURSE_PAGE_DETAILS,{courseId});

        if(!result?.data?.success){
            toast.error("Error in Course Api call");
        }

        res = result?.data;
        toast.success("Fetched Course Details Successfully");
    }
    catch(error){
        console.log(error);
    }
    toast.dismiss(tid);
    return res;
}


// createCourse
export async function addCourseApi(name,description,whatYouWillLearn,price,tag,instructions,category,thumbnail,token,dispatch){
    const tid = toast.loading("...Loading");
    let res = null;
    try{
        const result = await apiConnector("POST",coursess.CREATE_COURSE,{name,description,whatYouWillLearn,price,tag,instructions,category,thumbnail},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });

        if(!result?.data?.success){
            toast.error("Error in Course Api call");
        }

        res = result?.data?.response;

        dispatch(setCourse(res));
        localStorage.setItem("course",JSON.stringify(res));
        dispatch(setStep(2));
        toast.success("Course Created Successfully");
    }
    catch(error){
        console.log(error);
    }
    toast.dismiss(tid);
    return res;
}


// createSection
export async function createSection(name,courseId,token,dispatch){
    const tid = toast.loading("...Loading");
    let res = null;
    try{
        const result = await apiConnector("POST",coursess.CREATE_SECTION,{name,courseId},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });

        if(!result?.data?.success){
            toast.error("Error in Course Api call");
        }

        res = result?.data?.updatedCourse;

        // localStorage.setItem("step",JSON.stringify(step));
        
        dispatch(setCourse(res));
        localStorage.setItem("course",JSON.stringify(res));
        toast.success("Section Created Successfully");
    }
    catch(error){
        console.log(error);
    }
    toast.dismiss(tid);
    return res;
}


// createSubSection
export async function createSubSection(title,description,sectionId,video,courseId,token,dispatch){
    const tid = toast.loading("...Loading");
    let res = null;
    try{
        const result = await apiConnector("POST",coursess?.CREATE_SUB_SECTION,{title,description,sectionId,video,courseId},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });

        if(!result?.data?.success){
            toast.error("Error in Course Api call");
        }

        res = result?.data?.updatedCourse;

        dispatch(setCourse(res));
        localStorage.setItem("course",JSON.stringify(res));
        toast.success("SubSection Created Successfully");
    }
    catch(error){
        console.log(error);
        toast.error("Not good");
    }
    toast.dismiss(tid);
    return res;
}



// deleteSubSection
export async function deleteSubSection(subSectionId,sectionId,courseId,token,dispatch){
    const tid = toast.loading("Loading...");
    let res = null;
    try{
        const result = await apiConnector("POST",coursess?.DELETE_SUB_SECTION,{subSectionId,sectionId,courseId},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });

        if(!result?.data?.success){
            toast.error(result.data.message);
        }


        res = result?.data?.updatedCourse;
        dispatch(setCourse(res));
        localStorage.setItem("course",JSON.stringify(res));
        toast.success("Sub Section deleted successfully");
    }
    catch(error){
        console.log(error);
    }
    toast.dismiss(tid);
    return res;
}
