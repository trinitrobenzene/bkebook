import { MenuOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        key: '1',
        type: 'group',
        label: 'Sách mới',
        children: [
            {
                label: 'Chính trị – pháp luật',
                key: '1-1',
              },
              {
                label: 'Khoa học công nghệ – Kinh tế',
                key: '1-2',
              },
              {
                label: 'Văn học nghệ thuật',
                key: '1-3',
              },
              {
                label: 'Văn hóa xã hội – Lịch sử',
                key: '1-4',
              },
              {
                label: 'Giáo trình',
                key: '1-5',
              },
              {
                label: 'Truyện, tiểu thuyết',
                key: '1-6',
              },
              {
                label: 'Tâm lý, tâm linh, tôn giáo',
                key: '1-7',
              },
              {
                label: 'Thiếu nhi',
                key: '1-8',
              },
        ],
      },
      {
        key: '2',
        type: 'group',
        label: 'Sách Cũ',
        children: [
            {
                label: 'Chính trị – pháp luật',
                key: '2-1',
              },
              {
                label: 'Khoa học công nghệ – Kinh tế',
                key: '2-2',
              },
              {
                label: 'Văn học nghệ thuật',
                key: '2-3',
              },
              {
                label: 'Văn hóa xã hội – Lịch sử',
                key: '2-4',
              },
              {
                label: 'Giáo trình',
                key: '2-5',
              },
              {
                label: 'Truyện, tiểu thuyết',
                key: '2-6',
              },
              {
                label: 'Tâm lý, tâm linh, tôn giáo',
                key: '2-7',
              },
              {
                label: 'Thiếu nhi',
                key: '2-8',
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