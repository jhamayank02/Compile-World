import '../css/Output.css';

function Output(props) {
  return (
    <div className="output-container">
        <div className='heading'>Output</div>
        
        <div className='output-area'>
            <textarea className={props.theme} disabled={true} value={props.output} placeholder='Output...'>
            </textarea>
        </div>
    </div>
  )
}

export default Output