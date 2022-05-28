import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Definitions } from '../../redux/types/wordTypes'

const DefinitionItem: React.FC<Definitions> = (props) => {

  const { definition, example, synonyms, antonyms } = props

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
        <Typography
          sx={{
            width: '50%',
            flexShrink: 0
          }}
        >
          Definition: 
        </Typography>
        <Typography
          sx={{ color: 'text.secondary' }}
        >
          {definition}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <p>example: {example}</p>
        <p>synonyms: {synonyms?.join(', ')}</p>
        <p>antonyms: {antonyms?.join(', ')}</p>
      </AccordionDetails>
    </Accordion>
  )
}

export default DefinitionItem