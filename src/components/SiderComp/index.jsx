import { Badge, Menu} from 'antd'
import './SiderComp.scss';
import { AppstoreOutlined, CalendarOutlined, CheckCircleOutlined, ClockCircleOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import TeamsCol from './MenuItem/TeamsCol';

const SiderComp = () => {

  const onClick = (e) => {
    console.log('click ', e);
    // setCurrent(e?.keyPath);
    // console.log("setCurrent(e.keyPath)--",setCurrent(e.keyPath))
  };


  const menuItems = [
    {
      key: 0,
      icon:<AppstoreOutlined/>,
      label: 'Dashboard',
    },
    {
      key:1,
      icon:<MessageOutlined/>,
      // label: 'Messages',
      label: <>Messages <Badge count={3}/></>,
    },
    {
      key:2,
      icon:<CheckCircleOutlined/>,
      label: 'Project',
    },
    {
      key:3,
      icon:<CalendarOutlined/>,
      children: [
        {
        key: 's1',
        label: 'In Progress',
        },
        {
          key: 's2',
          label: 'Pending',
        },
        {
          key: 's3',
          label: 'Completed',
        },
      ],
      label: 'Schedule',
    },
    {
      key:4,
      icon:<ClockCircleOutlined/>,
      label: 'Activity',
    },
    {
      key:5,
      icon:<SettingOutlined/>,
      label: 'Settings',
    },
  ];

  return (
    <>
      <TeamsCol/>
      <div>
        <Menu
        onClick={onClick}
        defaultSelectedKeys={['0']}
        // selectedKeys={[current]}
          mode="vertical"
          items={menuItems}
        />
      </div>
    </>
  )
}

export default SiderComp