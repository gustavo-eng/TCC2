
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../lib/ui/popover"

export default function TabSeminars() {


    return (
        <div className="">
            <Popover>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>
        </div>
    )
}