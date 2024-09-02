import { Trash } from '@phosphor-icons/react';
import { forwardRef, useImperativeHandle, useState } from 'react';
import Button from '../../buttons/button';

interface ModalConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export interface ModalConfirmationHandle {
  openModal: () => void;
  closeModal: () => void;
}

const ModalConfirmation = forwardRef<ModalConfirmationHandle, ModalConfirmationProps>(
  ({ onConfirm, onCancel }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }));

    const closeModal = () => setIsOpen(false);

    return (
      <>
        {isOpen && (
          <div
            id="deleteModal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden md:inset-0"
          >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative p-4 text-center bg-white rounded-lg shadow  sm:p-5">
                <button
                  type="button"
                  className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  onClick={closeModal}
                >
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

                </button>
                <Trash size={45}  className="text-red-500  mb-3.5 mx-auto"/>
                <p className="mb-4 text-gray-500 ">
                  Você tem certeza que deseja realizar essa operação ?
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <Button
                    label='Cancelar'
                    onClick={() => {
                      onCancel();
                      closeModal();
                    }}
                    type="button"
                    className="py-2 px-3 text-sm font-medium text-white  rounded-lg border border-gray-200 hover:bg-red-700  focus:outline-none  focus:z-10 bg-red-500"
                  >

                  </Button>
                  <Button
                    label='Sim'
                    onClick={() => {
                      onConfirm();
                      closeModal();
                    }}
                    type="submit"
                    className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700  "
                  />

                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

export default ModalConfirmation;
