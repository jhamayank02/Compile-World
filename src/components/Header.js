import '../css/Header.css';

function Header(props) {

    const {theme, setThemeHandler, setLanguageHandler} = props;

    const themeChangeHandler = ()=>{
        const themes = document.getElementById('themes');
        setThemeHandler(themes.value);
    }

    const languageChangeHandler = ()=>{
        const language = document.getElementById('language');
        setLanguageHandler(language.value);
    }

  return (
    <div className={`header + ${theme}`}>
        <div className='logo'>Compile World</div>

        <div>
          <select className={theme} id='themes' onChange={themeChangeHandler}>
            <option>vs</option>
            <option>vs-dark</option>
            <option>hc-black</option>
            <option>hc-light</option>
          </select>
          <select className={theme} id='language' onChange={languageChangeHandler}>
            <option>Java</option>
            <option>Python</option>
            <option>C</option>
            <option>C++</option>
            <option>GoLang</option>
            <option>C#</option>
            <option>NodeJs</option>
          </select>
        </div>
        
    </div>
  )
}

export default Header;