import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { apiConnector } from '../../../../services/apiConnector';
import { categories } from '../../../../services/api';
import toast from 'react-hot-toast';

const CourseInformationForm = () => {

    const {
        register,handleSubmit,setValue,getValues,formState:{errors}
    } = useForm();

    const dispatch = useDispatch();

    const {course,editCourse} = useSelector((state)=>state.course);

    const [categoriesData,setCategoriesData] = useState([]);


    useEffect(()=>{
        const getCategories = async()=>{
            const tid = toast.loading("Loading...");
            const res = await apiConnector("GET",categories.SHOW_ALL_CATEGORIES);
            let result = res?.data?.response;
            if(result>0){
                setCategoriesData(result);
            }
            toast.dismiss(tid);
        }

        if(editCourse){
            setValue("courseTitle",course.name);
            setValue("courseDesc",course.description);
            setValue("coursePrice",course.price);
            setValue("courseTags",course.tags);
            setValue("courseCategory",course.category);
            setValue("courseRequirements",course.instructions);
            setValue("courseImage",course.thumbnail);
            setValue("courseBenefits",course.whatYouWillLearn);

        }

        getCategories();
    },[]);


  return (
    <div>

    </div>
  )
}

export default CourseInformationForm