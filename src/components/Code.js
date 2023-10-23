import { useState } from 'react';
import language from 'react-syntax-highlighter/dist/esm/languages/hljs/1c';
import '../css/Code.css';
import CodeBlock from './CodeBlock';

function Code(props) {

    const {theme, language, submitCodeHandler} = props;

    const [code, setCode] = useState('// Start writing your code');

    const codeChangeHandler = (value) => {
        console.log("Code " + code)
        setCode(value);
        console.log("Code " + code)
    }

    const runCodeHandler = ()=>{
        submitCodeHandler(code);
    }

  return (
    <div className='code-container'>
        <div className='heading'>Code</div>

        <div className='code-area'>
            <CodeBlock code={code} codeChangeHandler={codeChangeHandler} language={language} theme={theme} />
        </div>

        <div className='actions'>
            <button className="run-btn" onClick={runCodeHandler}>Run Code</button>
            <button className="clear-btn" onClick={()=>codeChangeHandler("")}>Clear</button>
        </div>

    </div>
  )
}

export default Code