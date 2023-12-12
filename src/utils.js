
export const menuItems = [
  {
    key: 1,
    name: 'Dashboard',
    icon: '',
    redirectRoute: '/dashboard',
  },
  {
    key: 2,
    name: 'Messages',
    icon: '',
    redirectRoute:'/messages',
  },
  {
    key: 3,
    name: 'Project',
    icon: '',
    redirectRoute: '/project',
  },
  {
    key: 4,
    name: 'Schedule',
    icon: '',
    redirectRoute: '/schedule',
  },
  {
    key: 5,
    name: 'Activity',
    icon: '',
    redirectRoute: '/activity',
  },
  {
    key: 6,
    name: 'Settings',
    icon: '',
    redirectRoute: '/settings',
  }
];

export const projectName = [
  "Product Preview & Mock up for Marke…",
  "Circle - Dashboard, Stats, and UI Kit",
  "Square - Social Media Plan",
  "Project Management Tool Dashboard",
  "Development - Circle Website",
  "Finance App Exploration",
  "Illustration",
  "Vitally.io Website",
  "Fastlegal.co Website Development",
  "Vitally.io Illustration"
  ];


export const teamNames = ['Iconspace Team','Sebo Studio','Utranus Team'];

export const teamIcons = [
  {
    key:1,
    teamTitle : 'Iconspace Team',
    icon: '', 
  },
  {
    key:2,
    teamTitle : 'Sebo Studio',
    icon: '', 
  },
  {
    key:3,
    teamTitle : 'Utranus Team',
    icon: '', 
  }
];

export const teamDetails = [
  {
    key: 1,
    icon: '',
    teamName: `${teamNames[1]}`,
    teamMember: [
      {
        key: 1,
        imgUrl: '',
      },
      {
        key: 2,
        imgUrl: '',
      }
    ]
  },
  {
    key: 2,
    icon: '',
    teamName: `${teamNames[0]}`,
    images: [
      {
        key: 1,
        imgUrl: '',
      },
      {
        key: 2,
        imgUrl: '',
      }
    ]
  },
];

export const userProfile = {
  avatar: '/src/assets/images/Profile.png',
  name: 'KA',
  color: '#FFC542',
  size: 26,
}

export const teamMembers = [
  {
    key: 1,
    avatar: '/src/assets/images/Shape.svg',
    name: 'KA',
    color: '#FFC542',
    size: 26,
  },
  {
    key: 2,
    avatar: '/src/assets/images/people/ahmad.svg',
    name: 'AD',
    color: '#FFC542',
    size: 26,
  },
  {
    key: 3,
    avatar: './src/assets/images/people/avian.svg',
    name: 'AN',
    color: '#FFC542',
    size: 26,
  },
  {
    key: 4,
    avatar: '/src/assets/images/people/geovani.svg',
    name: 'GV',
    color: '#FFC542',
    size: 26,
  },
  // {
  //   key: 5,
  //   avatar: '/src/assets/images/people/ibnu.svg',
  //   name: 'IN',
  //   color: '#FFC542',
  //   size: 26,
  // },
  // {
  //   key: 6,
  //   avatar: '/src/assets/images/people/indro.svg',
  //   name: 'ID',
  //   color: '#FFC542',
  //   size: 26,
  // },
  // {
  //   key: 7,
  //   avatar: '/src/assets/images/people/kelen.svg',
  //   name: 'KL',
  //   color: '#FFC542',
  //   size: 26,
  // },
  // {
  //   key: 8,
  //   avatar: '/src/assets/images/people/kukuh.svg',
  //   name: 'KK',
  //   color: '#FFC542',
  //   size: 26,
  // },
  // {
  //   key: 9,
  //   avatar: '/src/assets/images/people/ozi.svg',
  //   name: 'OZ',
  //   color: '#FFC542',
  //   size: 26,
  // },
  // {
  //   key: 10,
  //   avatar: '/src/assets/images/people/patya.svg',
  //   name: 'PT',
  //   color: '#FFC542',
  //   size: 26,
  // },
  // {
  //   key: 11,
  //   avatar: '/src/assets/images/people/yogie.svg',
  //   name: 'YG',
  //   color: '#FFC542',
  //   size: 26,
  // },
];

