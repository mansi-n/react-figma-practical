
import { useLocation } from "react-router-dom";
import ContentComp from "../../components/ContentComp";
import { Layout, Space } from 'antd';
import HeaderComp from "../../components/HeaderComp";
import SiderComp from "../../components/SiderComp";
const { Header, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 0,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  padding: 20
};
const siderStyle = {
  backgroundColor: 'white',
  height: '954px',
  minWidth: '250px',
};

const Projects = () => {
const location = useLocation()

  return (
    <>
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    // size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}><HeaderComp/></Header>
      <Layout hasSider>
        <Sider style={siderStyle}><SiderComp/></Sider>
        <Layout style={contentStyle}>
              <Content style={contentStyle}><ContentComp routerLink={location.pathname}/></Content>
        </Layout>

      </Layout>
    </Layout>
  </Space>
    </>

  )
}

export default Projects;
