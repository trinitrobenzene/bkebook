import React from 'react';
import { UserOutlined,FileDoneOutlined,DollarOutlined, StarOutlined } from '@ant-design/icons';
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
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100vh', borderRight: 0 }}
            items={[
              {label: "Hồ sơ của tôi", key:"profile", icon:<UserOutlined/>},
              {label: "Lịch sử mua hàng", key:"purchaseOrder", icon: <FileDoneOutlined/>},
              {label: "Lịch sử bán hàng", key: "sellOrder", icon: <DollarOutlined/>},
              {label: "Lịch sử tích điểm", key: "rewardHistory", icon: <StarOutlined/>}
            ]}
          />
        </Sider>
      </Layout>
    </>
  )
}

export default MenuUser