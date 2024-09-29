import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../components/buttons/button";
import Input from "../../components/input/Input";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { authSelector } from "../../store/auth/authReducer";
import { myFprjSchema, updateFprj } from "./typesMyFprj";



function MyFprj() {

  const { user } = useAppSelector(authSelector);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateFprj>({
    resolver: zodResolver(myFprjSchema)
  })

  async function onSubmit(data: updateFprj) {
    setLoading(true);
    try {
      const response = await client.fprj.update(data);

        if(response.status) {
          toast.success("FPRJ atualizada com sucesso", {duration: 4000})
        } else {
          toast.error("Erro ao atualizar FPRJ", {duration: 3000})
        }

      } catch (error) {
        console.error('Erro ao atualizar.Erro ', error);
      } finally {
          setLoading(false);
      }
  }

  return (
    <div className="flex flex-col  justify-between  items-center gap-4 pl-4  lg:w-full w-screen h-fit">
      <Toaster />
      <div className="flex flex-col justify-center gap-3 items-center text-center w-full ">
        <h1 className="text-2xl text-green-500 font-semibold mt-5">FPRJ</h1>
        <div className=" w-fit grid grid-cols-3 gap-2 text-sm mx-auto ">
          <p className="text-gray-500">Presidente: Gustavo Dias</p>
          <p className="text-gray-500">Email: fprj@hotmail.com</p>
          <p className="text-gray-500">Telefone: 43996033944 </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-4 ">
        <h1 className="w-1/2 text-green-500 text-center font-semibold text-xl">
          Documentais
        </h1>
        <Input
          label="Presidente"
          isOptional
          className="w-full lg:w-1/2"
          placeholder="Insira nome do presidente"
          {...register('president')}
          errorMessage={errors?.president?.message as string ?? ""}
        />
        <Input
          label="Telefone"
          isOptional
          className="w-full lg:w-1/2"
          {...register("phone")}
          errorMessage={errors?.phone?.message as string ?? ""}
        />
        <Input
          label="email"
          isOptional
          className="w-full lg:w-1/2"
          {...register("email")}
          errorMessage={errors?.email?.message as string ?? ""}
        />
        <Input
          label="Senha"
          isOptional
          className="w-full lg:w-1/2"
          {...register("password")}
          errorMessage={errors?.password?.message as string ?? ""}
        />
        <Button
          className="w-full lg:w-1/2 h-9 text-white text-center font-semibold text-xl bg-green-500 hover:bg-green-500/90 rounded-md"
          label="Editar"
        />
      </div>
    </div>
  );
}

export default MyFprj;
