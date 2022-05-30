import React from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { Definitions } from '../../redux/types/wordTypes'
import TabPanel from './TabPanel'
import './DefinitionsTabs.scss'

interface IDefinitionsTabsProps {
  definitions: Definitions[] | undefined
}

const DefinitionsTabs: React.FC<IDefinitionsTabsProps> = (props) => {

  const { definitions } = props
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  if (!definitions) return null

  return (
    <Box className="definitions-box">
      <Tabs
        className="definitions-tabs"
        orientation={(window.innerWidth > 600) ? 'vertical' : 'horizontal'}
        variant="scrollable"
        value={value}
        onChange={handleChange}
      >
        {
          definitions.map((definitionItem, index) => {
            return (
              <Tab
                className="definitions-tab"
                key={index}
                label={definitionItem.definition}
              />
            )
          })
        }
      </Tabs>
      {
        definitions.map((definitionItem, index) => {
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