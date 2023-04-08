import React from 'react';
import { UserOutlined,FileDoneOutlined,DollarOutlined } from '@ant-design/icons';
// import { MenuProps } from 'antd';
import { Layout,Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const {Sider} = Layout


const items2 = [UserOutlined, FileDoneOutlined, DollarOutlined].map(
  (icon, index) => {
    const key = (index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      // children: new Array(4).fill(null).map((_, j) => {
      //   const subKey = index * 4 + j + 1;
      //   return {
      //     key: subKey,
      //     label: `option${subKey}`,
      //   };
      // }),
    };
  },
);

const MenuUser = () => {
  const navigate = useNavigate();
  return (
    <>  
      <Layout style={{height:"100vh"}}>
        <Sider width="100%">
          <Menu
            onClick={({key})=>{navigate(key)}}
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={[
              {label: "Profile", key:"profile", icon:<UserOutlined/>},
              {label: "PurchaseOrder", key:"purchaseOrder", icon: <FileDoneOutlined/>},
              // {label: "SaleOrder", icon: <DollarOutlined/>}
            ]}
          />
        </Sider>
      </Layout>
    </>
  )
}

export default MenuUser