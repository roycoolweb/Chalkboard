import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../MainContext'

export default function Landing() {
    const { items, addNumber } = useContext(MainContext)
    return (
        <div className='main'>
            <h1 className='mb-5'>Chalkboard {items}</h1>
            <button onClick={() => addNumber()}>Add</button>
            <div className='card bg-dark card-width'>
                <div className='card-body'>
                    <h5 className='card-title text-white'>Welcome</h5>
                    <p className='card-text text-white'>Connect Wallet to See Chalkboard</p>
                    <div className='d-grid gap-2'>
                        <Link to='/gallery' className='btn btn-primary btn-block'>Connect</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}