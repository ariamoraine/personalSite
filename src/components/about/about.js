import React, { Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'

export default ({ title = 'about', text = '' }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <p>{ ReactHtmlParser(text) }</p>
    </Fragment>
  )
}
