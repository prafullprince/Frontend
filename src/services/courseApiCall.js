import toast from "react-hot-toast";
import { apiConnector } from "./apiConnector";
import { categories } from "./api";


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
