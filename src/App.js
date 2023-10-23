import './App.css';
import { useState } from 'react';
import Code from './components/Code';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import * as qs from 'qs'
import axios from 'axios';

const languageCode = {
  "Java": "java",
  "Python": "py",
  "C": "c",
  "C++": "cpp",
  "NodeJs": "js",
  "C#": "cs",
  "GoLang": "go",
}

// const themeCode = {
//   "dark": "vs-dark",
//   "light": 'vs',
//   "hc-black":'hc-black',
//   "hc-light":"hc-light"
// }

function App() {

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('Java');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  
  const setThemeHandler = (themeVal)=>{
    setTheme(themeVal);
  }
  
  const setLanguageHandler = (lang)=>{
    setLanguage(lang);
  }

  const inputChangeHandler = (val)=>{
    setInput(val);
    console.log("Executed " + val);
  }
  
  const fetchData = async (code) => {
    console.log(code)
    console.log(languageCode[language])
    var data = qs.stringify({
        'code': code,
        'language': languageCode[language],
        'input': input
    });
    var config = {
        method: 'post',
        url: 'https://api.codex.jaagrav.in',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };

    axios(config)
      .then(function (response) {
        const outputData = response.data
        console.log(JSON.stringify(response.data));
        console.log(outputData.output);

        if(outputData.error !== ""){
          setOutput(outputData.error);
        }
        else{
          setOutput(outputData.output)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const submitCodeHandler = (code) => {
    fetchData(code);
  }

  return (
    <>
      <Header theme={theme} setThemeHandler={setThemeHandler} setLanguageHandler={setLanguageHandler} />
      
      <div className={`container + ${theme}`}>
        <div className='col'>
          <Code submitCodeHandler={submitCodeHandler} theme={theme} language={languageCode[language]} />
        </div>
        <div className='col'>
          <Input theme={theme} inputChangeHandler={inputChangeHandler} />
          <Output theme={theme} output={output} />
        </div>
      </div>
    </>
  );
}

export default App;
