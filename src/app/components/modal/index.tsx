import { useEffect, useState } from "react";
import Button from "../button";

const Modal = ({
  parentShowModal,
  onClickOk,
  onClickCancel,
  heading,
  content,
  okButtonName,
  cancelButtonName,
}: {
  parentShowModal: boolean;
  onClickOk: Function;
  onClickCancel: Function;
  heading?: string;
  content?: string;
  okButtonName: string;
  cancelButtonName: string;
}) => {

  const [showModal, setShowModal] = useState(false);
  useEffect(()=>{
   setShowModal(parentShowModal)
  },[parentShowModal])

  const onCloseModal = () => {
    setShowModal(false);
    onClickCancel();
  };
  const onOkModalClick = () => {
    setShowModal(false);
    onClickOk();
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h5 className="text-xl font-bold">{heading}</h5>
                  <Button
                    buttonClassName="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    buttonNameContent={
                      <>
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </>
                    }
                    onClickButton={onCloseModal}
                  />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-md leading-relaxed text-rose-400">
                    {content}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button
                    buttonClassName="text-white bg-blue-500 active:bg-blue-600 font-bold uppercase px-6 py-2 text-sm rounded shadow  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClickButton={onOkModalClick}
                    buttonNameContent={okButtonName}
                  />

                  <Button
                    buttonClassName="bg-gray-300 text-black active:bg-gray-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClickButton={onCloseModal}
                    buttonNameContent={cancelButtonName}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
