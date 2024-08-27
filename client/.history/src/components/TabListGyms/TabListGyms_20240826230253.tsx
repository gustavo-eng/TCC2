import Input from "../input/Input";
import ButtonAddGym from "./components/buttonAddGym/buttonAddGym";
import CardsGym from "./components/CardsGym/CardsGym";

function TabListGyms() {

  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div className="w-full h-full flex flex-col  items-start p-1">
      <div className=" w-full flex flex-col items-center text-center mb-4 mt-6">
        <h1 className="text-3xl font-bold bg-red text-green-600">Academias</h1>
        <div className="w-full flex flex-row justify-center">
            <Input
            className="w-1/2 text-center mt-5"
            />
            <ButtonAddGym text="Adicionar academia" onClick={handleClick} />
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap lg:justify-start justify-center">
        {Array.from({ length: 5 }, () => {
          return (
            <CardsGym
              titulo="Academia de Judo"
              professor="Gustavo Alexandre Dias"
              email="gustavo.alexandre@email.com"
              cidade="Londrina"
              bairro="Centro"
              numero="89"
              telefone="(43) 999-9659"
            />
          );
        })}
      </div>
    </div>
  );
}

export default TabListGyms;
