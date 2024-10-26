import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { useNavigate } from 'react-router-dom';
// Material Icons
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  const handleRegister = async () => {
    return 0
  }

  return (
    <div className='w-full max-w-[240px] flex flex-col items-start justify-center text-[#0074d9] gap-2 auth-container-enter'>
      <p className='font-bold p-2'>Register</p>

      <form onSubmit={(e) => {
        e.preventDefault()
        handleRegister()
      }}
      className='w-full h-auto gap-2 flex flex-col justify-center items-center'>
        <CustomInput 
          id={'email'}
          name={'email'}
          type={'email'}
          value={email}
          icon={<EmailIcon/>}
          setValue={setEmail}
          placeholder={'Email...'}
        />  
        <CustomInput 
          id={'username'}
          name={'username'}
          type={'username'}
          value={username}
          icon={<PersonIcon/>}
          setValue={setUsername}
          placeholder={'username...'}
        />  
        <CustomInput 
          id={'password'}
          name={'password'}
          type={'password'}
          value={password}
          icon={<PasswordIcon/>}
          setValue={setPassword}
          placeholder={'Password...'}
        />  
        
        <CustomButton
          type={'submit'}
          text={'Sign Up'} 
          icon={<HowToRegIcon/>}
        />
      </form>

      <div className='w-full text-[#0074d9] flex justify-center items-center p-2 py-4 cursor-default'>
        <div className='w-full h-[1px] bg-[#0074d9]' />
      </div>

      <CustomButton
        text={'Back'} 
        icon={<ArrowBackIcon/>}
        onclick={() => navigate(-1)}
      />
    </div>
  )
}

export default Register
