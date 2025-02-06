import axios from "axios";


//use this function in authSlice.js => creatsAsyncThunk
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

const authService = {loginUser}

export default authService;

