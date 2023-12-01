import './App.css';
import { useState } from 'react';
import Code from './components/Code';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Footer from './components/Footer';

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

    fetch('https://compileworldbackend.onrender.com/compile', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'code': code,
        'language': language === 'Python' ? 'py' : languageCode[language],
        'input': input
      })})
      .then((res) => {
        if(res.status === 500){
          setOutput("Internal server error");
          setError(true);
          setLoading(false);
        }
        return res.json();
      })
      .then((data) => {
        if(data.error){
          setOutput(data.output);
          setError(true);
          setLoading(false);
        }
        else{
          setOutput(data.output);
          setError(false);
          setLoading(false);
        }
      })
      .catch((err) => {
          setOutput(err);
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
      <Footer theme={theme} />
    </>
  );
}

export default App;
