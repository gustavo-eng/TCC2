import { useNavigate } from "react-router-dom";

function MyProfile() {
  const handleBack = () => {
    navigate(-1);
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col   items-center gap-3 bg-gray-200 w-full">
      <h1>Dados da conta</h1>
      <div className="flex flex-col justify-center text-center w-full bg-green-100">
        <h1 className="text-2xl text-green-500 font-semibold">
          Gustavo Alexandre Dias
        </h1>
        {/* Grid */}

        <div className="bg-red-300 w-fit grid grid-cols-4 gap-1 text-xs">
          <p className="text-gray-500">CPF:077.703.989 </p>
          <p className="text-gray-500">RG:077.703.989</p>
          <p className="text-gray-500">Nascimento:26/09/2000</p>
          <p className="text-gray-500">Telefone: 43996033944 </p>
          <p className="text-gray-500">Rua: Avenida 15 </p>
          <p className="text-gray-500">Numero: 23 </p>
          <p className="text-gray-500">Cidade:Londrina </p>
          <p className="text-gray-500">Bairro:Centro </p>
        </div>
      </div>
      <div className="w-full h-fit bg-red-300">Form</div>
    </div>
  );
}

export default MyProfile;
