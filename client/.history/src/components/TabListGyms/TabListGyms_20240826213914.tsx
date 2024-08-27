import CardsGym from "./components/CardsGym/CardsGym";

function TabListGyms() {
    return (
        <div className="w-full h-full flex flex-row items-start bg-red-400">
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
    );
}

export default TabListGyms;
