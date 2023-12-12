import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Image } from 'antd';
import BaseButton from '../../Button';
import TeamMembers from '../../TeamMembers';

import teamIcon from '../../../assets/images/img_Iconspace.jpg'

const getItems = () => [
  {
    key: '1',
    label: <p style={{ color: "#92929D", fontWeight: "bold" }}>TEAMS</p>,
    children: <><Image src={teamIcon} alt="Team Logo" /> Iconspace Team
    <TeamMembers/>
    <BaseButton type='link' value='+ Add New Team'/></>,
  },
];
const TeamsCol = () => {
  const panelStyle = {
    marginBottom: 24,
    border: 'none',
    fontWeight: 'bold',
    color: '#92929D'
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIconPosition='end'
      expandIcon={({ isActive }) => <CaretRightOutlined style={{ color: "#92929D", fontWeight: "bold" }} rotate={isActive ? 90 : 0} />}
      items={getItems(panelStyle)}
    />
  );
};
export default TeamsCol;