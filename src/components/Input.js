import { useRef } from 'react';
import '../css/Input.css';

function Input(props) {

  const {input, inputChangeHandler} = props;

  const inputRef = useRef();

  const setInputHandler = ()=>{
    inputChangeHandler(inputRef.current.value);
  }

  return (
    <div className='input-container'>
        <div className='heading'>Input</div>

        <div className='input-area'>
            <textarea id='input-elem' ref={inputRef} className={props.theme} onChange={setInputHandler} placeholder='Input...' value={input}></textarea>
        </div>
    </div>
  )
}

export default Input