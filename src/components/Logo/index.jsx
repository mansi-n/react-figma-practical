import { Image } from "antd";

import LogoIcon from '../../assets/images/Logo.svg'

import './logo.scss'
const Logo = () => {
  return (
      <Image src={LogoIcon} alt="Logo" />
  );
  };

export default Logo;