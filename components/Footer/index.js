const Footer = () => (
  <div className="footer-div">
    <a href="https://beian.miit.gov.cn/" target="_blank">
      <p>闽ICP备2021006708号</p>
    </a>
    <div className="police">
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35021102001027"
      >
        <img src="/police.png" />
        <p>闽公网安备 35021102001027号</p>
      </a>
    </div>

    <style jsx>{`
      .footer-div {
        width: 100%;
        padding: 1rem;
        text-align: center;
      }
      .footer-div > a{
        display: inline-block;
        color: #939393 !important;
        text-decoration: none;
        height: 20px;
        line-height: 20px;
      }
      .footer-div p {
        float: left;
        height: 20px;
        line-height: 20px;
        margin: 0px 0px 0px 5px;
        color: #939393;
      }
      .police {
        width: 300px;
        margin-left: 32px;
        display: inline-block;
        overflow:hidden;
      }
      .police img {
        float: left;
      }
      
    `}</style>
  </div>
);

export default Footer;
