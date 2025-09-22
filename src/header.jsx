import HeaderNav from './HeaderNav';
import './index.css'
function Header(props) {
  return (
    <header>
        
       <h1 className="title">{props.title}</h1>
      
      
      <HeaderNav/>
    </header>
    
  );
}

export default Header;
