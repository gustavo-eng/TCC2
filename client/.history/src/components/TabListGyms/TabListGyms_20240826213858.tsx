import CardsGym from "./components/CardsGym/CardsGym";

function TabListGyms() {
    return (
        <div className="flex flex-row items-start">
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
