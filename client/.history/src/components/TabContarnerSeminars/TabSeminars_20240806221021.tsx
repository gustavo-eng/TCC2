
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover } from "../../lib/ui/popover";



import { useState } from "react";
import { cn } from "../../lib/shadcnUtils";
import { Button } from "../../lib/ui/button";
import { Calendar } from "../../lib/ui/calendar";
import {
    PopoverContent,
    PopoverTrigger,
} from "../../lib/ui/popover";

export default function TabSeminars() {

    const [date, setDate] = useState<Date>()

    return (
        <div className="">
            <Popover >
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="range"
                        selected={date}
                        onSelect={setDate}

                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}