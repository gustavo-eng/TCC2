
import "react-day-picker/style.css";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../lib/ui/popover";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/shadcnUtils";
import { Button } from "../../lib/ui/button";

export default function TabSeminars() {
    const [date, setDate] = React.useState<Date>()

    return (
        <div className="">
            <Popover>
                <PopoverTrigger >
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
                <PopoverContent>

                </PopoverContent>
            </Popover>
        </div>
    )
}