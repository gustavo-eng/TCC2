import React from 'react';
import Button from '../buttons/button';

interface ModalProps {
    isOpen?: boolean;
    labelBtnOk?: string;
    labelBtnCancel?: string;
    hasFooter?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
    childrenFooter?: React.ReactNode;
    textHeader?: string;
    onClickCancel?: () => void;
    onClickOK?: () => void;
}


export default function Modal({
    isOpen,
    hasFooter,
    onClose,
    onClickOK,
    onClickCancel,
    children,
    labelBtnOk,
    labelBtnCancel,
    textHeader
}: ModalProps) {

    if (!isOpen) return null;

    return (
        <div
            tabIndex={-1}
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-500 bg-opacity-45  "
        >
            <div
                className="relative p-4 w-full max-w-2xl max-h-full "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal content */}
                <div className="relative rounded shadow bg-white">
                    {/* Modal header */}
                    <div className=" flex   justify-between   rounded  h-10">
                        <h3 className="text-[18px] font-semibold text-green-800 px-3  ">
                            {textHeader || 'Modal'}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                            onClick={onClose}
                        >
                            <svg
                                className="w-3 h-3 text-black"
                                aria-hidden="true"

                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className='bg-white p-1'>
                        {children}
                    </div>
                    {/* Modal footer */}
                    <div className="flex flex-row justify-end bg-white   rounded-b-lg  ">
                        {hasFooter && (
                            <div className='mb-2 mr-1'>
                                <Button onClick={onClickOK} label={labelBtnOk || 'Submit'} type="button" className='mr-3 focus:ring-4 focus:outline-none font-medium rounded text-sm px-5 h-8 ' />
                                <Button onClick={onClickCancel} label={labelBtnCancel || 'Cancel'} type="button" className='mr-1 focus:ring-4 focus:outline-none font-medium rounded text-sm px-5 h-8  bg-red-500 hover:bg-red-800' />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


