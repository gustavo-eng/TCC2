import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../components/buttons/button";
import Input from "../../components/input/Input";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { authSelector } from "../../store/auth/authReducer";
import { updateUser, updateUserSchema } from "./MyProfileTypes";

function MyProfile() {
  const { user } = useAppSelector(authSelector);
  const [loading, setLoading] = useState<boolean>(false);
  async function onSubmit(data: updateUser) {
  const response = await client.auth.update(data, String(user.idAthlete));

    if(response.status) {
      toast.success('Usuário atualizado com sucesso!', {duration: 5000});
    } else {
      toast.error('Erro ao atualizar usuário');
    };

  }

  const {
    register,
    handleSubmit,
    //reset,
    formState: { errors },
  } = useForm<updateUser>({
    resolver: zodResolver(updateUserSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
      <Toaster/>
      <div className="flex flex-col  items-center gap-4 pl-4  lg:w-full w-screen ">
        <div className="flex flex-col justify-center gap-3 items-center text-center w-full ">
          <h1 className="text-2xl text-green-500 font-semibold mt-5">
            Gustavo Alexandre Dias
          </h1>
          {/* Grid */}
          <div className=" w-fit grid grid-cols-2 gap-1 text-sm mx-auto ">
            <p className="text-gray-500">Rua: Avenida 15 </p>
            <p className="text-gray-500">CPF: {user?.cpf || ""} </p>
            <p className="text-gray-500">Numero: {user?.number || null} </p>
            <p className="text-gray-500">RG: {user?.rg || null}</p>
            <p className="text-gray-500">Cidade: {user?.city || ""} </p>
            <p className="text-gray-500">Telefone: {user?.phone || null} </p>
            <p className="text-gray-500">Bairro: {user?.neighborhood || ""} </p>
            <p className="text-gray-500">Nascimento: {user?.birth || ""}</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-2 ">
          <h1 className="w-1/2 text-green-500 text-center font-semibold text-xl">
            Pessoais
          </h1>
          <Input
            label="CPF"
            isOptional
            className="w-full lg:w-1/2"
            placeholder={`${user?.cpf || ""}`}
            {...register("cpf")}
            errorMessage={errors?.cpf?.message ?? ""}
          />
          <Input
            label="RG"
            isOptional
            className="w-full lg:w-1/2"
            placeholder={`${user?.rg || ""}`}
            {...register("rg")}
            errorMessage={errors?.rg?.message ?? ""}
          />
          <Input
            label="Telefone"
            isOptional
            className="w-full lg:w-1/2"
            placeholder={`${user?.phone || "(xx)xxxx - xxxx"}`}
            {...register("phone")}
            errorMessage={errors?.phone?.message ?? ""}
          />
          <Input
            label="Nascimento"
            type="date"
            isOptional
            className="w-full lg:w-1/2 cursor-pointer"
            placeholder={`${user?.birth || ""}`}
            {...register("birth")}
            errorMessage={errors?.birth?.message ?? ""}
          />
          <h1 className="w-1/2 text-green-500 text-center font-semibold text-xl">
            Endereço
          </h1>
          <Input
            label="Cidade"
            isOptional
            className="w-full lg:w-1/2"
            placeholder={`${user?.city || null}`}
            {...register('city')}
            errorMessage={errors?.city?.message ?? ""}
          />
          <Input
            label="Bairro"
            isOptional
            className="w-full lg:w-1/2"
            placeholder={`${user?.neighborhood || ""}`}
            {...register("neighborhood")}
            errorMessage={errors?.neighborhood?.message ?? ""}
          />
          <Input
            label="Número"
            isOptional
            type="number"
            className="w-full lg:w-1/2"
            placeholder={`${user?.number || null}`}
            {...register("number")}
            //errorMessage={errors?.number?.message ?? ""}
          />
          <Button
            type="submit"
            className="w-full lg:w-1/2 h-9 text-white text-center font-semibold text-xl bg-green-500 hover:bg-green-500/90 rounded-md"
            label="Editar"
            //icon={<>dddddd</>}
          >
            Gustavo Alexandre Dias
          </Button>
        </div>
      </div>
    </form>
  );
}

export default MyProfile;
