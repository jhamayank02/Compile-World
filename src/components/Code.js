import { useState } from 'react';
import '../css/Code.css';
import CodeBlock from './CodeBlock';
import loadingSpinner from '../assets/loading_spinner.gif';

function Code(props) {

    const {loading, theme, language, submitCodeHandler, inputChangeHandler, outputChangeHandler} = props;

    const [code, setCode] = useState('// Start writing your code');

    const codeChangeHandler = (value) => {
        setCode(value);
    }

    const runCodeHandler = ()=>{
        submitCodeHandler(code);
    }

    const clearHandler = ()=>{
        codeChangeHandler('');
        inputChangeHandler('');
        outputChangeHandler('');
    }

  return (
    <div className='code-container'>
        <div className='heading'>Code</div>

        <div className='code-area'>
            <CodeBlock code={code} codeChangeHandler={codeChangeHandler} language={language} theme={theme} />
        </div>

        <div className='actions'>
            {loading && <button className="loading">
                <img src={loadingSpinner}alt='loading'></img>    
            </button>}
            {!loading && <button className="run-btn" onClick={runCodeHandler}>Run Code</button>}
            <button className="clear-btn" onClick={clearHandler}>Clear</button>
        </div>

    </div>
  )
}

export default Code