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
                    buttonClassName="relative inline-flex items-center justify-start inline-block px-1 py-1 overflow-hidden font-medium transition-all bg-rose-600 rounded-full hover:bg-white group"
                    buttonNameContent={
                      <>
                       <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-rose-600">  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></span>
                    
                      </>
                    }
                    animationChildren={ <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>}
                    onClickButton={onCloseModal}
                  />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-md leading-relaxed text-rose-400">
                    {content}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center space-x-1.5 p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button
                    buttonClassName="relative items-center justify-start inline-block px-3 py-1 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
                    onClickButton={onOkModalClick}
                    buttonNameContent={ <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">{okButtonName}</span>}
                    animationChildren={
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                   }
                  />

                  <Button
                    buttonClassName="relative inline-flex items-center justify-start inline-block px-3 py-1 overflow-hidden font-medium transition-all bg-rose-600 rounded-full hover:bg-white group"
                    onClickButton={onCloseModal}
                    buttonNameContent={ <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-rose-600">{cancelButtonName}</span>}
                    animationChildren={
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                   }
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
