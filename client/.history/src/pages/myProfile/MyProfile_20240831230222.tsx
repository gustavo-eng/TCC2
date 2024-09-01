import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";

function MyProfile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center gap-3 bg-gray-200 w-full">
      <h1>Dados da conta</h1>
      <div className="flex flex-col justify-center items-center text-center w-full bg-green-100">
        <h1 className="text-2xl text-green-500 font-semibold">
          Gustavo Alexandre Dias
        </h1>
        {/* Grid */}
        <div className=" w-fit grid grid-cols-2 gap-1 text-sm mx-auto mt-3">
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
      <div className="w-full flex flex-col justify-start  bg-red-300 ">
        <Input className="w-1/2"/>
      </div>
    </div>
  );
}

export default MyProfile;
