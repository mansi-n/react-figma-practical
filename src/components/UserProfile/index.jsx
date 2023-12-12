/* eslint-disable react/prop-types */
import { Image } from "antd";
import './UserProfile.scss'

const UserProfile = ({src,alt,name}) => {
  return (
    <>
      {src ? <Image src={src} alt={alt} className="profile-image"/> : <div className="profile-text">
      <p>{name}</p></div>}
    </>
  )
}

export default UserProfile;