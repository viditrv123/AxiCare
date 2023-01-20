import React, { PureComponent } from 'react'
// import Grid from '@material-ui/core/Grid'
import Grid from '@mui/material/Grid';
import { withStyles } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
// import '../AccountCreation/ProfileInformation/Personal_Info/PersonalInfo.scss'

const styles = theme => ({
  root: {
    '& .MuiFilledInput-underline:before': {
      borderBottom: `1px solid ${theme.palette.extraColors.inputBorder.main}`
    },
    '& .MuiFormLabel-root.Mui-error': {
      color: theme.palette.error.main
    },
    '& .MuiFormHelperText-root': {
      color: theme.palette.typography.main,
      fontSize: '12px',
      lineHeight: '12px',
      margin: '4px 14px 0'
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: theme.palette.error.main
    },
    '& .MuiFormHelperText-contained': {
      color: theme.palette.extraColors.smoke.main,
      fontSize: '12px',
      lineHeight: '12px',
      fontFamily: 'Lato'
    },
    '& label.Mui-focused': {
      color: theme.palette.extraColors.smoke.main
    },
    '& .MuiFilledInput-input': {
      color: theme.palette.extraColors.charcoal.main,
      borderBottom: `1px solid ${theme.palette.extraColors.inputBorder.main}`,
      fontFamily: 'Lato',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '19px'
    },
    '& .MuiFilledInput-underline:after': {
      border: '0',
      borderBottomColor: 'none'
    },
    '& .MuiFilledInput-underline.Mui-error:after': {
      transform: 'scaleX(1)',
      borderBottom: `2px solid ${theme.palette.secondary.main}`
    },
    '& .MuiFilledInput-root': {
      borderBottom: '0 solid transparent',
      border: `1px solid ${theme.palette.extraColors.inputBorder.main}`,
      background: theme.palette.extraColors.inputBackground.main
    },
    '& .MuiFilledInput-underline:hover:before': {
      // borderBottom: '0px solid transparent'
    },
    '& .Mui-disabled': {
      backgroundColor: (props) => props.disabledColor ? props.disabledColor : '#F1F1F1'
      // color: '#B8BBBD'
    }
  }
})

class MaterialDropdown extends PureComponent {
  render() {
    const {
      error,
      errorText,
      helperText,
      label,
      disabled,
      classes,
      options,
      ...restProps
    } = this.props

    return (
      <Grid
        item
        container
        alignItems='center'
        xs={12}
      >
        <FormControl
          fullWidth
          variant='filled'
          error={error}
          className={classes.root}
        >
          <InputLabel htmlFor='filled'>{label}</InputLabel>
          {
            disabled
              ? <Select
                fullWidth
                disabled
                IconComponent={() => (<ArrowDropDownIcon style={{ display: 'none' }} />)}
                {...restProps}
              >
                {options &&
                  options.map((x, i) => (
                    <MenuItem key={x.value} value={x.value}>{x.label}</MenuItem>
                  ))}
              </Select>
              : <Select
                fullWidth
                {...restProps}
              >
                {options &&
                  options.map((x, i) => (
                    <MenuItem key={x.value} value={x.value}>{x.label}</MenuItem>
                  ))}
              </Select>
          }
          <FormHelperText>
            {(!errorText && !error) ? helperText : ((error && errorText) || ' ')}
          </FormHelperText>
        </FormControl>
      </Grid>
    )
  }
}

export default withStyles(styles)(MaterialDropdown)
