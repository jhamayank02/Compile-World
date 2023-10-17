import '../css/Output.css';

function Output() {
  return (
    <div className='output-container'>
        <div className='heading'>Output</div>
        
        <div className='output-area'>
            <textarea disabled={true} placeholder='Output...'></textarea>
        </div>
    </div>
  )
}

export default Output