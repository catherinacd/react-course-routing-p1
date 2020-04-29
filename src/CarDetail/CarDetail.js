import React from 'react'
import { withRouter } from 'react-router'

const CarDetail = (props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello {props.match.params.name}!</h1>
    </div>
  )
}

export default withRouter(CarDetail)
