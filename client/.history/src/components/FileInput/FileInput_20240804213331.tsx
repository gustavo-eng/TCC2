

interface FileInputProps {
    label?: string;
}

export default function FileInput({ label }: FileInputProps) {

    return (
        <div>
            {label && <label htmlFor="">fadsf</label>}
            <form action=""
                className="bg-gray-200 flex flex-col justify-center items-center h-[200px] rounded-md border-2 border-dashed border-green-700">
                <input type="file" accept="image/*" />

            </form>
        </div>
    )

}