import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Content from '../Content'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="list-container">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
export default Home
