import { Link } from "react-router-dom";
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
import axios from "axios";

export default function RegisterPage({ className, ...props }) {

  const [inputValues ,setinputValues] = useState([])

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setinputValues(values => ({...values, [name]: value}))
  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    // setinputValues(inputValues);
    // console.log(inputValues);
    axios.post("http://localhost:8080/api/v1/users/register",inputValues,{
    headers: {'Content-Type': 'application/json'}}).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
    
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
              <Button type="submit" className="w-full">
                Create an account
              </Button>
              
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
