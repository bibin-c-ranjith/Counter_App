import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    //hook to dispatch a function in action
    const dispatch = useDispatch()
    //component can access state by using use selector hook
    const count = useSelector((state)=>(state.counter.value))

  return (
    <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
        <h1 className='text-white' style={{fontSize:'90px'}}>{count}</h1>
        <div className='mt-5'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning p-3'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success p-3 ms-3'>Increment</button>
            
        </div>
    </div>
  )
}

export default Counter
