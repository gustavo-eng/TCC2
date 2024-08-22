import TableListAthlet from "./components/TableListAthlets/TableListAthlets";



function TabListAthlets() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <h1 className="mt-4 mb-4 font-semibold  text-green-700 text-xl">Meus alunos </h1>
            <TableListAthlet  />
        </div>
    )
}

export default TabListAthlets;