import Button from "../buttons/button";
import CardAction from "../card/CardAction";


export default function TabCompetitions() {
    const handleClick = () => {
        alert("Clifasfasfadfck here")
    }

    // CardAction
    return (
        <div className=" flex flex-wrap justify-start  w-full  ">
            <CardAction description="adsfafadsfadsfdaiojfoiajfoiajoifafasdfjaisojfoiajfoiajfoiajoifjaoifjaoijfoiajd" />
            <CardAction titleButton="inscrever-se" />
            <CardAction description="adsfauhasudhfdfuahfuaihi" />
            <CardAction endDate="okokokokok" />
            <CardAction btn={false}>
                fsafasfasfadfasdfas
                <div className="pr-1 pl-1">
                    <Button
                        className=" w-full h-5 lg:h-7 mb-1 mt-2 rounded text-white font-normal text-xs lg:text-sm"
                        label={"DAO"}
                        onClick={handleClick}
                    />
                </div>
            </CardAction>
        </div>

    )
}
