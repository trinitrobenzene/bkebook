import { MenuOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        key: '1',
        type: 'group',
        label: 'Sách mới',
        children: [
            {
                label: 'Giáo trình',
                key: '1-1',
              },
              {
                label: 'Tiểu thuyết',
                key: '1-2',
              },
              {
                label: 'Truyện tranh',
                key: '1-3',
              },
        ],
      },
      {
        key: '2',
        type: 'group',
        label: 'Sách Cũ',
        children: [
            {
                label: 'Giáo trình',
                key: '1-1',
              },
              {
                label: 'Tiểu thuyết',
                key: '1-2',
              },
              {
                label: 'Truyện tranh',
                key: '1-3',
              },
        ],
      },

];
const Drop = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <MenuOutlined style={{fontSize: 30}} />      
    </Space>
    </a>
  </Dropdown>
);
export default Drop;