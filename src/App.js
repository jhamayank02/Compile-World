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
  "Python": "python",
  "C": "c",
  "C++": "cpp",
  "NodeJs": "js",
  "C#": "cs",
  "GoLang": "go",
}

function App() {

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('Java');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const setThemeHandler = (themeVal)=>{
    setTheme(themeVal);
  }
  
  const setLanguageHandler = (lang)=>{
    setLanguage(lang);
  }

  const inputChangeHandler = (val)=>{
    setInput(val);
  }
  
  const outputChangeHandler = (val)=>{
    setOutput(val);
  }
  
  const fetchData = async (code) => {
    setLoading(true);
    var data = qs.stringify({
        'code': code,
        'language': language === 'Python' ? 'py' : languageCode[language],
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

        if(outputData.error !== ""){
          setOutput(outputData.error);
          setError(true);
        }
        else{
          setOutput(outputData.output)
          setError(false);
        }
        setLoading(false);
      })
      .catch(function (error) {
        setOutput(error.response.data.error);
        setError(true);
        setLoading(false);
      });
  }

  const submitCodeHandler = (code) => {
    if(code === ''){
      setLoading(true);
      setOutput('Code not found');
      setError(true);
      setLoading(false);
      return;
    }
    
    fetchData(code);
  }

  return (
    <>
      <Header theme={theme} setThemeHandler={setThemeHandler} setLanguageHandler={setLanguageHandler} />
      
      <div className={`container + ${theme}`}>
        <div className='col'>
          <Code inputChangeHandler={inputChangeHandler} outputChangeHandler={outputChangeHandler}  setOutput={setOutput} submitCodeHandler={submitCodeHandler} theme={theme} language={languageCode[language]} loading={loading}/>
        </div>
        <div className='col'>
          <Input input={input} theme={theme} inputChangeHandler={inputChangeHandler} />
          <Output theme={theme} output={output} error={error} />
        </div>
      </div>
    </>
  );
}

export default App;
