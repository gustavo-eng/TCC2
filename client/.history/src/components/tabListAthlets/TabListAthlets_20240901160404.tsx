import TableListAthlet from "./components/TableListAthlets/TableListAthlets";

function TabListAthlets() {
    return (
        <div className="w-full h-fit lg:h-[80vh] flex flex-col items-center p-1">
            <div className=" flex flex-col items-center font-medium text-green-700 text-[22px]">
        <h1 className="mt-4  text-3xl font-bold  text-green-600">
          Eventos
        </h1>
      </div>
            {/* <h1 className="mt-4 mb-4 font-semibold  text-green-700 text-xl">Meus alunos </h1> */}
            <TableListAthlet  />
        </div>
    )
}

export default TabListAthlets;