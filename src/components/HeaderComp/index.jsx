import { Badge, Image, Space,Input } from "antd";
import HeadLogoIcon from '../../assets/images/HeadLogo.svg'
import notificationIcon from '../../assets/images/ic_Notification.svg'
import searchIcon from '../../assets/images/ic_Search.svg'
import plusIcon from '../../assets/images/ic_Plus.svg'
import BaseButton from "../Button";
import './HeaderComp.scss'
import UserProfile from "../UserProfile";
import { SearchOutlined } from "@ant-design/icons";
import { userProfile } from "../../utils";


const HeaderComp = () => {
  return (
    <>
    <div className="header-wrapper">
      <div className="logo-wrapper">
          <Image src={HeadLogoIcon} alt="Head Logo" />
      </div>
     
      <div className="header-right">
        <Input type="search" icon={<SearchOutlined/>} placeholder="Find"/>
        <BaseButton type='primary' value='New' icon={<Image src={plusIcon}/>}/>
      
        <Space>
          <Badge dot offset={[-6, 4]}>
            <Image src={notificationIcon}/>
          </Badge>
        </Space>

        {userProfile.avatar ? <UserProfile src={userProfile.avatar} alt={userProfile.name}/> : <UserProfile name={userProfile.name}/>}
      </div>
    </div>
    </>
  )
}

export default HeaderComp