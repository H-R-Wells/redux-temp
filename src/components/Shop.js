import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney, depositeMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <>
            <h1 className=' text-2xl text-center font-semibold'>Deposite/Withdraw Money</h1>
            <div className='flex justify-center min-w-full container my-9'>
                <button onClick={()=>withdrawMoney(100)} className=' inline-block px-6 py-1 bg-blue-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>-</button>

                <h1 className='text-2xl font-semibold mx-2'>Bank balance</h1>

                <button onClick={()=>depositeMoney(100)} className=' inline-block px-6 py-1 bg-blue-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>+</button>
            </div>
        </>
    )
}

export default Shop