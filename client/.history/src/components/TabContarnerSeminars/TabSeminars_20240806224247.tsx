
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
                <PopoverTrigger className="bg-white border-green-400 border">
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
                        className=""
                        classNames={{
                            // months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                            month: 'space-y-1',
                            caption_label: 'text-sm font-medium',
                            //nav: 'space-x-0 items-center',
                            selected: 'bg-gray-200 rounded',
                            chevron: 'fill-gray-500',
                            day: 'text-gray-700',
                            today: 'text-green-800 font-bold bg-green-100 rounded'
                        }}
                        onSelect={setDate}
                        footer={
                            date ? `Dia Selecionado: ${date.toLocaleDateString()}` : "Pick a day."
                        }
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
