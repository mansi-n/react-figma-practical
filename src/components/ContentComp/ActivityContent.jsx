/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

// import { List } from "antd";
import { BellOutlined, CalendarOutlined, CheckCircleOutlined, ClockCircleOutlined, DownOutlined, HourglassOutlined, MinusOutlined, PieChartOutlined, ProfileOutlined, ProjectOutlined, UpOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Checkbox, Divider, Dropdown, List, Segmented, Space, Timeline } from 'antd';
import './ActivityContent.scss';
import { activityCardDetails, activityFilters, userProfile } from '../../utils';
import UserProfile from '../UserProfile';
import { useState } from 'react';

const ActivityContent = () => {

  const data = [
    {
      text: 'Wrote my first blog post ever on Medium',
      date: 'March 03 2017',
      category: {
          tag: 'medium',
          color: '#018f69'
      },
      link: {
          url:
              'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Read more'
      },
      key: 1
    },
    {
      text: 'Wrote my first blog post ever on Medium',
      date: 'March 03 2017',
      category: {
          tag: 'medium',
          color: '#018f69'
      },
      link: {
          url:
              'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Read more'
      },
      key: 2,
  },
];

const newData = [
  {
      text: 'On Iconspace - Senja Update & Modification, \n Reva Riveva checked off',
      key: 1,
      title: 'Square - New Logo design',
      category: {
          tag: 'medium',
          color: '#018f69'
      },
      list: [{
          text: 'Collect & Research Data',
          key: 1,
        },
        {
          text: 'Brainstorming',
          key: 2,
        },
        {
          text: 'Create Moodboard',
          key: 3,
        }],
  },
  {
    text: 'Kelen Indah commented on Iconspace - senja Update & Modification,',
    title: 'Square - New Logo design',
    subTitle:'Please check your email. I have sent ison references for this project',
    category: {
        tag: 'medium',
        color: '#018f69'
    },
    key: 2,
  },
  {
    text: 'Avian Rizky commented on Iconspace - senja Update & Modification,',
    title: 'Square - New Logo design',
    subTitle:'Ok thanks',
    category: {
        tag: 'medium',
        color: '#018f69'
    },
    key: 3,
  },
  {
    text: 'Sam Tin uploaded a new photo',
    title: 'Square - New Logo design',
    subTitle:'Header Illustration #Exploration',
    category: {
        tag: 'medium',
        color: '#018f69'
    },
    key: 4
  },
];

const items = activityFilters

const actFilters = [
  {
    key: '1',
    icon: '',
    // label: 'Latest activity',
    label: (
      <div
        style={{
          gap: 4,
        }}
      >
        Latest activity
      </div>
    ),
  },
  {
    key: '2',
    icon: '',
    label: 'Someone activity'
  },
  {
    key: 3,
    icon: '',
    label: 'Someone assignments'
  },
  {
    key: 4,
    icon: '',
    label: 'To-dos added & completed'
  },
  {
    key: 5,
    icon: '',
    label: 'Overdue to-dos'
  },
  {
    key: 6,
    icon: '',
    label: 'Upcoming dates'
  },
];

const [show, setShow] = useState(false)

const buttonClick = () => {
  setShow(true)
}
  return (
    <>
      <div>
        <a onClick={(e) => e.preventDefault()}>
          <Space onClick={buttonClick}>
            Latest Activity
            {show ? <DownOutlined/> : <UpOutlined/>}
          </Space>
        </a>
      <div>
      {show && (<Space  direction='vertical' style={{ marginTop: '10px'}}>
        <Segmented
        borderRadius={20}
        options={[
          {
            label: (
              <div
                style={{
                  padding: 4,
                }}
              >
                <div><ClockCircleOutlined style={{ color:'#FF974A' }}/> Latest activity</div>
              </div>
            ),
            value: 'Latest activity',
          },
          {
            label: (
              <div
                style={{
                  padding: 4,
                }}
              >
                <div><UserOutlined style={{ color:'#A461D8' }} /> Someone&apos;s activity</div>
              </div>
            ),
            value: 'Someone&apos;s activity',
          },
          {
            label: (
              <div
                style={{
                  padding: 4,
                }}
              >
                <div><ProfileOutlined style={{ color:'#50B5FF' }}/> Someone&apos;s assignments</div>
              </div>
            ),
            value: 'Someone&apos;s assignments',
          },
          {
            label: (
              <div
                style={{
                  padding: 4,
                }}
              >
                <div><CheckCircleOutlined style={{ color:'#FF9AD5' }}/> To-do&apos;s added & completed</div>
              </div>
            ),
            value: 'To-do&apos;s added & completed',
          },
          {
            label: (
              <div
                style={{
                  padding: 4,
                }}
              >
                <div><BellOutlined style={{ color:'#FFC542' }} rotate='-25'/> Overdue to-do&apos;s </div>
              </div>
            ),
            value: 'Overdue to-do&apos;s',
          },
          {
            label: (
              <div
                style={{
                  padding: 4,
                }}
              >
                <div><CalendarOutlined style={{ color:'#82C43C' }} />Upcoming dates</div>
              </div>
            ),
            value: 'Upcoming dates',
          },
        ]}
      />
      </Space>)}
    </div>

    <div className='activity-container'>
    {activityCardDetails.length > 0 && (
      <div>
        {activityCardDetails.map((data, key) => (
            <div key={key}>
              <Timeline
                mode="alternate"
                items={[
                  {
                    children: (<div>
                        <div  className="content-container">
                          <div className='content-title'>
                            <p>{data.projectName}</p>
                            <p>{data.time}</p>
                          </div>
                          <div className='content-details'>
                            <div className='content-profile'>
                              {data.teamMember.avatar ? <UserProfile src={data.teamMember.avatar} alt={data.teamMember.name}/> : <UserProfile name={data.teamMember.name}/>}
                            </div>

                            <div className='content-updates'>
                              <p className='content-updates-title'>{data.updateTitle}</p>
                              <p className='content-updates-checkbox'>{data.subDetails}</p>
                              {data.subDetailsList && (
                                <ul>
                                  {
                                    data.subDetailsList.map((item,key) => {
                                      return <li key={key} style={{ listStyle: 'none' }}><Checkbox>{item.text}</Checkbox></li>
                                    })
                                  }
                                </ul>
                              )}
                            </div>
                          </div>
                          </div>
                    </div>),
                    color: '#e2e2ea',
                    position: 'left'
                  },
                ]}
              />
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
    </>
  )
}

export default ActivityContent;