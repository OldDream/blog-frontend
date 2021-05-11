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
        佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发。
      </div>
      <Divider>Contact me</Divider>
      <Avatar size={28} icon={<GithubOutlined />} className={style.account} />
      {/* <Avatar size={28} icon={<QqOutlined />} className={style.account} />
      <Avatar size={28} icon={<WechatOutlined />} className={style.account} /> */}
    </div>
  );
};

export default Author;
