import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Meanings } from '../../redux/types/wordTypes'
import DefinitionsTabs from './DefinitionsTabs'

const MeaningItem: React.FC<Meanings> = (props) => {

  const { partOfSpeech, definitions, synonyms, antonyms } = props

  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Accordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>
          {partOfSpeech}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{display: 'inline-block', width: '40vw'}}>
          Definitions:
        </Typography>
        <Typography sx={{display: 'inline-block'}}>
          Examples:
        </Typography>
        <DefinitionsTabs definitions={definitions} />
        <Typography>
          Synonyms: {synonyms.join(', ')}
        </Typography>
        <Typography>
          Antonyms: {antonyms.join(', ')}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default MeaningItem