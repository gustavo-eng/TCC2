import Input from "../../components/input/Input";

function MyProfile() {

  return (
    <div className="flex flex-col items-center gap-7  w-full">
      <h1>Dados da conta</h1>
      <div className="flex flex-col justify-center gap-3 items-center text-center w-full ">
        <h1 className="text-2xl text-green-500 font-semibold">
          Gustavo Alexandre Dias
        </h1>
        {/* Grid */}
        <div className=" w-fit grid grid-cols-2 gap-1 text-sm mx-auto ">
          <p className="text-gray-500">Rua: Avenida 15 </p>
          <p className="text-gray-500">CPF: 077.703.989 </p>
          <p className="text-gray-500">Numero: 23 </p>
          <p className="text-gray-500">RG: 077.703.989</p>
          <p className="text-gray-500">Cidade: Londrina </p>
          <p className="text-gray-500">Telefone: 43996033944 </p>
          <p className="text-gray-500">Bairro: Centro </p>
          <p className="text-gray-500">Nascimento: 26/09/2000</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center ">
        <Input label="CPF" isOptional className="w-1/2"/>
      </div>
    </div>
  );
}

export default MyProfile;