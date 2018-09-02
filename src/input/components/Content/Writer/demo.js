let All = `

# demo markdown

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

const Charts = `
# Charts
  好像打包有点问题，等下回去重新建一下项目。
`

const Life = `
# Life
  愿之后work life balance吧

  ps: 为什么会想到life是只鸡呢，看星际老男孩太多了，对智商果然不好
`

const Algorithm = `
# Algorithm
  算法什么的，有什么问题嘛，反正也不会（逃
  
  之后有心情补上好了
`

let demo = {
  All,
  Charts,
  Life,
  Algorithm
}

export default demo
