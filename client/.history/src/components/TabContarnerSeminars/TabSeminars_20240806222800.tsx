
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

import { getDefaultClassNames } from "react-day-picker"
import { cn } from "../../lib/shadcnUtils"
import { Button } from "../../lib/ui/button"
export default function TabSeminars() {
    const [date, setDate] = React.useState<Date>()
    const defaultClassNames = getDefaultClassNames();
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
                <PopoverContent className="w-fit">
                    <DayPicker
                        mode="single"
                        selected={date}
                        classNames={{
                            today: `border-amber-500`, // Add a border to today's date
                            selected: `bg-amber-500 border-amber-500 text-white`, // Highlight the selected day
                            root: `${defaultClassNames.root} shadow-lg p-50`, // Add a shadow to the root element
                            chevron: `${defaultClassNames.chevron} fill-amber-100` // Change the color of the chevron
                        }}
                        onSelect={setDate}
                        footer={
                            date ? `Selecionado: ${date.toLocaleDateString()}` : "Pick a day."
                        }
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
