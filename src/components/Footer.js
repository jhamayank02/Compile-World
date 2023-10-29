import '../css/Footer.css';

function Footer(props) {

    const theme = props.theme;

  return (
    <div className={`footer + ${theme}`}>
        <div>Special thanks to <a target='_blank' href='https://github.com/Jaagrav'>Jaagrav</a> for providing the CodeX API. <a target='_blank' href=' https://github.com/Jaagrav/CodeX-API'>Github link</a></div></div>
  )
}

export default Footer