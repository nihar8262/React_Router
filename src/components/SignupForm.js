import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        accountType:"student"
    })

    const[showPassword,setPassword] = useState(false);
    const[showConfirmPassword,setConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
            event.preventDefault();  
            if(formData.password != formData.confirmPassword){
                toast.error("Passwords do not match");
                return ;
            }

            setIsLoggedIn(true);
            toast.error("Passwords do not match");
            const accountData = {
                ...formData
            }

            console.log(accountData);

            navigate("/dashboard");
    }

    return (
        <div>
            <div className="flex text-richblack-100 bg-richblack-800 p-1 gap-x-2 my-6 rounded-full max-w-max">
                <button
                className={`${accountType === "student" 
                ?
                "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full 
                transition-all duration-200`}
                onClick={()=> setAccountType("student")}
                >
                    Student
                </button>
                <button
                className={`${accountType === "instructor" 
                ?
                "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full 
                transition-all duration-200`}
                onClick={()=> setAccountType("instructor")}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex gap-4  mt-[20px]">
                    <label className="w-full">
                        <p className="text-richblack-100 text-[0.875rem] mb-1 leading-[1.375rem]">
                            First Name<sup className="text-red-500">*</sup>
                        </p>
                        <input 
                        required
                        type="text"
                        
                        placeholder="Enter your First Name"
                        value= {formData.firstName}
                        onChange={(event)=>changeHandler(event)}
                        name="firstName" 
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                        />
                    </label>

                    <label className="w-full ">
                        <p className="text-richblack-100 text-[0.875rem] mb-1 leading-[1.375rem]">
                            Last Name<sup className="text-red-500">*</sup>
                        </p>
                        <input 
                        required
                        type="text"
                        placeholder="Enter your Last Name"
                        value= {formData.lastName}
                        onChange={changeHandler}
                        name="lastName"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                        />
                    </label>
                </div>

                <div className="mt-[20px]">
                <label className="w-full ">
                    <p className="text-richblack-100 text-[0.875rem] mb-1 leading-[1.375rem]">
                        Email Address<sup className="text-red-500">*</sup>
                    </p>
                    <input 
                    required
                    type="email"
                    placeholder="Enter your Email"
                    value= {formData.email}
                    onChange={changeHandler}
                    name="email" 
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                    />
                </label>
                </div>

                <div className="flex gap-4 mt-[20px]">
                    <label className="w-full relative">
                        <p className="text-richblack-100 text-[0.875rem] mb-1 leading-[1.375rem]">
                        Create Password<sup className="text-red-500">*</sup>
                        </p>
                        <input 
                        required
                        type={showPassword ? ("text") : ("password") }
                        placeholder="Enter password"
                        value= {formData.password}
                        onChange={changeHandler}
                        name="password" 
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                        />

                        <span 
                        className="absolute right-3 top-[38px] cursor-pointer "
                        onClick={() => setPassword((prev) => !prev)} >
                            {showPassword ? 
                            (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
                             (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}    
                        </span> 

                        
                    </label>

                    <label className="w-full relative">
                        <p className="text-richblack-100 text-[0.875rem] mb-1 leading-[1.375rem]">
                        Confirm Password<sup className="text-red-500">*</sup>
                        </p>
                        <input 
                        required
                        type={showPassword ? ("text") : ("password") }
                        placeholder="Confirm password"
                        value= {formData.confirmPassword}
                        onChange={changeHandler}
                        name="confirmPassword" 
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                        />

                        <span 
                        className="absolute right-2 top-[38px] cursor-pointer "
                        onClick={() => setConfirmPassword((prev) => !prev)} >
                            {showConfirmPassword ?
                            (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) :
                             (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}    
                        </span> 

                        
                </label>
                </div>

                <button className="bg-yellow-50 rounded-[8px] font-medium 
                         text-richblack-900 px-[12px] py-[8px] mt-7  w-full">
                    Create Account
                </button>
                
            </form>
        </div>
    )
}

export default SignupForm