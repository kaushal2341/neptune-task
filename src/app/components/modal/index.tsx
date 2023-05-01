import { useState } from "react";
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
  parentShowModal?: Boolean;
  onClickOk: Function;
  onClickCancel: Function;
  heading?: string;
  content?: string;
  okButtonName: string;
  cancelButtonName: string;
}) => {
  const [showModal, setShowModal] = useState(parentShowModal || false);
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
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{heading}</h3>
                  <Button
                    buttonClassName="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    buttonNameContent={
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                      </span>
                    }
                    onClickButton={onCloseModal}
                  />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {content}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button
                    buttonClassName="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClickButton={onOkModalClick}
                    buttonNameContent={okButtonName}
                  />

                  <Button
                    buttonClassName="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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