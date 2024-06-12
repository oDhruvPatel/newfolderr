import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  firstName: string;
  category: string;
  aboutYou: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [data, setData] = useState<string>("");

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    setData(JSON.stringify(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First name" />
        <select {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea {...register("aboutYou")} placeholder="Write the Messege" />
        <p>{data}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
