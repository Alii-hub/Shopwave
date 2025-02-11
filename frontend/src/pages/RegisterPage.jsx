import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "react-toastify";
import { register } from "@/store/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function RegisterPage({ className, ...props }) {

  const [inputValues ,setinputValues] = useState([])
  const status = useSelector((state)=>state.auth.status)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setinputValues(values => ({...values, [name]: value}))
  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    // setinputValues(inputValues);
    // console.log(inputValues);
    dispatch(register(inputValues))
          .unwrap()
          .then((response) => {
            if (response?.sucess == true) {
              toast.success(response?.message, { autoClose: 2000 });
              setTimeout(() => {
                navigate("/");
              }, 2000);
            } else {
              toast.error(response?.message, { autoClose: 2000 });
            }
          })
          .catch((error) => {
            toast.error(error, { autoClose: 2000 });      });
    
  }

  return (
  
    <div className=" flex items-center justify-center  h-screen">
      <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sin Up</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="Full-name">Full Name</Label>
                <Input
                  id="Full-name"
                  type="text"
                  placeholder="Jhon Doe"
                  required
                  name="name"
                  value={inputValues.name || ""} 
        onChange={handleChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  name="email"
                  value={inputValues.email || ""} 
        onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required name="password" value={inputValues.password || ""} 
        onChange={handleChange}/>
              </div>
              <Button type="submit" className="w-full" disabled={status == "loading"? true : false}>
              {status == "loading" ? "Creating account...." : "Create an account"}
              </Button>
              <div className="mb-4 text-center text-sm">
              Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4"> 
                Sign in</Link>
            </div>
              
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
