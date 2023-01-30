import React from 'react';
import htmlLogo from '../images/htmlLogo.png';
import cssLogo1 from '../images/cssLogo1.png';
import jsLogo from '../images/jsLogo.png';
import reactLogo from '../images/reactLogo.png';

export default function Skills() {
    return (
        <section className='skills section' id='skills'>
            <h2 className=' tag'>&lt;Skills&gt;</h2>
            <div className='skillsList'>

                <div className='logoDiv htmlDiv'>
                    <img src={htmlLogo} className='progLogo html' />
                    <p className='htmlP'>&lt;HTML /&gt;</p>
                </div>

                <div className='logoDiv cssDiv'>
                    <img src={cssLogo1} className='progLogo css' />
                    <div className='cssP'>
                        <p className='c'>C</p>
                        <p className='s'>S</p>
                        <p className='s2'>S</p>
                    </div>
                </div>

                <div className='logoDiv jsDiv'>
                    <img src={jsLogo} className='progLogo js' />
                    <div className="jsP">
                        <p className='afterS'>Java</p>
                        <p>cript</p>

                    </div>
                </div>

                <div className='logoDiv reactDiv'>
                    <img src={reactLogo} className='progLogo react' />
                    <p className='reactP'>REACT</p>
                </div>
                
            </div>
            <h2 className='tag'>&lt;/Skills&gt;</h2>
        </section>
    )
}