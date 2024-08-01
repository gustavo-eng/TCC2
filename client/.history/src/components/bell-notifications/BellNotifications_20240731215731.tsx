import { useState } from "react";

export default function BellNotifications() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="text-white mr-1">
            <button
                id="dropdownNotificationButton"
                data-dropdown-toggle="dropdownNotification"
                className="relative flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                type="button"
                onClick={toggleDropdown}
            >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 20"
                >
                    <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                </svg>

                <div className="absolute  w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 left-2.5 dark:border-gray-900"></div>
            </button>

            <div
                id="dropdownNotification"
                className={`z-20 ${isOpen ? 'block' : 'hidden'}  absolute    bg-white divide-y  rounded-lg mr-3 dark:bg-gray-800 dark:divide-gray-700`}
                aria-labelledby="dropdownNotificationButton"
            >
                <div className="block px-1 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                    Notifications
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0 relative">
                            <img
                                className="rounded-full w-11 h-11"
                                src="/docs/images/people/profile-picture-1.jpg"
                                alt="Jese"
                            />
                            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                <svg
                                    className="w-2 h-2 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                    <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full pl-3">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                New message from
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Jese Leos
                                </span>
                                : "Hey, what's up? All set for the presentation?"
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">
                                a few moments ago
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0 relative">
                            <img
                                className="rounded-full w-11 h-11"
                                src="/docs/images/people/profile-picture-2.jpg"
                                alt="Joseph"
                            />
                            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
                                <svg
                                    className="w-2 h-2 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full pl-3">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Joseph Mcfall
                                </span>{' '}
                                and{' '}
                                <span className="font-medium text-gray-900 dark:text-white">
                                    5 others
                                </span>{' '}
                                started following you.
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">
                                10 minutes ago
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0 relative">
                            <img
                                className="rounded-full w-11 h-11"
                                src="/docs/images/people/profile-picture-3.jpg"
                                alt="Bonnie"
                            />
                            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
                                <svg
                                    className="w-2 h-2 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Zm-.82 6.867L10 16.05 2.873 8.92a5.078 5.078 0 0 1-1.661-3.466A4.209 4.209 0 0 1 2.823 2.5a4.417 4.417 0 0 1 3.268 1.525 7.482 7.482 0 0 0 1.12 1.153l.562.474.612-.407a7.415 7.415 0 0 1 1.2-.7A4.359 4.359 0 0 1 13.963 4.2c1.815 0 3.158 1.439 3.158 3.333a5.605 5.605 0 0 1-1.994 3.387Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full pl-3">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Bonnie Green
                                </span>{' '}
                                liked your photo.
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">
                                44 minutes ago
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0 relative">
                            <img
                                className="rounded-full w-11 h-11"
                                src="/docs/images/people/profile-picture-4.jpg"
                                alt="Leslie"
                            />
                            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800">
                                <svg
                                    className="w-2 h-2 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M18 10.55a7.9 7.9 0 0 1-3.737 6.847c-.542.337-.922.903-.972 1.551l-.203 2.485a.75.75 0 0 1-1.496-.122l-.203-2.485a1.992 1.992 0 0 0-.973-1.551 7.9 7.9 0 0 1-3.737-6.847V8a3.982 3.982 0 0 0 1.138-7.765.75.75 0 1 1-.276-1.478A5.49 5.49 0 0 1 18 5.49v5.06ZM3.276 8A3.982 3.982 0 0 0 4 13.95v1.05a3.982 3.982 0 0 0 1.138 7.765.75.75 0 1 1-.276 1.478A5.49 5.49 0 0 1 1 15.95V8.22a.75.75 0 0 1 1.5 0V8Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full pl-3">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Leslie Livingston
                                </span>{' '}
                                mentioned you in a comment: "Awesome work!"
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">
                                1 hour ago
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex-shrink-0 relative">
                            <img
                                className="rounded-full w-11 h-11"
                                src="/docs/images/people/profile-picture-5.jpg"
                                alt="Robert"
                            />
                            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-yellow-400 border border-white rounded-full dark:border-gray-800">
                                <svg
                                    className="w-2 h-2 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M7.5 13.25a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5ZM6 15h3a6 6 0 0 1 6 6v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a6 6 0 0 1 6-6Zm8.188-9.813A4.25 4.25 0 1 0 13 9.5a4.25 4.25 0 0 0 1.188-4.313ZM14 15.75h-1.5c-.345 0-.675.03-1 .086a6.5 6.5 0 0 1 4.71 4.714c.056-.326.086-.656.086-1.014v-.5a6 6 0 0 0-6-6Zm.5 8.25h4.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full pl-3">
                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Robert Brown
                                </span>{' '}
                                posted a new comment on your status.
                            </div>
                            <div className="text-xs text-blue-600 dark:text-blue-500">
                                3 hours ago
                            </div>
                        </div>
                    </a>
                </div>
                <a
                    href="#"
                    className="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white rounded-b-lg"
                >
                    <div className="inline-flex items-center ">
                        <svg
                            className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 9h4m-2 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM8 5h.01M12 5h.01M9 12h2"
                            />
                        </svg>
                        View all
                    </div>
                </a>
            </div>
        </div>
    );
}
