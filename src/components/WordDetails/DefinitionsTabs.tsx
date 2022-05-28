import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Definitions } from '../../redux/types/wordTypes'
import TabPanel from './TabPanel'

interface IDefinitionsTabsProps {
  definitions?: Definitions[]
}

const DefinitionsTabs: React.FC<IDefinitionsTabsProps> = (props) => {

  const { definitions } = props

  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{display: 'flex', height: 250}}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{borderRight: 1, borderColor: 'divider'}}
      >
        {
          definitions?.map((definitionItem, index) => {
            return (
              <Tab key={index} label={definitionItem.definition} />
            )
          })
        }
      </Tabs>
      {
        definitions?.map((definitionItem, index) => {
          return (
            <TabPanel key={index} value={value} index={index}>
              <p>Example: {definitionItem.example || '-'}</p>
              <p>Synonyms: {definitionItem.synonyms?.join(', ') || '-'}</p>
              <p>Antonyms: {definitionItem.antonyms?.join(', ') || '-'}</p>
            </TabPanel>
          )
        })
      }
    </Box>
  )
}

export default DefinitionsTabs