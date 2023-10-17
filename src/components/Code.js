import { useState } from 'react';
import '../css/Code.css';

function Code(props) {

    const [code, setCode] = useState('');

    const codeChangeHandler = (e) => {
        setCode(e.target.value);
    }

    const runCodeHandler = ()=>{
        props.submitCodeHandler(code);
    }

  return (
    <div className='code-container'>
        <div className='heading'>Code</div>

        <div className='code-area'>
            <textarea onChange={(e) => codeChangeHandler(e)} placeholder='// Write your code here'></textarea>
        </div>

        <div className='actions'>
            <button className='btn' onClick={runCodeHandler}>Run Code</button>
        </div>

    </div>
  )
}

export default Code