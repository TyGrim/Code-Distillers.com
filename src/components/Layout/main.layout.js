import { Outlet } from 'react-router-dom'
import Sidebar from '../Nav/main.nav'
import './main.layout.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />

        <br />
      </div>
    </div>
  )
}

export default Layout
