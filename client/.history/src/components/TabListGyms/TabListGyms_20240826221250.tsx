import CardsGym from "./components/CardsGym/CardsGym";

function TabListGyms() {
    return (
        <div className="w-full h-full flex flex-row items-start ">

            <div className="bg-purple-300 w-full h-full">
                <CardsGym
                titulo="Associação de pais e praticantes de judo"
                professor="Gustavo Alexandre Dias"
                email="gustavo.alexandre@email.com"
                cidade="Londrina"
                bairro="Centro"
                numero="89"
                telefone="(43) 999-9659"
                />
            </div>
        </div>
    );
}

export default TabListGyms;