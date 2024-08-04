import React from 'react';
import Button from '../buttons/button';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    childrenFooter?: React.ReactNode;
    textHeader?: string;
    onClickCancel?: () => void;
    onClickOK?: () => void;
}


export default function Modal({
    isOpen,
    onClose,
    onClickOK,
    onClickCancel,
    children,
    textHeader
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div
            tabIndex={-1}
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-500 bg-opacity-45"

        >
            <div
                className="relative p-4 w-full max-w-2xl max-h-full"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal content */}
                <div className="relative rounded shadow bg-gray-300">
                    {/* Modal header */}
                    <div className=" flex items-center justify-between p-1 border-b-2 rounded-none border-gray-600 h-12">
                        <h3 className="text-md font-semibold text-gray-900 ">
                            {textHeader || 'Text header'}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                        {children || <div>Children noneefdasfa  </div>}
                    </div>
                    {/* Modal footer */}
                    <div className="flex flex-row justify-end   bg-gray-200 pt-2 pb-1 rounded-b-lg">
                        <Button onClick={onClickOK} label='I accepdt' type="button" className='mr-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center' />
                        <Button onClick={onClickCancel} label='I accepdt' type="button" className='mr-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center' />

                    </div>
                </div>
            </div>
        </div>
    );
};


