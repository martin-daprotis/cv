import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    float: 'right',
  },
  position: {
    color: theme.palette.text.secondary,
  },
  image: {
    margin: '10px',
    width: '350px',
    height: '200px',
    borderRadius: '5px',
    objectFit: 'cover',
    cursor: 'pointer',
  },
}))

function WorkItem({ panel, data }) {
  const classes = useStyles()
  const { place, from, until, position, description, webImg,link } = data

  return (
    <Accordion
      TransitionProps={{
        timeout: 600,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panelbh-content"
        id="panelbh-header"
      >
        <Grid container direction="row" justify="flex-start" alignItems="center">
          <Typography className={classes.heading} variant="h6">
            {`${place} - `}
          </Typography>
          {position ? (
            <Box fontStyle="oblique" m={1}>
              <Typography variant="h6" className={classes.position}>
                {position}
              </Typography>
            </Box>
          ) : (
            ''
          )}
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Typography className={classes.secondaryHeading} display="block" align="right">
            {from} - {until}
          </Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
            <Typography variant="subtitle2">
              {description.split('|').map((line) => {
                return line.substr(0,1)==='•' || line.substr(0,1)==='>'  ? 
                  <div style={{marginLeft: '25px'}}>
                    {line.substr(0,1)==='>' ? line.substr(1,line.length-1):line}
                    <br />
                  </div>:
                  <>
                  {line}
                    <br />
                  </>
              })}
            </Typography>
          </Grid>
          {webImg && 
                    <Grid item>
                      <a style={{display: "table-cell"}} href={link} target="_blank" rel="noopener noreferrer">
                      <img
                        className={classes.image}
                        src={webImg}
                        alt="web-example"
                      />
                      </a>
                    </Grid>
          }
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default WorkItem;