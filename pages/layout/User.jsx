import { Col, Menu, Row } from 'antd';
import React from 'react';
import MenuUser from '../../components/MenuUser';
import { Outlet } from 'react-router-dom';

const User = () => {
  return (
    <>
        <Row >
            <Col span={5} style={{ backgroundColor:"grey"}}>
              <MenuUser/>
            </Col>
            <Col span ={19} style={{padding:"10px 30px"}}>
              <Outlet/>
            </Col>
        </Row>
    </>
  )
}

export default User