
import CardAction from "../card/CardAction";
import Input from "../input/Input";
import Select from "../select/Select";


export default function TabCompetitions() {

    const options = [
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
    ];

    // CardAction
    return (
        <div>
            <div className="bg-green-400 flex w-full">
                <Input className="w-1/2" />
                <Select
                    id="countries"
                    name="countries"
                    options={options}
                    label="Data"
                    onChange={(e) => console.log(e.target.value)}
                />

            </div>
            <div className=" flex flex-wrap justify-start  w-full  ">
                <CardAction description="adsfafadsfadsfdaiojfoiajfoiajoifafasdfjaisojfoiajfoiajfoiajoifjaoifjaoijfoiajd" />
                <CardAction titleButton="inscrever-se" />
                <CardAction description="adsfauhasudhfdfuahfuaihi" />
                <CardAction endDate="okokokokok" />
                <CardAction endDate="okokokokok" />

            </div>

        </div>

    )
}