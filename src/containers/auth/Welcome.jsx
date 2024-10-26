import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { authRoutes } from '../../Routes';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput'; 
// Material Icons
import SendIcon from '@mui/icons-material/Send';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';

const Welcome = () => {
  const [isLinkSent, setIsLinkSent] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const lastSendTime = localStorage.getItem('sendCooldownStart')

    if (lastSendTime) {
      const timeElapsed = Date.now() - parseInt(lastSendTime, 10)
      const timeRemaining = 180000 - timeElapsed

      if (timeRemaining > 0) {
        setIsLinkSent(true)
        setTimeLeft(Math.floor(timeRemaining / 1000))

        const countDownInterval = setInterval(() => {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              clearInterval(countDownInterval)
              setIsLinkSent(false)
              localStorage.removeItem('sendCooldownStart')
              return 0
            }
            return prev - 1
          })
        }, 1000)

        return () => clearInterval(countDownInterval)
      }
    }
  }, [])

  const handleSend = async () => {
    if (!email) return 0

    setIsLinkSent(true)
    setTimeLeft(180)
    localStorage.setItem('sendCooldownStart', Date.now().toString())

    const countDownInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countDownInterval)
          setIsLinkSent(false)
          localStorage.removeItem('sendCooldownStart')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    navigate(authRoutes.verify)
  }

  return (
    <div className='w-full max-w-[240px] flex flex-col items-start justify-center text-[#0074d9] gap-2 auth-container-enter'>
      <p className='font-bold p-2'>Get Started</p>

      <form onSubmit={(e) => {
        e.preventDefault()
        if (!isLinkSent) handleSend()
      }}
      className='w-full h-auto gap-2 flex flex-col justify-center items-center'>
        <CustomInput 
          id={'email'}
          name={'email'}
          type={'email'}
          value={email}
          icon={<EmailIcon/>}
          setValue={setEmail}
          placeholder={'Enter email...'}
        />

        <p className={`${email? 'py-1 text-center w-full': 'py-0'} duration-300 text-sm text-slate-400`}>
          {email? 'We will send you a registration link.' : null}
        </p>

        <CustomButton
          isDisabled={isLinkSent} 
          text={'Send Link'} 
          disabledText={`Wait for ${timeLeft}s`} 
          icon={<SendIcon/>}
          disabledIcon={<ScheduleSendIcon/>}
          type={'submit'}
        />
      </form>

      <div className='w-full text-[#0074d9] font-bold flex justify-center items-center p-2 gap-2 cursor-default'>
        <div className='w-full h-[1px] bg-[#0074d9]' />
        <p>OR</p>
        <div className='w-full h-[1px] bg-[#0074d9]' />
      </div>

      <CustomButton 
        isDisabled={false}
        text={'Log In'}
        icon={<LoginIcon/>}
        onclick={() => navigate(authRoutes.login)}
      />
    </div>
  )
}

export default Welcome
