import '../css/Input.css';

function Input(props) {

  const setInputHandler = ()=>{
    const input = document.getElementById('input');
    props.inputChangeHandler(input.value);
  }

  return (
    <div className='input-container'>
        <div className='heading'>Input</div>

        <div className='input-area'>
            <textarea id='input' className={props.theme} onChange={setInputHandler} placeholder='Input...'></textarea>
        </div>
    </div>
  )
}

export default Input