import { Form, Image, Input, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import BaseButton from '../Button';
import GoogleIcon from '../../assets/images/Google.svg'
import FbIcon from '../../assets/images/Fb.svg'
import dotIcon from '../../assets/images/Oval.svg'

const LoginForm = () => {
  // const history = useHistory();
const navigate = useNavigate();

  return (
    <div className='box'>
      <h3>Login to your account</h3>
      <Form>
        <Form.Item name='useremail' className='user-input'>
          <Input placeholder='Your email'/>
        </Form.Item>
        <BaseButton type='primary' value='Continue' onClick={() => navigate('/dashboard')}/>
        <Typography className='typo-text'>OR</Typography>
        <BaseButton type='default' icon={<Image src={GoogleIcon}/>} value='Continue with Google'/>
        <BaseButton type='default' icon={<Image src={FbIcon}/>} value='Continue with facebook'/>
        <Link to='/register'>Can&lsquo;t login? <Image src={dotIcon}/> Sign up for new user?</Link>
      </Form>
    </div>
  )
}

export default LoginForm;