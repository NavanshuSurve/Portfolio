import HeaderNav from './HeaderNav';

function Header(props) {
  return (
    <header>
        
       <h1 className="title">{props.title}</h1>
      
      <hr />
      <HeaderNav/>
    </header>
    
  );
}

export default Header;
