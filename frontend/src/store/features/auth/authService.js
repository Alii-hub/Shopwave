import axios from "axios";


//use this function in authSlice.js => creatsAsyncThunk

//register
const registerUser = async(inputValues)=>{
  try {
    const axiosResponse = await  axios
  .post("http://localhost:8080/api/v1/users/register", inputValues, {
    withCredentials: true, // axios send automatically cookies when we apply this property
    headers: { "Content-Type": "application/json" },
  })
  return axiosResponse.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong! please try again"
    return Promise.reject(errorMessage);
  }

}
//login
const loginUser = async(inputValues)=>{
  try {
    const axiosResponse = await  axios
  .post("http://localhost:8080/api/v1/users/login", inputValues, {
    withCredentials: true, // axios send automatically cookies when we apply this property
    headers: { "Content-Type": "application/json" },
  })
  return axiosResponse.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong! please try again"
    return Promise.reject(errorMessage);
  }

}

// logout
const logoutUser = async()=>{
  try {
    const axiosResponse = await  axios
  .get("http://localhost:8080/api/v1/users/logout", {
    withCredentials: true, // axios send automatically cookies when we apply this property
    headers: { "Content-Type": "application/json" },
  })
  return axiosResponse.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "Something went wrong! please try again"
    return Promise.reject(errorMessage);
  }
  


}
const authService = {loginUser ,registerUser ,logoutUser}

export default authService;

