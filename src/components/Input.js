import '../css/Input.css';

function Input() {
  return (
    <div className='input-container'>
        <div className='heading'>Input</div>

        <div className='input-area'>
            <textarea placeholder='Input...'></textarea>
        </div>
    </div>
  )
}

export default Input