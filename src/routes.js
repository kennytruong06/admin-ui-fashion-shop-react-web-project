import React from 'react'
import { Navigate } from 'react-router-dom'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const routes = [
  { path: '/', exact: true, name: 'Dashboard', element: <Dashboard /> },
  { path: '/dashboard', name: 'Dashboard', element: <Dashboard /> },

  { path: '/500', name: 'Page 500', element: <Page500 /> },
  { path: '*', name: 'Page 404', element: <Navigate to="/404" replace /> },
]

export default routes
