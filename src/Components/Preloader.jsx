import React, {useState, useEffect} from 'react';

const text = `
export default function App() { 
    
    const [hello, setHello] = useState(true)
    const [isDisciplined, setIsDisciplined] = useState(true)
    
    function hireMeBtn() {
        const newEmployee = []
        for(let i = 0; i < 10; i++) {
            const men = {
                value: randomMan(),
                id: i + 1
            }
            employees.push(newEmployee)
        }
    }

    function shouldWeHireHim() {
        hello && isDisciplined ?
            hireMeBtn() :
            giveHimAChance()
            
    }
    
    return (
        <div>
            <div>
                <h1>Hello World</h1>
            </div>
        </div>
    )
}`;

export default function Preloader(props) {
    const [typeText, setTypeText] = useState('')

    function randomLetterQntty() {
        const intArr = [13, 10, 50, 5, 3, 70, 8, 30]
        const randomize = Math.floor(Math.random() * intArr.length)
        return intArr[randomize]
    }
    
    function randomTiming() {
        const timingArr = [100, 30, 10, 50, 300, 200]
        const randomizeTimingArr = Math.floor(Math.random() * timingArr.length)
        return timingArr[randomizeTimingArr]
    }
    
    function skip() {
        props.loading()
        window.scrollTo(0,0)
    }
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTypeText(text.slice(0, typeText.length + randomLetterQntty()))
        }, randomTiming())
        
        if (typeText.endsWith('}')) {
            setTimeout(() => props.loading(), 500)
        }

        return () => {
            clearTimeout(timeout)
            window.scrollTo(0,0)
        }
        
    }, [typeText])

    return (
        <div className='preloader' onClick={() => skip()}>
            <pre>{`import React, {useState} from 'react';
import Header from './Component/Header'
import Main from './Component/Main'`}</pre>
            <pre className="preLoaderCode">{typeText}</pre>
        </div>
    )
}