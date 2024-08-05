

export default function FileInput() {

    return (
        <div>
            <form action=""
                className="bg-gray-200 flex flex-col justify-center items-center h-[175px] rounded-md border-2 border-dashed border-green-700">
                <input type="file" accept="image/*" />

            </form>
        </div>
    )

}