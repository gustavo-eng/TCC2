import Input from "../input/Input";
import CardsGym from "./components/CardsGym/CardsGym";

function TabListGyms() {
  return (
    <div className="w-full h-full flex flex-col  items-start p-1">
      <div className=" w-full flex flex-col text-center mb-4 mt-6">
        <h1 className="text-3xl font-bold bg-red text-green-600">Academias</h1>
        <Input

         className="w-1/2 text-center"
        />
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
