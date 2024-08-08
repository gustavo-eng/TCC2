
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../lib/ui/popover"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"

import { cn } from "../../lib/shadcnUtils"
import { Button } from "../../lib/ui/button"

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
                <PopoverContent className="bg-red-500">
                    <DayPicker
                        mode="single"
                        selected={date}
                        className="bg-green-300 w-fit"
                        onSelect={setDate}
                        footer={
                            date ? `Selected: ${date.toLocaleDateString()}` : "Pick a day."
                        }
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
/*
  <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
*/