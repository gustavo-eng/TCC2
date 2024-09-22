import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../../components/buttons/button";
import Input from "../../components/input/Input";
import useAppSelector from "../../hooks/useAppSelector";
import { authSelector } from "../../store/auth/authReducer";
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
    resolver: zodResolver(updateGymSchema)
  });

  async function onSubmit(data: any) {
    console.log('data no onSubmit ', data);
    //setLoading(true);
    //let response = await client.gym.update(data)

  }



  return (
    <div className="flex flex-col  items-center gap-4 pl-4  lg:w-full w-screen ">
      <div className="flex flex-col justify-center gap-3 items-center text-center w-full ">
        <h1 className="text-2xl text-green-500 font-semibold mt-5">
          Associação Pais e Praticantes de Judô
        </h1>
        {/* Grid */}
        <div className=" w-fit grid grid-cols-2 gap-1 text-sm mx-auto ">
          <p className="text-gray-500">Rua: Avenida 15 </p>
          <p className="text-gray-500">CNPJ: 077.703.989 </p>
          <p className="text-gray-500">Numero: 23 </p>
          <p className="text-gray-500">Cidade: Londrina </p>
          <p className="text-gray-500">Telefone: 43996033944 </p>
          <p className="text-gray-500">Bairro: Centro </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-2 ">
        <h1 className="w-1/2 text-green-500 text-center font-semibold text-xl">
          Documentais
        </h1>
        <Input label="CNPJ" isOptional className="w-full lg:w-1/2" />
        <Input label="Telefone" isOptional className="w-full lg:w-1/2" />
        <h1 className="w-1/2 text-green-500 text-center font-semibold text-xl">
          Endereço
        </h1>
        <Input label="Rua" name="street" isOptional className="w-full lg:w-1/2" />
        <Input label="Cidade"  isOptional className="w-full lg:w-1/2" />
        <Input label="Bairro" isOptional className="w-full lg:w-1/2" />
        <Input label="Numero" isOptional className="w-full lg:w-1/2" />
        <Button
          className="w-full lg:w-1/2 h-9 text-white text-center font-semibold text-xl bg-green-500 hover:bg-green-500/90 rounded-md"
          label="Editar"
          onClick={handleSubmit(onSubmit)}
          //onClick={}

        >
          Tendencia
        </Button>
      </div>
    </div>
  );
}

export default MyGym;
