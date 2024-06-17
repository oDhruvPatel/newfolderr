import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoMdContact } from "react-icons/io";

interface FormData {
  name: string;
  email: string;
  description: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [message, setMessage] = useState(""); // State for success message

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    // Simulate form submission (replace with actual API call)
    console.log("Message sent!", formData);
    // Clear form fields and display success message
    setMessage("Thnakyou for taking interest. I will soon take follow up through your provided email.");
    setTimeout(()=>{setMessage("")},10000);
    reset();
  };

  return (
    <>
      <div className="md:w-[80%] w-[90%] p-5  shadow-md rounded-lg my-7 m-auto flex flex-col bxs">
        <div className="w-[100%] text-8xl text-indigo-500 flex flex-col justify-center items-center">
          <IoMdContact />
          <div className="flex flex-row w-full"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col primary md:text-xl text-md w-[100%] text-slate-800">
          <input
            {...register("name")}
            placeholder="Dhruv Patel"
            className="my-2 p-4 rounded-lg view bg-[#1d232a] bxs1"
          />
          <input
            {...register("email")}
            placeholder="example@gmail.com"
            className="my-2 p-4 rounded-lg view bg-[#1d232a] bxs1"
          />
          <textarea
            {...register("description")}
            placeholder="Write your message here."
            className="my-2 p-4 rounded-lg view bxs1"
          />
          <input
            type="submit"
            className="px-4 py-2 md:w-[30%] w-[50%] m-auto my-4 rounded-full view focus:ring-4 focus:from-white focus:to-white focus:text-slate-800 text-white font-medium bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500"
            value="Send Message" // Provide a clear submit button label
          />

          {/* Display success message conditionally */}
          {message && (
            <div className="mt-4 md:text-lg text-md text-center text-indigo-500 font-medium">
              {message}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default ContactForm;
