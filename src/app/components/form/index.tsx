"use client";
import { useState } from "react";
import InputField from "../inputs";
import { IConvertFieldState } from "@/app/types/ConverterFieldTypes";
const Form = () => {
  const [convertField, setConvertionField] = useState<IConvertFieldState>({
    nepali: "",
    busd: "",
  });
  const onChangeHandler = (e: any) => {
    const [name, value] = e.target;
    setConvertionField({
      ...convertField,
      [name]: value,
    });
  };
  return (
    <form>
      <div className="grid gap-4 mb-6 md:grid-cols-1">
        <InputField
          inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          inputName="nepali"
          placeHolder="0.00"
          isRequired
          labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          labelName="NEP"
          type="text"
          onChangeHandler={onChangeHandler}
        />
        <InputField
          inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          inputName="busd"
          placeHolder="0.00"
          isRequired
          labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          labelName="BUSD"
          type="text"
          onChangeHandler={onChangeHandler}
        />
      </div>
    </form>
  );
};
export default Form;
