import React from 'react'
import { withRouter, generatePath } from 'react-router-dom'

import history from './../../History/history'
import './Car.scss'

const Car = (props) => {
  return (
    <div
      className={'Car'}
      onClick={() =>
        history.push(generatePath(`/cars/${props.name.toLowerCase()}`))
      }
    >
      <h3>Сar name: {props.name}</h3>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
    </div>
  )
}

export default withRouter(Car)
