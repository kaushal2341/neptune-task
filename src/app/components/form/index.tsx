"use client";
import { ChangeEvent, useState } from "react";
import InputField from "../inputs";
import { checkTwoDecimalNumber } from "@/app/utils/regex.utils";
import {
  convertionRateToAnother,
  setChangeHandler,
} from "@/app/utils/convertion.utils";
import ArrowAheadIcon from "@/app/custom-icons/arrow-ahead";
import { FORM_CONSTANTS } from "@/app/utils/constants";
const Form = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value !== "" && !checkTwoDecimalNumber(value)) return;
    setChangeHandler(name, value, setFromCurrency, setToCurrency);
    convertionRateToAnother(name, value, setFromCurrency, setToCurrency);
  };

  return (
    <form>
      <div className="grid gap-4 mb-6 md:grid-cols-1">
        <h1 className="font-bold text-xl">{FORM_CONSTANTS.TITLE}</h1>
        <InputField
          inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          inputName="fromCurrency"
          placeHolder="0.00"
          isRequired
          value={fromCurrency}
          labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          labelName="NEP"
          onChangeHandler={onChangeHandler}
        />
        <div className="grid place-items-center">
          <ArrowAheadIcon />
        </div>

        <InputField
          inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          inputName="toCurrency"
          placeHolder="0.00"
          isRequired
          labelClass="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          labelName="BUSD"
          value={toCurrency}
          onChangeHandler={onChangeHandler}
        />
        <div className="grid place-items-center">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            {FORM_CONSTANTS.WALLET_LINK}
          </a>
        </div>
      </div>
    </form>
  );
};
export default Form;
