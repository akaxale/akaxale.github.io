import React, {useState, useEffect} from 'react';

export default function Navbar() {
    
    const [isNavOn, setIsNavOn] = useState(false)
    
    isNavOn ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    
    function navigationMenu() {
        setIsNavOn(!isNavOn)
        document.querySelectorAll('.media-nav-item').forEach(link => {
            link.addEventListener("click", (e) => {
                setIsNavOn(false)
                document.getElementById('active').checked = false
                e.preventDefault()
                setTimeout(() => {
                    const blockID = link.getAttribute('href').substring(1)
                    document.getElementById(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                }, 300)
            })
        })
    }

    return (
        <nav className="navbar">
            <a href='https://akaxale.github.io/' className="logo">Sum Cool Logo*</a>

            <div className="navigation">
                <a 
                    className="navItem"
                    onClick={() => {
                        setIsNavOn(false)
                        document.getElementById('active').checked = false
                        document.getElementById('home').scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                >&lt;Home /&gt;</a>

                <a 
                    className="navItem"
                    onClick={() => {
                        setIsNavOn(false)
                        document.getElementById('active').checked = false
                        document.getElementById('about').scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                >&lt;About me /&gt;</a>
                
                <a
                    className="navItem"
                    onClick={() => {
                        setIsNavOn(false)
                        document.getElementById('active').checked = false
                        document.getElementById('skills').scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                >&lt;Skills /&gt;</a>

                <a 
                    className="navItem"
                    onClick={() => {
                        setIsNavOn(false)
                        document.getElementById('active').checked = false
                        document.getElementById('projects').scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                >&lt;Projects /&gt;</a>
            </div>
             
            <div className='media-navbar'>

                <input type="checkbox" id="active" />

                <label htmlFor="active" className='menu-btn' onClick={() => navigationMenu()}>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </label>

                <div className="wrapper">
                    <ul>
                        <li><a href="#home" className="media-nav-item">&lt;Home /&gt;</a></li>
                        <li><a href="#about" className="media-nav-item">&lt;About me /&gt;</a></li>
                        <li><a href="#skills" className="media-nav-item">&lt;Skills /&gt;</a></li>
                        <li><a href="#projects" className="media-nav-item">&lt;Projects /&gt;</a></li>
                    </ul>
                </div>

            </div>
            
        </nav>
    )
}