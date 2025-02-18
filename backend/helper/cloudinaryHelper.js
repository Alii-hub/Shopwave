import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


// Configuration
cloudinary.config({ 
    cloud_name: 'ddom0qhsl', 
    api_key: '366758478959416', 
    api_secret: 'p0GElh4TbxrSPVqgcO8dldx7Uwo' // Click 'View API Keys' above to copy your API secret
});


const uploadImageOnCloudinary = async (filePath,folderName)=>{
    try {
        // Upload image from server to Cloudinary
        const result = await cloudinary.uploader.upload(filePath, {
            folder: folderName
            // transformation: {
            //     width: 200,
            //     height: 200,
            //     crop: "fill"
            // }
        })
        // delete image from server
        try {
            fs.unlinkSync(filePath);
        } catch (error) {
            console.log("Failed to delete image from server", error);
            
        }
        // console.log(result);
        
        // now send result
        return{
            secure_url: result.secure_url,
            public_id: result.public_id
        }


    } catch (error) {
        // throw new Error(error);
        console.log("aa");
        
        
    }
}

export {uploadImageOnCloudinary};