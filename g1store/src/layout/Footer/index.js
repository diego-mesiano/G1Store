import './style.scss';
import logo from '../../assets/img/logo.png'

function Footer() {
  return (
    <>
      <footer>
        <h1><img src={logo}alt="Logo" width="150"/></h1>
        <h6>©Copyright 2021 g1.store - All Rights Reserved </h6>
      </footer>
    </>
  );
}

export default Footer;
