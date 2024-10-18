import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const getTokenWithExpiry = (key) => {
  const token = Cookies.get(key)
  return token || null
}

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element: Element, ...rest }) => {
  const token = getTokenWithExpiry('token')

  return token ? <Element {...rest} /> : <Navigate to="/login" />
}

export default PrivateRoute
