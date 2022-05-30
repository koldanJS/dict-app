import React from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { Definitions } from '../../redux/types/wordTypes'
import TabPanel from './TabPanel'

interface IDefinitionsTabsProps {
  definitions: Definitions[] | undefined
}

interface IStyles {
  box: {
    display?: string
    minHeight?: string
  }
  tabs: {
    overflow: string
    height?: string
    borderRight?: string
    borderColor?: string
  }
  tab: {
    textAlign: string
    alignItems: string
    maxWidth?: string
    width?: string
    p?: string
  }
}

const DefinitionsTabs: React.FC<IDefinitionsTabsProps> = (props) => {

  const { definitions } = props
  const [value, setValue] = React.useState(0)

  const styles: IStyles = {
    box: {},
    tabs: {
      overflow: 'visible'
    },
    tab: {
      textAlign: 'left',
      alignItems: 'flex-start', 
      width: '100%',
      p: '5px'
    }
  }

  if (window.innerWidth > 600) {
    styles.box = {
      display: 'flex',
      minHeight: '150px'
    }
    styles.tabs = {
      ...styles.tabs,
      height: '250px',
      borderRight: '1px',
      borderColor: 'divider'
    }
    styles.tab = {
      ...styles.tab,
      maxWidth: '700px',
      width: '40vw'
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  if (!definitions) return null

  return (
    <Box sx={{...styles.box}}>
      <Tabs
        orientation={(window.innerWidth > 600) ? 'vertical' : 'horizontal'}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{...styles.tabs}}
      >
        {
          definitions.map((definitionItem, index) => {
            return (
              <Tab
                key={index}
                label={definitionItem.definition}
                sx={{...styles.tab}}
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