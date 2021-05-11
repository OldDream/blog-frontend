import { Avatar, Divider } from 'antd';
import style from './style.module.scss';

const Author = () => {
  return (
    <div className={style.author-div , style.common-box}>
      <div>
        <Avatar size={100} src='./head.jpg'></Avatar>
      </div>
      <div className="author-introduction">
        佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发，佛系开发。
      </div>
      <Divider>社交账号</Divider>
      <Avatar size={28} icon='github' className="account" />
      <Avatar size={28} icon='qq' className="account" />
      <Avatar size={28} icon='wechat' className="account" />
    </div>
  );
};

export default Author;
