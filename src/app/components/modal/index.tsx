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
  okButtonShow
}: {
  parentShowModal: boolean;
  onClickOk: Function;
  onClickCancel: Function;
  heading?: string;
  content?: string;
  okButtonShow?:boolean
  okButtonName: string;
  cancelButtonName: string;
}) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(parentShowModal);
  }, [parentShowModal]);

  const onCloseModal = () => {
    setShowModal(false);
    onClickCancel();
  };
  const onOkModalClick = () => {
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
                     buttonClassName="relative inline-flex items-center justify-center px-1 py-1 overflow-hidden font-mono font-medium tracking-tighter text-white bg-white rounded-lg group"
                     buttonNameContent={
                      <>
                        <span className="relative w-full text-left text-rose-700 transition-colors duration-200 ease-in-out group-hover:text-white">
                          {" "}
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </>
                    }
                    animationChildren={
                      <>
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-rose-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>
                      </>
                    }
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
                <div className="flex items-center justify-center space-x-px p-6 border-t border-solid border-slate-200 rounded-b">
                  {okButtonShow && <Button
                    buttonClassName="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-white rounded-lg group"
                    onClickButton={onOkModalClick}
                    buttonNameContent={
                      <span className="relative w-full text-left text-blue-600 transition-colors duration-200 ease-in-out group-hover:text-white">{okButtonName}</span>
                    }
                    animationChildren={
                      <>
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>
                      </>
                    }
                  />}

                  <Button
                    buttonClassName="relative inline-flex items-center justify-center px-6 py-3  overflow-hidden font-mono font-medium tracking-tighter text-white bg-white rounded-lg group"
                    onClickButton={onCloseModal}
                    buttonNameContent={
                      <span className="relative w-full text-left text-rose-700 transition-colors duration-200 ease-in-out group-hover:text-white">
                        {cancelButtonName}
                      </span>
                    }
                    animationChildren={
                      <>
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-rose-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>
                      </>
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
