import TableListAthlet from "./components/TableListAthlets/TableListAthlets";

function TabListAthlets() {
  return (
    <div className="w-full h-fit lg:h-[80vh] flex flex-col items-center p-1">
      <div className=" flex flex-col items-center font-medium text-green-700 text-[22px]">
        <h1 className="mt-3  text-3xl font-bold  text-green-600">
          Meus alunos
        </h1>
      </div>

      <TableListAthlet />
    </div>
  );
}

export default TabListAthlets;