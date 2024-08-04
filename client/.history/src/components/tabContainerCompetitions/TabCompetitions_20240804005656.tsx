import Button from "../buttons/button";
import CardAction from "../card/CardAction";


export default function TabCompetitions() {
    // CardAction
    return (
        <div className=" flex flex-wrap justify-start  w-full  ">
            <CardAction description="adsfafadsfadsfdaiojfoiajfoiajoifafasdfjaisojfoiajfoiajfoiajoifjaoifjaoijfoiajd" />
            <CardAction titleButton="inscrever-se" />
            <CardAction description="adsfauhasudhfdfuahfuaihi" />
            <CardAction endDate="okokokokok" />
            <CardAction btn={false}>

                <Button className="m-1 w-full h-5 lg:h-7 mb-1 mt-2 rounded text-white font-normal text-xs lg:text-sm" label={"DAO"} />

            </CardAction>
        </div>

    )
}
