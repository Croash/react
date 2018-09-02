import React,{ Component } from 'react'
import Section from './section'
import IconButton from 'material-ui/IconButton'
import './style.css'
// import * as Colors from './colors'

class AppFooter extends Component {
  
  style = {
    footer: {
      marginTop: '30px', marginLeft: '0%',
      marginRight: '0%', marginBottom: '0px',
      textAlign: 'center',
      verticalAlign: 'bottom',
      backgroundColor: 'grey'
    }, a: {
      color: 'darkWhite'
    }, p: {
      margin: '0 auto',
      padding: 0,
      // color: Colors.lightWhite,
      maxWidth: 335
    }
  }

  render() {
    
    return (
      <Section className="footer">
        <p style={this.style.p}>Code Crafted by Zelin Shao &copy 2018</p>
        <p style={this.style.p}>祝大家新年快乐</p>
        <IconButton
          onClick = { ()=>{ console.log('click') } }
          iconStyle={{ color: 'white' }}
          iconClassName={'muidocs-icon-custom-github'}
          href={'https://github.com/Croash'}
          linkButton={true}
        />
      </Section>
    )
  }
}
export default AppFooter
