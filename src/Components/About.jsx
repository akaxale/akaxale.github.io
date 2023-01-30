import React from 'react';
import githubLogo from '../images/githubLogo.png';
import linkedinLogo from '../images/linkedinLogo.png';

export default function About() {
    return (
        <section id='about' className='about section'>
            <h2 className='aboutMeTag1 tag'>&lt;About me&gt;</h2>
            <div className='aboutArticleWrapper'>
                <div className='aboutMeArticle'>
                    <p className='aboutP'>
                    Hello World, my name is Alex!
                    </p>
                    <p className='aboutP'>
                    You can call me webhead, you can call me amazing... 
                    Just don't call me late for dinner.
                    You get it?
                    </p>
                    <p className='aboutP'>
                    I'm 21 years old Front-End Developer from Georgia, Tbilisi.
                    Disciplined, flexible at work and i always try to live in the process of learning new things.
                    Currently, I'm looking for a great opportunity,
                    where I can use my skillset to build customer-focused products on the front end.
                    </p>
                </div>

                <div className="linkLogos">
                    <a href="https://github.com/akaxale" target="_blank">
                        <img className='linkLogo' src={githubLogo} />
                    </a>
                    <a href="https://linkedin.com/in/akaxale" target="_blank">
                        <img className='linkLogo' src={linkedinLogo} />
                    </a>
                </div>
            </div>
            <h2 className='aboutMeTag1 tag'>&lt;/About me&gt;</h2>
        </section>
    )
}