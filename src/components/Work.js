import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import EN from '../lang_source/EN.json'
import SP from '../lang_source/SP.json'
import { v4 as uuidv4 } from 'uuid'
import WorkItem from './WorkItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}))

export default function ControlledExpansionPanels({ language, t, en = EN, sp = SP }) {
  const classes = useStyles()
  const lang = language === 'EN' ? en : sp

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="center" m={1} p={1} fontWeight="fontWeightBold">
        <Typography variant="h4">{t('navbar.work')}</Typography>
      </Box>
      {lang.work.map((k, i) => (
        <WorkItem key={uuidv4()} data={k} panel={i} />
      ))}
    </div>
  )
}
