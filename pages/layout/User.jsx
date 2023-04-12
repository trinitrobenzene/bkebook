import { Col, Menu, Row } from 'antd';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import MenuUser from '../../components/MenuUser';
import { useGlobalCtx } from '../../components/GlobalContext';

const User = () => {
  const {globalUser} = useGlobalCtx();
  if (!globalUser) return <Navigate to="/" />
  return (
    <>
      <Row >
        <Col span={5}>
          <MenuUser />
        </Col>
        <Col span={19} style={{ padding: "10px 30px" }}>
          <Outlet />
        </Col>
      </Row>
    </>
  )
}

export default User