export const socialMediaIcons = [
  {
    name: 'Google',
    imgUrl: '/src/assets/images/Google.svg',
    text: '',
  },
  {
    name: 'Facebook',
    imgUrl: '/src/assets/images/Fb.svg',
    text: '',
  },
];

export const projectsCard = [
  {
    key: 1,
    title: 'Product Preview & Mock up for Marke…',
    subTitle: `${teamNames[0]}`,
    attachmentNumber: 3,
    timeLine: '7 days left',
    progressNumber: 50,
    teamMembers: 7
  },
  {
    key: 2,
    title: 'Circle - Dashboard, Stats, and UI Kit',
    subTitle: `${teamNames[0]}`,
    attachmentNumber: 3,
    timeLine: '1 days left',
    progressNumber: 50,
    teamMembers: 7
  },
  {
    key: 3,
    title: 'Square - Social Media Plan',
    subTitle: `${teamNames[2]}`,
    attachmentNumber: 3,
    timeLine: '8 days left',
    progressNumber: 50,
    teamMembers: 7
  },
  {
    key: 4,
    title: 'Project Management Tool Dashboard',
    subTitle: `${teamNames[2]}`,
    attachmentNumber: 3,
    timeLine: '10 days left',
    progressNumber: 50,
    teamMembers: 7
  },
  {
    key: 5,
    title: 'Development - Circle Website',
    subTitle: `${teamNames[0]}`,
    attachmentNumber: 3,
    timeLine: '14 days left',
    progressNumber: 50,
    teamMembers: 7
  },
];

export const statusCode = ['Pending', 'Run', 'Done']

