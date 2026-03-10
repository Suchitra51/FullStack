import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Username required"),
  email: yup.string().email("Invalid email").required("Email required"),
  password: yup.string().min(6, "Min 6 characters").required("Password required"),
  terms: yup.bool().oneOf([true], "Accept Terms & Conditions"),
});

function RegistrationForm() {
  const { register, handleSubmit, watch, formState: { errors } } =
    useForm({ resolver: yupResolver(schema) });

  const password = watch("password", "");

  const getStrength = () => {
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration Successful");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input placeholder="Username" {...register("username")} />
        <p>{errors.username?.message}</p>

        <input placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input type="password" placeholder="Password" {...register("password")} />
        <p>Password Strength: {getStrength()}</p>
        <p>{errors.password?.message}</p>

        <label>
          <input type="checkbox" {...register("terms")} />
          Accept Terms
        </label>
        <p>{errors.terms?.message}</p>

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default RegistrationForm;