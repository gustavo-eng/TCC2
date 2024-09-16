import Button from "../../components/buttons/button";
import Input from "../../components/input/Input";
import useAppSelector from "../../hooks/useAppSelector";
import { authSelector } from "../../store/auth/authReducer";

function MyProfile() {

  const {user} = useAppSelector(authSelector);

  return (
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
        <h1 className="w-1/2 text-green-500 text-center font-semibold text-xl">Pessoais</h1>
        <Input label="CPF" isOptional className="w-full lg:w-1/2" placeholder={`${user?.cpf || ""}`} />
        <Input label="RG" isOptional className="w-full lg:w-1/2" placeholder={`${user?.rg || ""}`} />
        <Input label="Telefone" isOptional className="w-full lg:w-1/2" placeholder={`${user?.phone || null}`}/>
        <Input label="Nascimento" type="date" isOptional className="w-full lg:w-1/2 cursor-pointer"/>
        <h1 className="w-1/2 text-green-500 text-center font-semibold text-xl">Endereço</h1>
        <Input label="CPF" isOptional className="w-full lg:w-1/2"/>
        <Input label="RG" isOptional className="w-full lg:w-1/2"/>
        <Input label="Telefone" isOptional className="w-full lg:w-1/2"/>
        <Input label="Nascimento" type="date" isOptional className="w-full lg:w-1/2 cursor-pointer"/>
        <Button
          className="w-full lg:w-1/2 h-9 text-white text-center font-semibold text-xl bg-green-500 hover:bg-green-500/90 rounded-md"
          label="Editar"
        />

      </div>
    </div>
  );
}

export default MyProfile;
