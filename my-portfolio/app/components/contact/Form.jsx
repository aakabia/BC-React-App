"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailJs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import {motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren:0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
}



export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // use form for light weight form building "react-hook-form.com"

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your meassage, please wait...");

    // toast from sonner to render loading first when send email is invoked

    emailJs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLET_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_API_KEY,
          limitRate: {
            throttle: 5000, // you can not send more than 1 email per 5 seconds
          },
        }
      )
      // Above is our emailJs.send confuction that we config with our env variables
      // since we are already collecting data from the form with reack hook form we can use send instead of sendForm
      // check docs at https://www.emailjs.com/docs/examples/reactjs/
      
      .then(
        () => {
          toast.success("I have recieved your message, thank you very much!", {
            id: toastId,
          });
          reset();

          // Above renders our success message if the email goes through
          // then clears our loading id by passing a second argument as a object
          // last we reset the form
        },
        (error) => {
          toast.error(
            "There was an error sending your message, please try again later!",
            {
              id: toastId,
            }
          );
        }
        // Above renders our error message if the email does not go through
      );
  };

  const onSubmit = (data) => {
    const templetParams = {
      to_name: "Aziz Kabia",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templetParams);
  };

  // Above creates our params that we will use for our templet
  // Then we call sendEmail and pass the templetParams as a argument

  return (
    <>
      <Toaster richColors={true} />
      {/* make sure the toaster is outside the form */}
      <motion.form
        variants={container} 
        initial="hidden"
        animate={"show"}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-7"
      >
        <motion.input
         variants={item}
          type="text"
          placeholder="name "
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 charcters long.",
            },
          })}
          className="w-full rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg  text-white"
        />

        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}

        {/* Above, is a example of conditional rendering if there is a errors.name */}

        <motion.input
          variants={item}
          type="email"
          placeholder="email "
          {...register("email", { required: "This field is required" })}
          className="w-full rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg  text-white  "
        />

        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}

        <motion.textarea
          variants={item}
          {...register("message", {
            required: "This field is required",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters.",
            },
            minLength: {
              value: 50,
              message: "Message should be more than 50 characters.",
            },
          })}
          placeholder="message"
          className="w-full rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg text-white "
        />

        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
         variants={item}
          value="Send your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background text-white border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize "
          type="submit"
        />
      </motion.form>
    </>
  );
}

// We can add extra arguments to register to help show errors to user
// Check documention on https://react-hook-form.com/docs/useform/seterror for help
