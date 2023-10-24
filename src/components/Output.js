import '../css/Output.css';

function Output(props) {

  const {output, error, theme} = props;

  return (
    <div className="output-container">
        <div className='heading'>Output</div>
        
        <div className='output-area'>
            <textarea className={theme + (error ? " error" : "")} disabled={true} value={output} placeholder='Output...'>
            </textarea>
        </div>
    </div>
  )
}

export default Output