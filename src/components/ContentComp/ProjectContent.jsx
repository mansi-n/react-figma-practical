import { AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, CaretDownOutlined, DownOutlined, FilterOutlined, MenuOutlined, ClockCircleOutlined, EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import { Dropdown, Select, Space, Card, Col, Image, Progress, Row, Tag } from "antd";
import './ProjectContent.scss';
import BaseButton from "../Button";

import attachmentIcon from '../../assets/images/Attachment.svg'
import assignmentIcon from '../../assets/images/ic_Assignments.svg'
import TeamCard from '../CardComp/TeamCard';
import { projectsStatusCard, statusCode } from "../../utils";
import ProjectCard from "../CardComp/ProjectCard";

const { Meta } = Card;

const ProjectContent = () => {
  const items = [
    {
      key: 1,
      label: 'Newest Added',
    },
    {
      key: 2,
      label: 'Newest Project',
    },
    {
      key: 3,
      label: 'Due Date',
    },
    {
      key: 4,
      label: 'Project Type',
    },
  ];

  const selectItems = [
    {
      value: 'project name',
      label: 'Project Name',
      key:1,
    },
    {
      value: 'newest project',
      label: 'Newest Project',
      key: 2,
    },
    {
      value: 'due date',
      label: 'Due Date',
      key: 3,
    },
    {
      value: 'project type',
      label: 'Project Type',
      key: 4,
    },
  ];
  return (
    <>
    <div className="project-title-wrapper">
    <div className="tittle">
      {/* <div> */}
        <div className="dashboard">Projects</div>
        
        <div className="caption">Show:
            <Dropdown menu={{ items }}
              placement="bottomRight"
            >
              <a onClick={(e) => e.preventDefault()} style={{ color: "#44444F", fontWeight: "bold" }}>
              <Space>
              All Projects
                <CaretDownOutlined/>
              </Space>
            </a>
            </Dropdown>
        </div>
      {/* </div> */}
    
    </div>

    <div className="header-right">
        <div className="caption">Sort by:
          {/* <Space size='large'> */}
            {/* <Select defaultValue='due date' options={selectItems}/> */}
            <Select placeholder="select filter" style={{ width: 150 }} mode="multiple">
              {selectItems.map(item =>
                <Select.Option key={item.key}>{item.label}</Select.Option>
                )}
            </Select>
          {/* </Space> */}
        </div>
        <div>
          <BaseButton type='text' icon={<FilterOutlined/>}></BaseButton>
          <BaseButton type='text' icon={<AlignCenterOutlined/>}></BaseButton>
          {/* <BaseButton type='text' icon={<AlignLeftOutlined/>}></BaseButton> */}
          <BaseButton type='text' icon={<AlignRightOutlined/>}></BaseButton>
          <BaseButton type='text' icon={<MenuOutlined/>}></BaseButton>
        </div>
       
    </div>
    </div>

<div>
<Row gutter={16}>
      <Col span={6}>
      <Card
        title="Pending"
        extra={<EllipsisOutlined/>}
        style={{
          // width: 302,
          border: '1px solid #e2e2ea',
          borderRadius: '23px',
        }}
        headStyle={{ borderBlockEnd: 'none' }}
      >

        {projectsStatusCard && (
            <div>
                  {projectsStatusCard.map((data, key) => (
                    <div key={key}>
                        {data.status == statusCode[0] && (
                          <Card type="inner" headStyle={{ backgroundColor: 'white', borderBlockEnd: 'none' }} 
                          bordered={false} className='flexible-card' style={{ marginBottom: '10px', flex:1 }} >
                            <Meta title={data.title} description={data.subTitle}/>
                          <div>
                            <Tag bordered={false} color="default" icon={<Image src={attachmentIcon}/>}>{data.attachmentNumber}</Tag>
                            <Tag bordered={false} color="default" icon={<Image src={assignmentIcon}/>}>{data.taskAssign}</Tag>
                            <Tag bordered={false} color="default" icon={<ClockCircleOutlined/>}>{data.timeLine} days left</Tag>
                          </div>
                          <br/>

                          <Progress percent={data.progressNumber} strokeColor='#3DD598'/>
                          <div>
                            <TeamCard data={data.teamMembers}/>
                          </div>
                        </Card>
                        )}
                    </div>
                  ))}
              </div>
          )}
        <p style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}><PlusOutlined/></p>
      </Card>
      </Col>

      <Col span={6}>
      <Card
        title="Run"
        extra={<EllipsisOutlined/>}
        style={{
          // width: 302,
          border: '1px solid #e2e2ea',
          borderRadius: '23px',
        }}
        headStyle={{ borderBlockEnd: 'none' }}
      >
        {projectsStatusCard && (
            <div>
                  {projectsStatusCard.map((data, key) => (
                    <div key={key}>
                        {data.status == statusCode[1] && (
                          <>
                          <ProjectCard projectData={data} />
                        </>
                        )}
                    </div>
                  ))}
              </div>
          )}
          <p style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}><PlusOutlined/></p>
      </Card>
      </Col>

      <Col span={6}>
      <Card
        title="Done"
        extra={<EllipsisOutlined/>}
        style={{
          // width: 302,
          border: '1px solid #e2e2ea',
          borderRadius: '23px',
        }}
        headStyle={{ borderBlockEnd: 'none' }}
      >
        {projectsStatusCard && (
            <div>
                  {projectsStatusCard.map((data, key) => (
                    <div key={key}>
                        {data.status == statusCode[2] && (
                          <ProjectCard projectData={data}/>
                        )}
                    </div>
                  ))}
              </div>
          )}
          <p style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}><PlusOutlined/></p>
      </Card>
      </Col>

      <Col span={6}>
      <Card
        title="Add column"
        style={{
          // width: 302,
          border: '1px solid #e2e2ea',
          borderRadius: '23px',
        }}
      >
        <p style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}><PlusOutlined/></p>
      </Card>
      </Col>

    </Row>
</div>

    </>
  )
}

export default ProjectContent