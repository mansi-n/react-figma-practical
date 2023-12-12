import RegisterForm from "../../components/RegisterForm";
import Logo from "../../components/Logo"
// import './signin.scss'
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import whiteDotIcon from '../../assets/images/WhiteOval.svg'

const Register = () => {
  return (
    <div className="signInWrapper">
        <Logo />
        <RegisterForm />
        <Link className="terms">Privacy Policy <Image src={whiteDotIcon} /> Terms of use</Link>
    </div>
  )
}

export default Register;