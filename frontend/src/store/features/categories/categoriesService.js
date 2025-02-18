import axios from "axios";


//use this function in authSlice.js => creatsAsyncThunk

//register
const createCat = async(inputValues)=>{
  try {
    const axiosResponse = await  axios
  .post("http://localhost:8080/api/v1/categories", inputValues, {
    withCredentials: true, // axios send automatically cookies when we apply this property
    headers: { "Content-Type": "application/json" },
  })
  return axiosResponse.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong! please try again"
    return Promise.reject(errorMessage);
  }

}

const getAllCat = async()=>{
  try {
    const axiosResponse = await  axios
  .get("http://localhost:8080/api/v1/categories", {
    withCredentials: true, // axios send automatically cookies when we apply this property
    headers: { "Content-Type": "application/json" },
  })
  return axiosResponse.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong! please try again"
    return Promise.reject(errorMessage);
  }

}

//get single category
const getSingleCat = async(slug)=>{
  try {
    const axiosResponse = await  axios
  .get(`http://localhost:8080/api/v1/categories/${slug}`, {
    withCredentials: true, // axios send automatically cookies when we apply this property
    headers: { "Content-Type": "application/json" },
  })
  return axiosResponse.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong! please try again"
    return Promise.reject(errorMessage);
  }

}

//delete  categories code
const deleteCat = async(slug)=>{
  try {
    const axiosResponse = await  axios
  .delete(`http://localhost:8080/api/v1/categories/${slug}`, {
    withCredentials: true, // axios send automatically cookies when we apply this property
    headers: { "Content-Type": "application/json" },
  })
  return axiosResponse.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong! please try again"
    return Promise.reject(errorMessage);
  }

}

const updateCat = async({name , slug})=>{
  try {
    const axiosResponse = await  axios
  .put(`http://localhost:8080/api/v1/categories/${slug}`, {name}, {
    withCredentials: true, // axios send automatically cookies when we apply this property
    headers: { "Content-Type": "application/json" },
  })
  return axiosResponse.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong! please try again"
    return Promise.reject(errorMessage);
  }

}

const categoriesService = {createCat ,getAllCat ,deleteCat, getSingleCat, updateCat}

export default categoriesService;

