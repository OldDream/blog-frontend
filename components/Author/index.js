import { Avatar, Divider } from 'antd';
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import style from './style.module.scss';

const Author = () => {
  return (
    <div className={`common-box ${style.authorDiv}`}>
      <div>
        <Avatar size={100} src="/head.jpg"></Avatar>
      </div>
      <div className={style.authorIntroduction}>
        前端~
      </div>
      <Divider>Contact me</Divider>
      <a href="https://github.com/OldDream">
        <Avatar size={28} icon={<GithubOutlined />} className={style.account} />
      </a>
      {/* <Avatar size={28} icon={<QqOutlined />} className={style.account} />
      <Avatar size={28} icon={<WechatOutlined />} className={style.account} /> */}
    </div>
  );
};

export default Author;
