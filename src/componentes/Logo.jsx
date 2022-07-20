import logo from '../imagenes/logo.png';

const Logo = (props) => (
    <div className={props.css + '-contenedor'}>!!!
    <img src={logo} className={props.css} alt={props.alt} />
  </div>);

export default Logo;