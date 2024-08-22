import TableListAthlet from "./components/TableListAthlets/TableListAthlets";



function TabListAthlets() {
    return (
        <div className="w-full h-full flex flex-col">
            <h1 className="mt-2 mb-4 font-semibold  text-green-700 text-xl">Meus pagamentos </h1>
            <TableListAthlet />
        </div>
    )
}

export default TabListAthlets;