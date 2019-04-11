import React from 'react'

import Header from '../Header'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="container main">
        <div className="columns col-gapless h100">
          <div className="column col-6 col-sm-12 blue h100">
            <Header />
          </div>
          <div className="column col-6 col-sm-12">

            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Template