export const projectsStatusCard = [
  {
    id: 1,
    title: 'Finance App Exploration',
    subTitle: `${teamNames[0]}`,
    attachmentNumber: 13,
    timeLine: 14,
    progressNumber: 85,
    taskAssign: '4/5',
    teamMembers: [
      {
        key: 1,
        avatar: '/src/assets/images/Shape.svg',
        name: 'KA',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 2,
        avatar: '/src/assets/images/people/ahmad.svg',
        name: 'AD',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 3,
        avatar: './src/assets/images/people/avian.svg',
        name: 'AN',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 4,
        avatar: '/src/assets/images/people/geovani.svg',
        name: 'GV',
        color: '#FFC542',
        size: 26,
      },
    ],
    status: `${statusCode[0]}`,
  },
  {
    id: 2,
    title: 'Illustration',
    subTitle: `${teamNames[0]}`,
    attachmentNumber: 2,
    timeLine: 10,
    progressNumber: 75,
    taskAssign: '7/8',
    teamMembers: [
      {
        key: 1,
        avatar: '/src/assets/images/Shape.svg',
        name: 'KA',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 2,
        avatar: '/src/assets/images/people/ahmad.svg',
        name: 'AD',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 3,
        avatar: './src/assets/images/people/avian.svg',
        name: 'AN',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 4,
        avatar: '/src/assets/images/people/geovani.svg',
        name: 'GV',
        color: '#FFC542',
        size: 26,
      },
    ],
    status: `${statusCode[0]}`,
  },
  {
    id: 3,
    title: 'Product Preview & Mock up for Market',
    subTitle: `${teamNames[0]}`,
    attachmentNumber: 13,
    timeLine: 2,
    progressNumber: 85,
    taskAssign: '4/5',
    teamMembers: [
      {
        key: 1,
        avatar: '/src/assets/images/Shape.svg',
        name: 'KA',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 2,
        avatar: '/src/assets/images/people/ahmad.svg',
        name: 'AD',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 3,
        avatar: './src/assets/images/people/avian.svg',
        name: 'AN',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 4,
        avatar: '/src/assets/images/people/geovani.svg',
        name: 'GV',
        color: '#FFC542',
        size: 26,
      },
    ],
    status: `${statusCode[1]}`,
  },
  {
    id: 4,
    title: 'Circle - Dashboard, Stats, and UI Kit',
    subTitle: `${teamNames[0]}`,
    attachmentNumber: 5,
    timeLine: 1,
    progressNumber: 75,
    taskAssign: '7/8',
    coverImage: '/src/assets/images/projectStatus.png',
    teamMembers: [
      {
        key: 1,
        avatar: '/src/assets/images/Shape.svg',
        name: 'KA',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 2,
        avatar: '/src/assets/images/people/ahmad.svg',
        name: 'AD',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 3,
        avatar: './src/assets/images/people/avian.svg',
        name: 'AN',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 4,
        avatar: '/src/assets/images/people/geovani.svg',
        name: 'GV',
        color: '#FFC542',
        size: 26,
      },
    ],
    status: `${statusCode[1]}`,
  },
  {
    id: 5,
    title: 'Square - Social Media Plan',
    subTitle: `${teamNames[2]}`,
    attachmentNumber: 0,
    timeLine: 8,
    progressNumber: 45,
    taskAssign: '2/10',
    teamMembers: [
      {
        key: 1,
        avatar: '/src/assets/images/Shape.svg',
        name: 'KA',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 2,
        avatar: '/src/assets/images/people/ahmad.svg',
        name: 'AD',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 3,
        avatar: './src/assets/images/people/avian.svg',
        name: 'AN',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 4,
        avatar: '/src/assets/images/people/geovani.svg',
        name: 'GV',
        color: '#FFC542',
        size: 26,
      },
    ],
    status: `${statusCode[1]}`,
  },
  {
    id: 6,
    title: 'Vitally.io Website',
    subTitle: `${teamNames[2]}`,
    attachmentNumber: 13,
    // timeLine: 2,
    progressNumber: 100,
    taskAssign: '10/10',
    teamMembers: [
      {
        key: 1,
        avatar: '/src/assets/images/Shape.svg',
        name: 'KA',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 2,
        avatar: '/src/assets/images/people/ahmad.svg',
        name: 'AD',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 3,
        avatar: './src/assets/images/people/avian.svg',
        name: 'AN',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 4,
        avatar: '/src/assets/images/people/geovani.svg',
        name: 'GV',
        color: '#FFC542',
        size: 26,
      },
    ],
    status: `${statusCode[2]}`,
  },
  {
    id: 7,
    title: 'Fastlegal.co Website Development',
    subTitle: `${teamNames[0]}`,
    attachmentNumber: 5,
    // timeLine: 2,
    progressNumber: 100,
    taskAssign: '7/8',
    teamMembers: [
      {
        key: 1,
        avatar: '/src/assets/images/Shape.svg',
        name: 'KA',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 2,
        avatar: '/src/assets/images/people/ahmad.svg',
        name: 'AD',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 3,
        avatar: './src/assets/images/people/avian.svg',
        name: 'AN',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 4,
        avatar: '/src/assets/images/people/geovani.svg',
        name: 'GV',
        color: '#FFC542',
        size: 26,
      },
    ],
    status: `${statusCode[2]}`,
  },
  {
    id: 8,
    title: 'Vitally.io Illustration',
    subTitle: `${teamNames[2]}`,
    attachmentNumber: 0,
    // timeLine: 2,
    progressNumber: 100,
    taskAssign: '2/10',
    teamMembers: [
      {
        key: 1,
        avatar: '/src/assets/images/Shape.svg',
        name: 'KA',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 2,
        avatar: '/src/assets/images/people/ahmad.svg',
        name: 'AD',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 3,
        avatar: './src/assets/images/people/avian.svg',
        name: 'AN',
        color: '#FFC542',
        size: 26,
      },
      {
        key: 4,
        avatar: '/src/assets/images/people/geovani.svg',
        name: 'GV',
        color: '#FFC542',
        size: 26,
      },
    ],
    status: `${statusCode[2]}`,
  },
  // {
  //   key: 1,
  //   title: 'Product Preview & Mock up for Marke…',
  //   subTitle: `${teamNames[0]}`,
  //   attachmentNumber: 13,
  //   timeLine: 2,
  //   progressNumber: 85,
  //   teamMembers: [
  //     {
  //       key: 1,
  //       avatar: '/src/assets/images/Shape.svg',
  //       name: 'KA',
  //       color: '#FFC542',
  //       size: 26,
  //     },
  //     {
  //       key: 2,
  //       avatar: '/src/assets/images/people/ahmad.svg',
  //       name: 'AD',
  //       color: '#FFC542',
  //       size: 26,
  //     },
  //     {
  //       key: 3,
  //       avatar: './src/assets/images/people/avian.svg',
  //       name: 'AN',
  //       color: '#FFC542',
  //       size: 26,
  //     },
  //     {
  //       key: 4,
  //       avatar: '/src/assets/images/people/geovani.svg',
  //       name: 'GV',
  //       color: '#FFC542',
  //       size: 26,
  //     },
  //   ],
  //   status: `${statusCode[1]}`,
  // },
  // {
  //   key: 2,
  //   title: 'Circle - Dashboard, Stats, and UI Kit',
  //   subTitle: `${teamNames[0]}`,
  //   attachmentNumber: 3,
  //   timeLine: '1 days left',
  //   progressNumber: 50,
  //   teamMembers: 7
  // },
  // {
  //   key: 3,
  //   title: 'Square - Social Media Plan',
  //   subTitle: `${teamNames[2]}`,
  //   attachmentNumber: 3,
  //   timeLine: '8 days left',
  //   progressNumber: 50,
  //   teamMembers: 7
  // },
  // {
  //   key: 4,
  //   title: 'Project Management Tool Dashboard',
  //   subTitle: `${teamNames[2]}`,
  //   attachmentNumber: 3,
  //   timeLine: '10 days left',
  //   progressNumber: 50,
  //   teamMembers: 7
  // },
  // {
  //   key: 5,
  //   title: 'Development - Circle Website',
  //   subTitle: `${teamNames[0]}`,
  //   attachmentNumber: 3,
  //   timeLine: '14 days left',
  //   progressNumber: 50,
  //   teamMembers: 7
  // },
];
export const activityFilters = [
  {
    key: '1',
    icon: '',
    label: 'Latest activity',
    // label: (
    //   <div
    //     style={{
    //       padding: 4,
    //     }}
    //   >
    //     Latest activity
    //   </div>
    // ),
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

export const activityCardDetails = [
  {
    key: 1,
    projectName: 'Square - New Logo design',
    time: '1:54pm',
    teamMember: {
      avatar: '/src/assets/images/people/ahmad.svg',
      name: 'RR',
      color: '#FFC542',
      size: 26,
    },
    updateTitle: 'On Iconspace - Senja Update & Modification, Reva Riveva checked off:',
    // subDetails: ['Collect & Research Data','Brainstorming','Create Moodboard'],
    subDetailsList:[{
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
    key: 2,
    projectName: 'Square - New Logo design',
    time: '1:54pm',
    teamMember: {
      avatar: '/src/assets/images/people/ahmad.svg',
      name: 'RR',
      color: '#FFC542',
      size: 26,
    },
    updateTitle: 'Kelen Indah commented on Iconspace - Senja Update & Modification,',
    subDetails: 'Please check your email. I have sent icon references for this project'
  },
  {
    key: 3,
    projectName: 'Square - New Logo design',
    time: '1:54pm',
    teamMember: {
      avatar: '/src/assets/images/people/ahmad.svg',
      name: 'RR',
      color: '#FFC542',
      size: 26,
    },
    updateTitle: 'Avian Rizky commented on Iconspace - Senja Update & Modification, ',
    subDetails: 'Ok thanks'
  },
  {
    key: 4,
    projectName: 'Square - New Logo design',
    time: '1:54pm',
    teamMember: {
      avatar: '/src/assets/images/people/ahmad.svg',
      name: 'RR',
      color: '#FFC542',
      size: 26,
    },
    updateTitle: 'Sam Tin uploaded a new photo Header Illustration #Exploration',
    subDetails: 'IMAGE'
  },
];

// export const activityCardDetails = [
//   {
//     projectName: 'Square - New Logo design',
//     time: '',
//     teamMember: '',
//     updateTitle: 'On Iconspace - Senja Update & Modification, Reva Riveva checked off:',
//     subDetails: ['Collect & Research Data','Brainstorming','Create Moodboard']
//   },
//   {
//     projectName: 'Square - New Logo design',
//     time: '',
//     teamMember: '',
//     updateTitle: 'Kelen Indah commented on Iconspace - Senja Update & Modification,',
//     subDetails: 'Please check your email. I have sent icon references for this project'
//   },
//   {
//     projectName: 'Square - New Logo design',
//     time: '',
//     teamMember: '',
//     updateTitle: 'Avian Rizky commented on Iconspace - Senja Update & Modification, ',
//     subDetails: 'Ok thanks'
//   },
//   {
//     projectName: 'Square - New Logo design',
//     time: '',
//     teamMember: '',
//     updateTitle: 'Sam Tin uploaded a new photo Header Illustration #Exploration',
//     subDetails: 'IMAGE'
//   },
// ];
