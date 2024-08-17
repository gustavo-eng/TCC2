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
    label?:string;
    isOptional?: boolean;
    className?:string;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>> | undefined;
}


const DatePickerSingle: React.FC<CalendarPopoverProps> = ({
    date,
    setDate,
    className,
    label,
    isOptional = true
}) => {
    return (
        <div className={twMerge("", className)}>
            <Popover>
                <PopoverTrigger className="bg-white flex flex-col">
                    {label && (
                        <label  className="block mb-0 text-sm font-medium text-gray-600">
                            {label} {isOptional && <span className="text-red-600"> *</span>}
                        </label>
                    )}
                    <Button
                        variant={"outline"}
                        className={twMerge(
                            "w-[160px] justify-start text-left font-normal rounded h-[35px] border-gray-500 hover:border-green-600 ",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 ml-0 h-4 w-4" />
                        {date ? <div>{date.toLocaleDateString()}</div> : <span>{new Date().toLocaleDateString() || 'Select a date'}</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-fit bg-white border-green-700">
                    <DayPicker
                        mode="single"
                        selected={date}
                        className="bg-white"
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
        </div>
    )
}

export default DatePickerSingle;


//DatePickerSingle