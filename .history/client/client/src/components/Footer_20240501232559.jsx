import React from "react";

const Footer = () => {
    const handle = () => {
        console.log('handle')
    }
    return (
        <>
            <footer class="bg-white rounded-sm shadow dark:bg-gray-800  bottom-0 w-full ">
                <div class="w-full max-w-screen-xl mx-auto p-2 md:py-4">
                    <div class="sm:flex sm:items-center sm:justify-between  ">
                        <a href="https://flowbite.com/" class="flex items-center mb-1 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 h-1 p-0">
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6" onClick={handle}>Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-0 ">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )

}

export default Footer;