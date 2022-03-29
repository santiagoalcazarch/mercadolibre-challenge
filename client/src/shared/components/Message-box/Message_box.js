import React from 'react'
import PropTypes from 'prop-types'

const MessageBox = ({title, description}) => {
  return (
    <div class="message-box message p-5">
      <div> <h1> { title } </h1> </div>
      <p> { description } </p>
    </div>
  )
}
MessageBox.propTypes = {
  child: PropTypes.any.isRequired
}

export default MessageBox



