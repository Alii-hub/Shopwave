import  userModel  from "../models/userModel.js";


const registerController = async(req,res)=>{
    try {
        const {name,email,password}=req.body;
    
    if(!name || !email || !password){
        return res.status(400).send({sucess :false, message:"All fields are required"});
    }

    //checking user email already exist or not?
   const isExist = await userModel.findOne({email})
   if (isExist) {
    
   }

    const newUser =await userModel.create({name,email,password});
    return res.status(201).send({sucess :true, message:"User registered successfully",newUser});

    } catch (error) {
        console.log (`registerController error: ${error}`)
       return res.status(400).send({sucess:false, message:"error in registerController",error})
    }
}


export {registerController};