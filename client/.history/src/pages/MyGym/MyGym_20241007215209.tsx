import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch } from "@phosphor-icons/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Button from "../../components/buttons/button";
import Input from "../../components/input/Input";
import useAppSelector from "../../hooks/useAppSelector";
import client from "../../service/client";
import { authSelector, setUser } from "../../store/auth/authReducer";
import { AppDispatch } from "../../store/store";
import { updateGym, updateGymSchema } from "./MyGymTypes";

function MyGym() {

  const { user } = useAppSelector(authSelector);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateGym>({
    resolver: zodResolver(updateGymSchema),
    defaultValues: {
      city: user?.city,
      cnpj: user?.cnpj,
      neighborhood: user?.neighborhood,

    }
  });

  async function onSubmit(data: any) {

    setLoading(true);

    let response = await client.gym.update(String(user.idGym), data);

    if (response.status) {
      toast.success("Academia atualizada com sucesso", { duration: 4000 });
      setTimeout(() => {
        dispatch(setUser(response.payload));
      }, 2000);
    } else {
      toast.error("Erro ao atualizar academia ", { duration: 4000 });
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col  items-center gap-4 pl-4  lg:w-full w-screen ">
      {loading && <Toaster position="bottom-center"/>}
      <div className="flex flex-col justify-center gap-3 items-center text-center w-full ">
        <h1 className="text-2xl text-green-500 font-semibold mt-5">
          Associação Pais e Praticantes de Judô
        </h1>
        {/* Grid */}
        <div className=" w-fit grid grid-cols-2 gap-1 text-sm mx-auto ">
          <p className="text-gray-500">Rua: {user?.street} </p>
          <p className="text-gray-500">CNPJ: {user?.cnpj} </p>
          <p className="text-gray-500">Numero: {user?.number} </p>
          <p className="text-gray-500">Cidade: {user?.city} </p>
          <p className="text-gray-500">Telefone: {user?.phone} </p>
          <p className="text-gray-500">Bairro: {user?.neighborhood} </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-2 ">
        <h1 className="w-1/2 text-green-500 text-center font-semibold text-xl">
          Documentais
        </h1>
        <Input
          label="CNPJ"
          isOptional
          className="w-full lg:w-1/2"
          placeholder="Insira o cnpj da academia"
          {...register("cnpj")}
          errorMessage={errors?.cnpj?.message ?? ""}
        />
        <Input
          label="Telefone"
          isOptional
          className="w-full lg:w-1/2"
          {...register("phone")}
          errorMessage={errors?.phone?.message ?? ""}
        />
        <h1 className="w-1/2 text-green-500 text-center font-semibold text-xl">
          Endereço
        </h1>
        <Input
          label="Rua"
          isOptional
          className="w-full lg:w-1/2"
          {...register("street")}
          errorMessage={errors?.street?.message ?? ""}
        />
        <Input
          label="Cidade"
          isOptional
          className="w-full lg:w-1/2"
          {...register("city")}
          errorMessage={errors?.city?.message ?? ""}
        />
        <Input
          label="Bairro"
          isOptional
          className="w-full lg:w-1/2"
          {...register("neighborhood")}
          errorMessage={errors?.neighborhood?.message ?? ""}
        />
        <Input
          label="Numero"
          isOptional
          className="w-full lg:w-1/2"
          type="number"
          {...register("number")}
        />
        <Button
          className="w-full lg:w-1/2 h-9 text-white text-center font-semibold text-xl bg-green-500 hover:bg-green-500/90 rounded-md"
          label={loading ? " " : "Editar" }
          onClick={handleSubmit(onSubmit)}
        >
          {loading && (
            <div className="flex flex-col items-center">
              <CircleNotch
                weight="bold"
                className="animate-[spin_2s_cubic-bezier(0.2,0.4,0.7,0.4)_infinite] text-xl"
              />
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}

export default MyGym;
