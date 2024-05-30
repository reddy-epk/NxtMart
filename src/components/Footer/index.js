import {FaFacebook, FaTwitter, FaInstagram, FaPinterest} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="pk">
    <div>
      For any queries, contact +91-9876543210 <br />
      or mail us help@nxtmart.co.in
    </div>
    <div>
      <FaFacebook className="spacer" />
      <FaTwitter className="spacer" />
      <FaInstagram className="spacer" />
      <FaPinterest />
    </div>
    <div>Copyright © 2023 NxtMart Grocery Supplies Pvt Ltd</div>
  </div>
)

export default Footer
