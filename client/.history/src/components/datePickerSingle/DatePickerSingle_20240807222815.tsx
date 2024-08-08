import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import { twMerge } from "tailwind-merge"
import { Button } from "../../lib/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../lib/ui/popover"

interface CalendarPopoverProps {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>> | undefined;
}

const DatePickerSingle: React.FC<CalendarPopoverProps> = ({ date, setDate }) => {
    return (
        <Popover>
            <PopoverTrigger className="bg-white">
                <Button
                    variant={"outline"}
                    className={twMerge(
                        "w-[160px] justify-start text-left font-normal rounded h-[37px]",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 ml-0 h-4 w-4" />
                    {date ? <div>{date.toLocaleDateString()}</div> : <span>{new Date().toLocaleDateString() || 'Select a date'}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit">
                <DayPicker
                    mode="single"
                    selected={date}
                    className="bg-red-400"
                    classNames={{
                        month: 'space-y-1',
                        caption_label: 'text-sm font-medium',
                        selected: 'bg-gray-200 rounded',
                        chevron: 'fill-gray-500',
                        day: 'text-gray-700',
                        today: 'text-green-800 font-bold bg-green-100 rounded',

                    }}
                    onSelect={setDate}
                    footer={
                        date ? `Dia Selecionado: ${date.toLocaleDateString() || 'dd/mm/yyyy '}` : "Escolha um dia"
                    }

                />
            </PopoverContent>
        </Popover>
    )
}

export default DatePickerSingle;


//DatePickerSingle