
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
                <PopoverContent className="w-fit">
                    <DayPicker
                        mode="single"
                        selected={date}
                        className=""
                        classNames={{
                            months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                            month: 'space-y-4',
                            caption: 'flex justify-center pt-1 relative items-center',
                            caption_label: 'text-sm font-medium',
                            //nav: 'space-x-0 items-center',
                            nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                            nav_button_previous: 'absolute left-1',
                            nav_button_next: 'absolute right-1',
                            table: 'bg-white dark:bg-bgDark w-full border-collapse space-y-1',
                            head_row: 'flex',
                            head_cell:
                                'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
                            row: 'flex w-full mt-2',
                            cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                            day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
                            day_range_end: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
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
