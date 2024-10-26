import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
// Material Icons
import SendIcon from '@mui/icons-material/Send';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const Verify = () => {
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
  }

  return (
    <div className='w-full max-w-[300px] md:max-w-[240px] flex flex-col items-start justify-center text-[#0074d9] gap-2 auth-container-enter'>
      <p className='font-bold pb-2 w-full text-center'>Please check your mail</p>

      <form onSubmit={(e) => {
        e.preventDefault()
        if (!isLinkSent) handleSend()
      }}
      className='w-full h-auto gap-2 flex flex-col justify-center items-center'>
        <p className='text-sm text-start w-full pl-1'>
          Did not receive code? Send again.
        </p>
        <CustomInput 
          id={'email'}
          name={'email'}
          type={'email'}
          value={email}
          icon={<EmailIcon/>}
          setValue={setEmail}
          placeholder={'Enter email...'}
        />  
        
        <CustomButton
          isDisabled={isLinkSent} 
          type={'submit'}
          text={'Send Again'} 
          disabledText={`Wait for ${timeLeft}s`} 
          icon={<SendIcon/>}
          disabledIcon={<ScheduleSendIcon/>}
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

export default Verify
