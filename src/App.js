import './App.css';
import { useState } from 'react';
import Code from './components/Code';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';

function App() {

  const [theme, setTheme] = useState('dark');
  
  const setThemeHandler = (themeVal)=>{
    setTheme(themeVal);
  }
  console.log("Theme set to " + theme);

  const submitCodeHandler = (code) => {
    console.log("Code submitted " + code)
  }


  return (
    <>
      <Header theme={theme} setThemeHandler={setThemeHandler} />
      
      <div className="container" style={{backgroundColor: theme === 'light' ? 'white':'black',color: theme === 'light' ? 'black':'white'}}>
        <div className='col'>
          <Code submitCodeHandler={submitCodeHandler} />
        </div>
        <div className='col'>
          <Input />
          <Output />
        </div>
      </div>
    </>
  );
}

export default App;
