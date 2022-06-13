import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/main.layout'
import Home from './components/Home/main.home'
import About from './components/About/main.about'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
