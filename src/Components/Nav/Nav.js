import React, { Component } from "react";
import { Link } from "react-router-dom";
import check from "../../Img/check.png";
import bell from "../../Img/bell.png";
import comment from "../../Img/comment.png";
import flag from "../../Img/flag.png";
import logout from "../../Img/logout.png";
import "./Nav.scss";

export class Nav extends Component {
  render() {
    return (
      <div className="myclass-nav">
        <div className="nav-contents">
          <div className="nav-statics">
            <img src={check} className="nav-check" alt="" />
            <Link to={"/statics"} className="nav-statics-content">
              통계
            </Link>
          </div>
          <div className="nav-line"></div>
          <div className="nav-alarm">
            <img src={bell} className="nav-bell" alt="" />
            <Link to={"/myclass"} className="nav-alarm-content">
              운영 알림
            </Link>
          </div>
          <div className="nav-myclass">
            <img src={flag} className="nav-flag" alt="" />
            <Link to={"/myclass"} className="nav-myclass-content">
              내 클래스
            </Link>
          </div>
          <div className="nav-commentmanage">
            <img src={comment} className="nav-comment" alt="" />
            <Link to={"/commentmanage"} className="nav-comment-content">
              댓글 관리
            </Link>
          </div>
          <div className="nav-line"></div>
          <div className="nav-logout">
            <img src={logout} className="nav-logout" alt="" />
            <Link className="nav-logout-content">로그아웃</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
