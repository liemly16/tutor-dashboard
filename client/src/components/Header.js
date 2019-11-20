import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ addTodo }) => (
  <header className="header">
    <h1>header todos</h1>
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
