
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../lib/ui/popover"

export default function TabSeminars() {


    return (
        <div className="">
            <Popover>
                <PopoverTrigger >
                    popOver
                </PopoverTrigger>
                <PopoverContent>
                    content
                </PopoverContent>
            </Popover>
        </div>
    )
}