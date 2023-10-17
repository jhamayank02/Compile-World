import '../css/Header.css';

function Header(props) {

    const {theme, setThemeHandler} = props;

    const themeChangeHandler = ()=>{
        const themes = document.getElementById('themes');
        console.log("SElected " + themes.value)
        setThemeHandler(themes.value);
    }

  return (
    <div className='header'>
        <div className='logo'>Online Compiler</div>

        <select id='themes' onChange={themeChangeHandler}>
            <option>Light</option>
            <option>Dark</option>
        </select>
    </div>
  )
}

export default Header;