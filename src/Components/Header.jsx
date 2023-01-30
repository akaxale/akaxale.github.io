import React from 'react';
import Navbar from './Navbar';
import resume from '../resume.pdf'

export default function Header() {
    return (
        <header id='home'>
            <Navbar />
            <div className='banner'>
                <div className='bannerText'>
                    <h2 className='greeting'>
                        Hey! I'm <span className='important'>Alex</span>
                    </h2>
                    <h2 className='greeting'>And I am a <span className='important'>Front-End</span></h2>
                    <h2 className='greeting important'>Developer</h2>
                    <a href={resume} target="_blank">
                        <button className='cvBtn'>
                            RESUME
                        </button>
                    </a>
                </div>
            </div>
            
            <div>
                <p className='codeNums n1'>1001110110001101</p>
                <p className='codeNums n2'>1010110110010</p>
                <p className='codeNums n3'>01011011101100101110</p>
                <p className='codeNums n4'>1011101101001</p>
                <p className='codeNums n5'>0101110110010101</p>
                <p className='codeNums n6'>1001110110001</p>
                <p className='codeNums n7'>1010010110010101</p>
                <p className='codeNums n8'>001101001010001</p>
                <p className='codeNums n9'>1110011011001011</p>    
            </div>
            
            <div>
                <div className='light l1'></div>
                <div className='light l2'></div>
                <div className='light l3'></div>
                <div className='light l4'></div>
                <div className='light l5'></div>
                <div className='light l6'></div>
                <div className='light l7'></div>
                <div className='light l8'></div>
                <div className='light l9'></div>       
            </div>
        </header>
    )
}