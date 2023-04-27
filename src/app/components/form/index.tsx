import { useState } from "react";
import InputField from "../inputs";
import { IConvertFieldState } from "@/app/types/ConverterFieldTypes";
const Form = () => {
  const [convertField, setConvertionField] = useState<IConvertFieldState>({
    nepali: "0",
    bsb: "0",
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
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <InputField
          inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          inputName="nepali"
          placeHolder="Nepali"
          isRequired
          labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          labelName="Nepal"
          type="text"
          onChangeHandler={onChangeHandler}
        />
        <InputField
          inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          inputName="bsb"
          placeHolder="BSB"
          isRequired
          labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          labelName="BSB"
          type="text"
          onChangeHandler={onChangeHandler}
        />
      </div>
    </form>
  );
};
export default Form;
