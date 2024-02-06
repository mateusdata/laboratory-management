import React, { useContext, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, ConfigProvider, Space, Dropdown } from 'antd';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { Context } from '../context/authContext';
const { Header, Sider, Content } = Layout;
const App = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const {logout} = useContext(Context);

  const items = [
    {
      label: (
        <Link to={"/login"}>
          Painel
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to={"/login"}>
          Configurações
        </Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link onClick={logout} to={"/login"}>
          Sair
        </Link>
      ),
      key: '1',
    },


  ];
  return (
    <Layout>
      <Sider width={270} className='h-screen max-h-screen' trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical  " />
        <ConfigProvider theme={{
          components:{
            Menu:{
              itemColor:"white",
              itemActiveBg:undefined,
              colorInfoActive:"red",
              colorBgContainer:"red",
              colorBgBase:"red",
              itemHoverColor:"white",
              itemBg:undefined,
              itemSelectedBg:"#377b9e",
              itemSelectedColor:"white",

            }
          }
        }}>

        <Menu
         className=' bg-[#0284C7]  h-full'
         
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Página Inicial',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Laboratórios',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Administração',
            },
          ]}
        />
        </ConfigProvider>
      </Sider>
      <Layout className='bg-white'>
        <Header
          style={{
            padding: 0,
            background: "#F6F8FA",
          }}
        >
         <div className='flex justify-between '>
         <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          
          />
          <div  className=' flex flex-1 items-center justify-end px-8 gap-1'>
            <span>Murilo </span>
            <Dropdown
              menu={{ items }}>
              <button onClick={(e) => e.preventDefault()}>
                <Space className='cursor-pointer'>
                  <Avatar size={40} style={{ backgroundColor: 'black' }} icon={<UserOutlined />} />
                </Space>
              </button>
            </Dropdown>
          <Avatar className='bg-orange-500'>
            M
          </Avatar> 
          
          </div>
         </div>
        </Header>
        <Content
        className='overflow-y-scroll'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            maxHeight:"80vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
        <Footer>footer</Footer>

      </Layout>
    </Layout>
  );
};
export default App;