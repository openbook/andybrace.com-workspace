import React from 'react'

class HeaderLinks extends React.Component {
  render() {
    const { github, email, linkedIn } = this.props.links
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li><a href="#" className="icon fa-github"><span className="label">{github}</span></a></li>
            <li><a href="#" className="icon fa-envelope-o"><span className="label">{email}</span></a></li>
            <li><a href="#" className="icon fa-envelope-o"><span className="label">{linkedIn}</span></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderLinks