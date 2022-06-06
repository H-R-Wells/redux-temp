import React from 'react'





const Navbar = () => {
    return (
        <div className={` bg-gray-800  transition  ease-in-out duration-500 sticky top-0 z-50`}>
            <nav id="navb">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">







                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 ring-gray-500 ring-inset outline-none ring-1 "
                                aria-controls="mobile-menu"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>


                                {/*Icon when menu is closed. */}
                                <svg
                                    className={` h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                {/*Icon when menu is open. */}
                                <svg
                                    className={` h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>






                        {/* Nav tabs */}
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <button type='button'
                                        className={`text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                        Redux-temp
                                    </button>

                                    <button type='button'
                                        className={`text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                        About
                                    </button>

                                    <button type='button'
                                        className={`text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                        Projects
                                    </button>

                                    <button type='button'
                                        className={`text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                        Calendar
                                    </button>
                                </div>
                            </div>
                        </div>







                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <button className="cursor-default bg-blue-700 text-2xl text-gray-50 font-semibold mr-2 px-2.5 py-0.5 rounded ">₹ 10000</button>



                        </div>
                    </div>
                </div>






                {/* Mobile menu, show/hide based on menu state.  */}
                <div className={`sm:hidden   `} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            href="/"
                            className={` block border-2 transition  ease-in-out duration-500  px-3 py-2 rounded-md text-base font-medium`}
                            aria-current="page">
                            Text Control
                        </a>

                        <a href="/"
                            className={` block px-3 py-2 rounded-md text-base border-2 border-gray-400 font-medium`}>
                            About
                        </a>

                        <a href="/"
                            className={` block px-3 py-2 rounded-md text-base border-2 border-gray-400 font-medium`}>
                            Projects
                        </a>

                        <a href="/"
                            className={` block px-3 py-2 rounded-md text-base border-2 border-gray-400 font-medium`}>
                            Calender
                        </a>

                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar