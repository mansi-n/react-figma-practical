import attachmentIcon from '../../assets/images/Attachment.svg'
import assignmentIcon from '../../assets/images/ic_Assignments.svg'
import { Card, Image, Progress, Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
const { Meta } = Card;

import TeamCard from './TeamCard';

const ProjectCard = (projectData) => {
  const data = projectData.projectData
  
  return (
    <>
      <Card headStyle={{ backgroundColor: 'white', borderBlockEnd: 'none' }} cover={data.coverImage && (<Image alt="example" src={data.coverImage} />)} 
      bordered={false} className='flexible-card' style={{ marginBottom: '10px', flex:1 }} >
        <Meta title={data.title} description={data.subTitle}/>
        <div>
          <Tag bordered={false} color="default" icon={<Image src={attachmentIcon}/>}>{data.attachmentNumber}</Tag>
          <Tag bordered={false} color="default" icon={<Image src={assignmentIcon}/>}>{data.taskAssign}</Tag>
          {data.timeLine && (<span>{ data.timeLine > 7 ? <Tag bordered={false} color="orange" icon={<ClockCircleOutlined/>}>{data.timeLine} days left</Tag> : <Tag bordered={false} color="red" icon={<ClockCircleOutlined/>}>{data.timeLine} days left</Tag>}</span>)}
          {/* { data.timeLine > 7 ? <Tag bordered={false} color="orange" icon={<ClockCircleOutlined/>}>{data.timeLine} days left</Tag> : <Tag bordered={false} color="red" icon={<ClockCircleOutlined/>}>{data.timeLine} days left</Tag>} */}
        </div>
        <br/>

        <Progress percent={data.progressNumber} strokeColor='#3DD598'/>
        <div>
          <TeamCard data={data.teamMembers}/>
        </div>
      </Card>
    </>
  )
}

export default ProjectCard;