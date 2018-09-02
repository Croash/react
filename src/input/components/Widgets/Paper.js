import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  content: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

const PaperSheet = (props) => {
  const { classes,
    title = 'This is a sheet of paper.',
    description = 'Paper can be used to build surface or other elements for your application.'
  } = props
  console.log(props)
  return (
    <div className={classes.root}>
      <Paper className={classes.content} elevation={1}>
        <Typography variant="headline" component="h2">
          { title }
        </Typography>
        <Typography component="p">
          { description }
        </Typography>
      </Paper>
    </div>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PaperSheet)
