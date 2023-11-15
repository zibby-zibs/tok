"use client";

import useConversation from "@/hooks/useConversation";
import axios from "axios";
import React from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./message-input";
import { HiPaperAirplane } from "react-icons/hi";
import { CldUploadButton } from "next-cloudinary";

type Props = {};

const Form = (props: Props) => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });

    axios.post(`/api/messages`, {
      ...data,
      conversationId,
    });
  };

  const handleUpload = (result: any) => {
    axios.post(`/api/messages`, {
      image: result?.info?.secure_url,
      conversationId,
    });
  };
  return (
    <div className="py-4 px-4 bg-white border-t flex - items-center gap-2 lg:gap-4 w-full">
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset="rer0tcms"
      >
        <HiPhoto size={30} className="text-black" />
      </CldUploadButton>
      <form
        onClick={handleSubmit(onSubmit)}
        className="flex  items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="rounded-full p-2 bg-black cursor-pointer hover:bg-sky-600 transition"
        >
          <HiPaperAirplane size={18} className="text-white rotate-90" />
        </button>
      </form>
    </div>
  );
};

export default Form;
