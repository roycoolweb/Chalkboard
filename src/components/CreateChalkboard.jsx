import React from 'react'
import { Link } from 'react-router-dom'
import { WorldIDWidget } from '@worldcoin/id'

export default function CreateChalkboard() {
    return (
        <div className='container'>
            <Link to='/gallery' className='btn btn-danger mt-2'>Back</Link>
            <h1 className='mt-4'>Chalkboard</h1>
            <form className='form-width'>
                <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="summary" className="col-sm-2 col-form-label">Summary</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="summary" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="ImageURL" className="col-sm-2 col-form-label">Image URL</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="ImageURL" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="price" className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="price" />
                    </div>
                </div>
                <WorldIDWidget
                    actionId=""
                    signal="my_signal"
                    enableTelemetry
                    onSuccess={(verificationResponse) => console.log(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
                    onError={(error) => console.error(error)}
                />
                <button className='btn btn-primary btn-lg mt-1'>
                    Add Chalkboard
                </button>
            </form>
            
        </div>
    )
}