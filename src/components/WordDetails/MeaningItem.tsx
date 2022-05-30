import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Meanings } from '../../redux/types/wordTypes'
import DefinitionsTabs from './DefinitionsTabs'
import './MeaningItem.scss'

const MeaningItem: React.FC<Meanings> = (props) => {

  const { partOfSpeech, definitions, synonyms, antonyms } = props

  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Accordion
      className="meaning-item"
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <h4 className="part-of-speech">
          {partOfSpeech}
        </h4>
      </AccordionSummary>
      <AccordionDetails>
        <p className="definitions">
          Definitions:
        </p>
        <p className="examples">
          Examples:
        </p>
        <DefinitionsTabs definitions={definitions} />
        <p>
          Synonyms: {synonyms.join(', ')}
        </p>
        <p>
          Antonyms: {antonyms.join(', ')}
        </p>
      </AccordionDetails>
    </Accordion>
  )
}

export default MeaningItem