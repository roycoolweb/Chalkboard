import React from 'react'

export default function CreateChalkboard() {
    return (
        <div className='container'>
            <h1>Chalkboard</h1>
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
                <button className='btn btn-primary btn-lg mt-1'>
                    Add Chalkboard
                </button>
            </form>
            
        </div>
    )
}