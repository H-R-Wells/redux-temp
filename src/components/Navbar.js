import React from 'react'
import { useSelector } from 'react-redux'





const Navbar = () => {

    const amount = useSelector(state => state.amount)

    return (

        <div className={` bg-gray-800  transition  ease-in-out duration-500 sticky top-0 z-50`}>
            <nav id="navb">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">




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

                            <button className="cursor-default bg-blue-700 text-2xl text-gray-50 font-semibold mr-2 px-2.5 py-0.5 rounded ">₹ {amount}</button>



                        </div>
                    </div>
                </div>





            </nav >
        </div >
    )
}

export default Navbar