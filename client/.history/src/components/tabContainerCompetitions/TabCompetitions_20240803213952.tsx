

export default function TabCompetitions() {
    // CardAction
    return (
        <div className=" m-1 ">
            <div className="bg-white h-[30vh] w-[28vw] rounded-md ">
                <div className="p-1">
                    <img
                        src="src\assets\olimpicGame.webp"
                        alt="img"
                        className="rounded h-fit w-full"
                    />

                </div>
                <p className="ml-1 font-semibold text-sm ">Nome competicao</p>
                <div className="bg-gray-500">
                    <p className="text-sm">Data</p>
                    <p>Local</p>
                </div>
            </div>
        </div>
    )
}