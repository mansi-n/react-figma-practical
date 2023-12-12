// import { Content } from "antd/es/layout/layout";
// https://ant.design/components/list - for project card list , Dropdown,Menu,

import { Card, Col, Image, Progress, Row, Tag, Menu, Dropdown } from "antd";
import { ClockCircleOutlined, EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import team1logo from '../../assets/images/Sebo.svg'
import team2logo from '../../assets/images/Iconspace.svg'

import attachmentIcon from '../../assets/images/Attachment.svg'
import TeamCard from '../CardComp/TeamCard';

import './DashboardContent.scss'
import { teamMembers } from '../../utils';

const { Meta } = Card;

const teamTitleStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '15px'
}
const DashboardContent = () => {
    const menu = (
    // <>
    <Menu>
      <Menu.Item key="Actions"><strong>List Actions</strong></Menu.Item>
      <Menu.Item key="Add new teams">Add New Teams</Menu.Item>
      <Menu.Item key="Edit Current Teams">Edit Current Teams</Menu.Item>
      <Menu.Item key="Add New Member">Add New Member</Menu.Item>
      <Menu.Item key="Remove Current Member">Remove Current Member</Menu.Item>
    </Menu>
    // </>
  );
  return (
    <>
      <div className="tittle">
        <div className="dashboard">Hi James,</div>
        <div className="caption">here’s your currently projects</div>
      </div>

      <div className="team-card-section">
        <Card title="Team" headStyle={{ borderBlockEnd: 'none' }} style={{ backgroundColor: '#FAFAFB', border: '1px solid #e2e2ea', borderRadius: '23px' }} extra={<Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ color: "#92929D", fontWeight: "bold" }}
            >
              <EllipsisOutlined/>
            </a>
        </Dropdown>}>

          <Row gutter={16}>
            <Col span={8} style={{display: 'flex'}}>
              <Card type="inner" headStyle={{ backgroundColor: 'white', borderBlockEnd: 'none' }} title={<><div style={teamTitleStyle}><Image src={team1logo}/><Meta title="Sebo Studio" /></div></>} bordered={false} extra={<EllipsisOutlined/>} style={{flex:1}}>
                <TeamCard data={teamMembers}/>
              </Card>
            </Col>
            <Col span={8} style={{display: 'flex'}}>
              <Card type="inner" headStyle={{ backgroundColor: 'white', borderBlockEnd: 'none' }} title={<><div style={teamTitleStyle}><Image src={team2logo}/><Meta title="Iconspace Team" /></div></>} bordered={false} hoverable={true} extra={<EllipsisOutlined/>} style={{flex:1}}>
                <TeamCard data={teamMembers}/>
              </Card>
            </Col>
            <Col span={8} style={{display: 'flex'}}>
              <Card type="inner" bordered={true} style={{ borderStyle: 'dashed', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', borderColor: '#D5D5DC', flex:1}}>
              <PlusOutlined/>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
      <br/>

      <div className="projects-card-section">
        <Card title="Projects" extra={<EllipsisOutlined/>} headStyle={{ borderBlockEnd: 'none' }} style={{ backgroundColor: '#FAFAFB', border: '1px solid #e2e2ea', borderRadius: '23px' }}>
          <Row gutter={[16, 16]}>
            <Col span={8} style={{ display: 'flex' }}>
              <Card type="inner" headStyle={{ backgroundColor: 'white', borderBlockEnd: 'none' }} title={<><Meta title="Product Preview & Mock up for Market" description="Iconspace Team"/></>} bordered={false} className='flexible-card' style={{ marginBottom: '10px', flex:1 }} extra={<EllipsisOutlined/>}>
                <div>
                  <Tag bordered={false} color="default" icon={<Image src={attachmentIcon}/>}>13</Tag>
                  <Tag bordered={false} color="orange" icon={<ClockCircleOutlined/>}>7 days left</Tag>
                </div>
                <br/>
                <Progress percent={80} strokeColor='#3DD598'/>
                <div>
                  <TeamCard data={teamMembers}/>
                </div>
              </Card>
            </Col>
            <Col span={8} style={{ display: 'flex' }}>
              <Card type="inner" headStyle={{ backgroundColor: 'white', borderBlockEnd: 'none' }} bordered={false} title={<><Meta title="Circle - Dashboard, stats, and UI Kit" description="Iconspace Team"/></>} extra={<EllipsisOutlined/>} className='flexible-card'
              style={{ flex:1 }}>
                <div>
                  <Tag bordered={false} color="default" icon={<Image src={attachmentIcon}/>}>5</Tag>
                  <Tag bordered={false} color="red" icon={<ClockCircleOutlined/>}>1 days left</Tag>
                </div>
                <br/>
                <Progress percent={75} strokeColor='#3DD598'/>
                <div>
                  <TeamCard data={teamMembers}/>
                </div>
              </Card>
            </Col>
            <Col span={8} style={{ display: 'flex' }}>
              <Card type="inner" headStyle={{ backgroundColor: 'white', borderBlockEnd: 'none' }} bordered={false} title={<><Meta title="Square - Social Media Plan" description="Uranus Team"/></>} extra={<EllipsisOutlined/>} className='flexible-card'
              style={{ flex:1 }}>
                <div>
                  <Tag bordered={false} color="default" icon={<Image src={attachmentIcon}/>}>3</Tag>
                  <Tag bordered={false} color="orange" icon={<ClockCircleOutlined/>}>8 days left</Tag>
                </div>
                <br/>
                <Progress percent={65} strokeColor='#3DD598'/>
                <div>
                  <TeamCard data={teamMembers}/>
                </div>
              </Card>
            </Col>
            <Col span={8} style={{ display: 'flex' }}>
              <Card type="inner" headStyle={{ backgroundColor: 'white', borderBlockEnd: 'none' }} title={<><Meta title="Project Management Tool Dashboard" description="Uranus Team"/></>} bordered={false} extra={<EllipsisOutlined/>} className='flexible-card'
              style={{ flex:1 }}>
                <div>
                  <Tag bordered={false} color="default" icon={<Image src={attachmentIcon}/>}>1</Tag>
                  <Tag bordered={false} color="default" icon={<ClockCircleOutlined/>}>10 days left</Tag>
                </div>
                <br/>
                <Progress percent={30} strokeColor='#3DD598'/>
                <div>
                  <TeamCard data={teamMembers}/>
                </div>
              </Card>
            </Col>
            <Col span={8} style={{ display: 'flex' }}>
              <Card type="inner" headStyle={{ backgroundColor: 'white', borderBlockEnd: 'none' }} title={<><Meta title="Development - Circle Website" description="Iconspace Team"/></>} bordered={false} extra={<EllipsisOutlined/>} className='flexible-card'
              style={{ flex:1 }}>
                <div>
                  <Tag bordered={false} color="default" icon={<Image src={attachmentIcon}/>}>2</Tag>
                  <Tag bordered={false} color="default" icon={<ClockCircleOutlined/>}>14 days left</Tag>
                </div>
                <br/>
                <Progress percent={20} strokeColor='#3DD598'/>
                <div>
                  <TeamCard data={teamMembers}/>
                </div>
              </Card>
            </Col>
            <Col span={8} style={{ display: 'flex' }}>
              <Card type="inner" bordered={true} style={{ borderStyle: 'dashed', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', borderColor: '#D5D5DC',flex:1}}>
                <PlusOutlined/> Add Project
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  )
}

export default DashboardContent;