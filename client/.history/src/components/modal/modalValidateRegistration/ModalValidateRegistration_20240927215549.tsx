import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import client from "../../../service/client";
import Modal from "../Modal";
import { ModalProps } from "../types";
import { validateRegistration, validateSchema } from "./TypesValidate";

function ModalValidateRegistration({ isOpen, onClose, path }: ModalProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorComent, setErrorComent] = useState<string>("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<validateRegistration>({
    resolver: zodResolver(validateSchema),
    mode: "onSubmit", // Valida apenas ao enviar o formulário
    // onBlur // Revalidar os campos apenas ao perder o foco
  });

  const onSubmitApprove = async () => {
    try {
      const response = await client.fprj.acceptRegistration(
        path.idPayment as string
      );
      if (response.status) {
        toast.success("Pagamento aceito com sucesso!", { duration: 3000 });
      } else {
        toast.error("Não foi possível aprovar pagamento", { duration: 3000 });
      }
    } catch (err) {
      toast.error("Erro ao registrar pagamento", { duration: 3000 });
    }
  };

  const onSubmitReprove = async () => {
    try {
      let str: any = watch("comment");
      if (str?.length > 5) {
        const response = await client.fprj.refuseRegistration(
          path.idPayment as string, str as string
        );
        if (response.status) {
          toast.success("Pagamento reprovado com sucesso!", { duration: 3000 });
        } else {
          toast.error("Não foi possível reprovar este pagamento", { duration: 3000 });
        }
      } else {
        setErrorComent("Deve inserir um comentario. Minimo 5 caracteres.");
        setTimeout(() => {
          setErrorComent("");
        }, 2000);
      }
    } catch (err) {
        toast.error("Erro ao registrar pagamento", { duration: 3000 });
    }
  };

  useEffect(() => {}, [errorComent, onSubmitReprove]);

  return (
    <div>
      <Toaster />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onClickOK={handleSubmit(onSubmitApprove)}
        onClickCancel={handleSubmit(onSubmitReprove)}
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
              src={
                `http://localhost:3001/${path?.Athlet?.idAthlete}/${String(
                  path?.voucherPath
                )
                  .split("\\")
                  .pop()}` || "src/assets/olimpicGame.webp"
              }
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
                        ${
                          errorComent.length > 5
                            ? `border-red-400`
                            : `border-green-600`
                        }
                         rounded-md`}
              rows={4}
              {...register("comment")}
            />
            {errorComent.length > 5 && (
              <p className="text-red-400 text-xs">{errorComent}</p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalValidateRegistration;
