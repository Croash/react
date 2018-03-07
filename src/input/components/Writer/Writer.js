import React,{ Component } from 'react'
import Markdown from 'react-markdown'

const initialSource = `
# Live demo
Changes are automatically rendered as you type.
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>
## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`
Pretty neat, eh?
## Tables?
| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
`

class Writer extends Component {
  componentWillMount() {
    this.state = {
      markdownSrc: initialSource,
      htmlMode: 'skip'
    }
  }
  render() {
    return <Markdown
    className="result"
    style={{height:'1000px',width:'1000px'}}
    source={ this.state.markdownSrc } 
    skipHtml={ this.state.htmlMode === 'skip' }
    escapeHtml={ this.state.htmlMode === 'escape' }
  />
  }
}

export default Writer
