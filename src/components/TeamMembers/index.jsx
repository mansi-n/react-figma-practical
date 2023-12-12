// import { Image } from "antd"
import UserProfile from "../UserProfile"
import './TeamMembers.scss'
import p1 from '../../assets/images/Shape.svg'
import p2 from '../../assets/images/Shape (1).svg'
import p3 from '../../assets/images/ahmad.svg'
import p4 from '../../assets/images/indro.png'
import p5 from '../../assets/images/patya.svg'
import p6 from '../../assets/images/ibnu.png'
const TeamMembers = () => {
 return (
  <>
  <div className="team-member-imgs">
    <UserProfile src={p1}/>
    <UserProfile src={p2}/>
    <UserProfile src={p3}/>
    <UserProfile src={p4}/>
    <UserProfile src={p5}/>
    <UserProfile src={p6}/>
  </div>
  </>
 )
}

export default TeamMembers

