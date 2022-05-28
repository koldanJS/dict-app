import React from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import { Button } from '@mui/material'

interface IPhoneticButtonProps {
  text?: string
  audio?: string
}

const PhoneticButton: React.FC<IPhoneticButtonProps> = (props) => {

  const { text, audio } = props

  const playAudio = () => {
    const audioPlayer = new Audio(audio)
    audioPlayer.play()
  }

  return (
    <Button
      variant="text"
      onClick={playAudio}
      endIcon={ audio ? <VolumeUpIcon/> : null}
      disabled={!audio}
    >
      {text?.replace('/', '[').replace('/', ']')}
    </Button>
  )
}

export default PhoneticButton