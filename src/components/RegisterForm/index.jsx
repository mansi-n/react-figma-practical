import { Form, Image, Input, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import BaseButton from '../Button';
import GoogleIcon from '../../assets/images/Google.svg'
const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <div className='box'>
      <h3>Sign Up to your account</h3>
      <Form>
        <Form.Item name='useremail' className='user-input'>
          <Input type='email' placeholder='Your email'/>
        </Form.Item>
        <Form.Item name='username' className='user-input'>
          <Input placeholder='Your name'/>
        </Form.Item>
        <Form.Item name='userpassword' className='user-input'>
          <Input type='password' placeholder='Create Password'/>
        </Form.Item>
        <BaseButton type='primary' value='Register' onClick={() => navigate('/dashboard')}/>
        <Typography className='typo-text'>OR</Typography>
        <BaseButton type='default' icon={<Image src={GoogleIcon}/>} value='Continue with Google'/>
        <Link to={'/signin'}>Already have an Square account? Log in</Link>
      </Form>
    </div>
  )
}

export default RegisterForm;