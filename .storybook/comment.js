// https://gist.github.com/alexeychikk/bfe72a072a9a962f2da900b6151e4aae
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

class ReactComment extends React.Component {
  componentDidMount() {
    let el = ReactDOM.findDOMNode(this)
    ReactDOM.unmountComponentAtNode(el)
    el.outerHTML = this.createComment()
  }

  createComment() {
    const text = this.props.text;
    return `<!-- ${text} -->`
  }

  render() {
    return <div />
  }
}

export default ReactComment;