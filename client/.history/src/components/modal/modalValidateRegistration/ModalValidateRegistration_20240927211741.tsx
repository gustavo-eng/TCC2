import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import client from "../../../service/client";
import Modal from "../Modal";
import { ModalProps } from "../types";
import { validateRegistration, validateRegistrationOptional, validateSchema, validateSchemaOptional } from "./TypesValidate";

function ModalValidateRegistration({
    isOpen,
    onClose,
    path
}:ModalProps) {

    const [loading, setLoading] = useState<boolean>(false);
    const [action, setAction] = useState<"accept" | "reject" | null>(null);



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<validateRegistrationOptional |validateRegistration >({
        resolver: zodResolver(action == 'accept' ?  validateSchemaOptional :  validateSchema)
        // onBlur // Revalidar os campos apenas ao perder o foco
    });

    let watchResponse = watch();


    const onSubmitApprove = async () => {
        setAction('accept');
        try {
            const response = await client.fprj.acceptRegistration(path.idPayment as string);
            console.log('response ', response)
            if(response.status) {
                toast.success('Pagamento aceito com sucesso!', {duration: 3000});
            } else {
                toast.error('Não foi possível aprovar pagamento', {duration: 3000});
            }

        }catch(err) {
            toast.error('Erro ao registrar pagamento', {duration: 3000});
        }
    }


    return (
        <div>
            <Toaster />
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              onClickOK={handleSubmit(onSubmitApprove)}
              onClickCancel={() => console.log('Cancel')}
              textHeader=" Validar explicando "
              hasFooter
              labelBtnCancel="Reprovar"
              labelBtnOk="Aprovar"
            >
             <div>
                <div className="w-full flex  flex-col p-1 ">
                    <span className="font-medium">Nome do aluno: Gustavo</span>
                    <div className="flex flex-row justify-start mt-2">
                        <span className="font-medium mr-3">Genero</span>
                        <span className="font-medium mr-3">classe</span>
                        <span className="font-medium">categoria</span>
                    </div>
                </div>
                <span className="font-medium">Comprovante</span>
                <div className="bg-green-50 h-[35vh] rounded-md border-[1px] border-green-800 border-dashed flex justify-center">
                    <img
                    src={`http://localhost:3001/${path?.Athlet?.idAthlete}/${String(path?.voucherPath).split('\\').pop()}` || "src/assets/olimpicGame.webp"}
                    alt="img"
                        className="h-full w-full rounded"
                    />
                </div>
                <div>
                    <p className="mt-3 font-medium text-[17px]">Orientação</p>
                    <textarea
                        className={`w-full p-2
                        border-[1.5px]
                        focus:outline-none
                        ${errors.comment ? `border-red-400` : `border-green-600`}
                         rounded-md`}
                         rows={4}
                         {...register('comment')}
                    />
                    {errors.comment && <p className="text-red-400 text-xs">{errors.comment.message}</p>}

                </div>
             </div>
            </Modal>
        </div>
    )
}

export default ModalValidateRegistration;