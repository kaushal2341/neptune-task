"use client";
import { ChangeEvent, useState } from "react";
import InputField from "../inputs";
import { checkTwoDecimalNumber } from "@/app/utils/regex.utils";
import {
  convertionRateToAnother,
  setChangeHandler,
} from "@/app/utils/convertion.utils";
import ArrowAheadIcon from "@/app/custom-icons/arrow-ahead";
import { FORM_CONSTANTS, MODAL_CONSTANTS } from "@/app/utils/constants";
import Link from "../links";
import Modal from "../modal";
import {
  connectToWallet,
  getBalanceFromwalletService,
  getChainIdFromwalletService,
  getResponseData,
} from "@/app/utils/wallet.utils";
import { ResponseMessageType } from "@/app/types/ResponseMessageType";

const CurrencyConverterForm = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showViewDetailModal,setShowViewDetailModal] = useState(false)

  const [responseData, setResponseData] = useState<ResponseMessageType>(
    getResponseData()
  );

  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value !== "" && !checkTwoDecimalNumber(value)) return;
    setChangeHandler(name, value, setFromCurrency, setToCurrency);
    convertionRateToAnother(name, value, setFromCurrency, setToCurrency);
  };
  const onShowHideWalletDetails = (flag: boolean) => {
    setShowModal(flag);
  };
  const onShowHideViewDetail = (flag:boolean) =>{
    setShowViewDetailModal(flag)
  }
  const onConnectClick = async () => {
    const responseMessage = await connectToWallet();
    setResponseData(responseMessage);
    if (!responseMessage.loading) return;
    const balanceResponseMessage = await getBalanceFromwalletService(
      responseMessage.data.address
    );
    setResponseData(balanceResponseMessage);
    if (!balanceResponseMessage.loading) return;
    const chainResponseMessage = await getChainIdFromwalletService(
      balanceResponseMessage.data.address,
      balanceResponseMessage.data.balance
    );
    setResponseData(chainResponseMessage);
    onShowHideWalletDetails(false);
    onShowHideViewDetail(true)
    
  };

  const onDisconnectWallet = () =>{
    onShowHideViewDetail(false)
  }

  return (
    <>
      {/**Currency Converter Form */}
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
            <Link
              subTitle={FORM_CONSTANTS.WALLET_LINK}
              onClickHandler={() => onShowHideWalletDetails(true)}
            />
          </div>
        </div>
      </form>
      {/**Wallet Connection Modal */}
      <Modal
        cancelButtonName="Cancel"
        okButtonName={!responseData.loading ? "Connect" : "Connecting..."}
        onClickCancel={() => onShowHideWalletDetails(false)}
        onClickOk={onConnectClick}
        okButtonShow={true}
        content={responseData.message}
        heading={MODAL_CONSTANTS.WALLET_HEADING}
        parentShowModal={showModal}
      />
      {/**Wallet Details Modal */}
      <Modal
        cancelButtonName="Disconnect"
        okButtonName={""}
        onClickCancel={() => onDisconnectWallet()}
        onClickOk={onConnectClick}
        content={responseData.message}
        heading={MODAL_CONSTANTS.WALLET_HEADING}
        parentShowModal={showViewDetailModal}
      />
    </>
  );
};
export default CurrencyConverterForm;
