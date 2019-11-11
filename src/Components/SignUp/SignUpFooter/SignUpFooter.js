import React, { Component } from "react";
import SVG from "Img/SVG.js";
// import kakao from "Img/kakao_logo.png";
import "./SignUpFooter.scss";

export class SignUpFooter extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container-wrapper">
          <div className="footer-container">
            <div className="footer-menu-container">
              <div className="menu-container">
                <div className="in-menu-container">
                  <div className="menu-title">위코드101</div>
                  <div>홈</div>
                  <div>채용</div>
                </div>
              </div>
              <div className="menu-container">
                <div className="in-menu-container">
                  <div className="menu-title">크리에이터</div>
                  <div>지원하기</div>
                </div>
              </div>
              <div className="menu-container">
                <div className="in-flex-container">
                  <div className="menu-title">고객센터</div>
                  <div>오전 10시 ~ 오후 7시 (주말, 공휴일 제외)</div>
                </div>
                <div className="in-flex-container">
                  <button className="contact-btn">
                    <div>
                      <SVG width="18" height="18" d="kakao" />
                    </div>
                    <span>
                      <div>문의하기</div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="footer-info-container">
              <div className="info-container">
                <div className="info-left">
                  <div>Wecode101 Inc.</div>
                  <span>이용약관</span>
                  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <span>개인정보 처리방침</span>
                  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <span>사업자 정보 확인</span>
                </div>
                <div className="info-right">
                  <div className="footer-discription">
                    (주)위코드101 | 대표 박세환 | 개인정보보호 책임자 박충식 |
                    전화번호 : 02-1234-5678 | 제휴/협력 문의 brand@wecode101.com
                    | 서울특별시 중구 테헤란로 427 위워크타워 7층 |
                    사업자등록번호 : 123-45-67890 | 통신판매업신고 :
                    2020-서울강남구-1234 (주)위코드101은 통신판매중개자이며
                    통신판매의 당사자가 아닙니다. 따라서 (주)위코드101은 상품,
                    거래정보 및 거래에 대하여 책임을 지지 않습니다.
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-social-container">
              <div className="social-flex-container">
                <div className="social-container">
                  <span className="youtube-icon">
                    <SVG
                      width="20"
                      height="20"
                      d="youtube"
                      fill="rgb(237, 239, 240)"
                    />
                  </span>
                  <span className="facebook-icon">
                    <SVG
                      width="20"
                      height="20"
                      d="facebook"
                      fill="rgb(237, 239, 240)"
                    />
                  </span>
                  <span className="instagram-icon">
                    <SVG
                      width="20"
                      height="20"
                      d="instagram"
                      fill="rgb(237, 239, 240)"
                    />
                  </span>
                  <span className="google-icon">
                    <SVG
                      width="20"
                      height="20"
                      d="google"
                      fill="rgb(237, 239, 240)"
                    />
                  </span>
                  <span className="apple-icon">
                    <SVG
                      width="20"
                      height="20"
                      d="apple"
                      fill="rgb(237, 239, 240)"
                    />
                  </span>
                  {/* <span className="inter-app-icon">
                    <div className="app-icon"></div>
                    <span className="app-text">앱 다운로드</span>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default SignUpFooter;
