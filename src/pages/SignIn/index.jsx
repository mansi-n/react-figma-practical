import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo"
import './signin.scss'
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import whiteDotIcon from '../../assets/images/WhiteOval.svg'

const SignIn = () => {
  return (
    <div className="signInWrapper">
        <Logo />
        <LoginForm />
          <Link className="terms">Privacy Policy <Image src={whiteDotIcon} /> Terms of use</Link>
    </div>
  )
}

export default SignIn;