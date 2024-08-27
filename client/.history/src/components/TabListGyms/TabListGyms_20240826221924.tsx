import CardsGym from "./components/CardsGym/CardsGym";

function TabListGyms() {
    return (
        <div className="w-full h-full flex flex-col items-start ">
            <div className="">
                <h1 className="text-3xl font-bold bg-red text-gray-800">Gyms</h1>
            </div>
            <div className="w-full flex flex-row flex-wrap items-center">
                {Array.from({length: 5}, () => {
                    return (
                        <CardsGym
                        titulo="Associação de pais e praticantes de judo"
                        professor="Gustavo Alexandre Dias"
                        email="gustavo.alexandre@email.com"
                        cidade="Londrina"
                        bairro="Centro"
                        numero="89"
                        telefone="(43) 999-9659"
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default TabListGyms;
