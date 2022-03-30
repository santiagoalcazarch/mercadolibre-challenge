import React from 'react'
import PropTypes from 'prop-types'

const MessageBox = ({title, description}) => {
  return (
    <div className="message-box message p-5">
      <div> <h1> { title } </h1> </div>
      <p> { description } </p>
    </div>
  )
}
MessageBox.propTypes = {
  title: PropTypes.any,
  description: PropTypes.any
}

export default MessageBox



