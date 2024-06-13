import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoMdContact } from "react-icons/io";

interface FormData {
  name: string;
  email: string;
  description: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [data, setData] = useState<string>("");

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    setData(JSON.stringify(formData));
    console.log("Message has been sent !" + data);


  };

  return (
    <>
     <div className="md:w-[80%] w-[90%] p-5 border-2 shadow-md rounded-lg my-7 m-auto flex  flex-col bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
     
     <div className=" w-[100%] text-8xl text-indigo-600 flex flex-col justify-center items-center"> <IoMdContact/>
     <div className="flex flex-row w-full"></div>
      </div>
     
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col primary md:text-xl text-md w-[100%] text-slate-800">
        <input {...register("name")} placeholder="Dhruv Patel" className="my-2 p-4 rounded-lg"/> 
        <input {...register("email")} placeholder="example@gmail.com" className="my-2 p-4 rounded-lg"/>
        <textarea {...register("email")} placeholder="Write your message here." className="my-2 p-4 rounded-lg"/>
        <input type="submit" className="px-4 py-2  md:w-[30%] w-[50%] m-auto my-4 rounded-full focus:ring-4 focus:from-white focus:to-white focus:text-slate-800 text-white font-medium bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500  "/>
      </form>
    </div>
    </>
  );
};

export default ContactForm;
