import React from 'react'
import { Button } from '@mui/material'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import './PhoneticButton.scss'

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
      className="phonetic-button"
      variant="text"
      size="small"
      onClick={playAudio}
      endIcon={ audio ? <VolumeUpIcon/> : null}
      disabled={!audio}
    >
      {text?.replace('/', '[').replace('/', ']')}
    </Button>
  )
}

export default PhoneticButton