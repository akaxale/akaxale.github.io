import React from 'react';
import quiz from '../images/quiz.jpg'
import quizprev from '../images/quiz-prev.jpg'
import todolist from '../images/todolist.jpg'
import todolistprev from '../images/todolist-prev.jpg'

export default function Projects() {
    return (
        <section id='projects' className='projects section'>
            <h2 className='tag'>&lt;Projects&gt;</h2>
            <div className='project-items'>
                <div className='img-block'>
                    <div className='gallery'>
                        <a href='https://akaxale-quiz.netlify.app/' target="_blank">
                            <img className='project-img' src={quizprev} alt='project' />
                        </a>
                        <a href='https://github.com/akaxale/quiz' target="_blank">
                            <img className='project-img' src={quiz} alt='project' />
                        </a>
                    </div>
                    <div className='gallery-bottom'>
                        <h3>
                            <a href="https://akaxale-quiz.netlify.app/" target="_blank">Quiz</a> 
                        </h3>
                    </div>
                </div>
                <div className='img-block'>
                    <div className='gallery'>
                        <a href='https://akaxale-todolist.netlify.app/' target="_blank">
                            <img className='project-img' src={todolistprev} alt='project' />
                        </a>
                        <a href='https://github.com/akaxale/todolist' target="_blank">
                            <img className='project-img' src={todolist} alt='project' />
                        </a>
                    </div>
                    <div className='gallery-bottom'>
                        <h3> 
                            <a href="https://akaxale-todolist.netlify.app/" target="_blank">To Do List</a> 
                        </h3>
                    </div>
                </div>



                <div className="media-img-blocks">
                    <a href='https://akaxale-quiz.netlify.app/' target="_blank"><div className="img1 img"></div></a>
                    <div className='gallery-bottom img-footer'>
                        <h3>
                            <a 
                                href='https://akaxale-quiz.netlify.app/' 
                                target="_blank"
                            >• View Website •</a>
                        </h3>
                        <h3>
                            <a 
                                href='https://github.com/akaxale/quiz' 
                                target="_blank"
                            >• View Code •</a>
                        </h3>
                    </div>
                </div>
                <div className="media-img-blocks">
                    <a href='https://akaxale-todolist.netlify.app/' target="_blank"><div className="img2 img"></div></a>
                    <div className="gallery-bottom img-footer">
                        <h3>
                            <a 
                                href="https://akaxale-todolist.netlify.app/"
                                target="_blank"
                            >• View Website •</a>
                        </h3>
                        <h3>
                            <a 
                                href="https://github.com/akaxale/todolist"
                                target="_blank"
                            >• View Code •</a>
                        </h3>
                    </div>
                </div>
            </div>
            <h2 className='tag'>&lt;/Projects&gt;</h2>
        </section>
    )
}