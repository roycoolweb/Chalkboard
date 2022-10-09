import React from 'react'
import { Link } from 'react-router-dom'
import Pic1 from '../assets/pic1.png';

export default function Gallery() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <h1>Gallery</h1>
                <Link to='/create' className='btn btn-success'>Create NFT</Link>
            </div>
            
            <div className='row'>
                <div className='col-6'>
                    <div className='card'>
                        <div className='row g-0'>
                            <div className='col-6'>
                                <img src={Pic1} className='card-img-top mb-2' />
                            </div>
                            <div className='col-6'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Chalkboard #1</h5>
                                    <p className='card-text'>Chalkboard</p>
                                    <div className='d-grid gap-2'>
                                        <Link to='/chalkboard' className='btn btn-primary btn-block'>View</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}