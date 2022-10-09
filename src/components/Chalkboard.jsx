import React from 'react'
import { Link } from 'react-router-dom'
import { ethers } from "ethers";
import Pic1 from '../assets/pic1.png'

export default function Chalkboard() {
    const get_ens = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const resolver = await provider.getResolver('alice.eth')
        console.log(resolver)
        const avatar = await resolver.getText("avatar")
        console.log(avatar)
    } 
    return (
        <div className='container'>
            <Link to='/gallery' className='btn btn-danger mt-2'>Back</Link>
            <h1 className='mt-4'>Chalkboard #1</h1>
            <img src={Pic1} className='img-width' />
            <p className='display-6 mt-2'>Price: 0.01 ETH</p>
            <button className='btn btn-primary btn-lg mt-1'>
                Buy Chalkboard
            </button>
        </div>
    )
}