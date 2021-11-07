import styled from "styled-components";
import Responsive from "../common/Responsive";
import { Link } from "react-router-dom";
import img1 from '../../lib/image/softbank.jpeg';
import img2 from '../../lib/image/docomo.png'
import img3 from '../../lib/image/shop_react.jpeg'
import img4 from '../../lib/image/shop_node.jpeg';
import img5 from '../../lib/image/reciphoto.png';

const ProjectHeaderBlock = styled(Responsive)`
    padding-top: 7rem;
    a{
        text-decoration: none;
    }   
    .path{
        margin: 0 14px 0 0;;
        font-size: 12px;
        color: #333;
        &::after{
            content: " >";
        }
    }
    .path-on{
        font-size: 12px;
        color: #004abf;
        font-weight: 500;
    }
    h2{
        color: #333;
        font-size: 28px;
        font-weight: 400;  
    }
    h2.com-title{
        margin-top: 4rem;
    }
    p{
        color: #333;
        font-size: 16px;
        line-height: 160%;
        margin: 0 auto;
    }
    div.comproject{
        border-bottom: 1px solid #ebebeb
    }

    ul,li{
        list-style: none;
        display: flex;
    
    }
    ul.list-box{
        padding: 0;
        margin-bottom: 3rem;
    }
    div.intro{
        margin: 0 28px 0 0;
    }
    div.detail{
        margin: 0 28px 0 0;
        color: #333;
        font-size: 12px;
    }
    div.details{
        p{
            color: #333;
            font-size: 11px;
            margin: 0;
        }
    }

    div.toyproject{
        margin-bottom: 3rem;

        ul.list-box2{
            padding: 0;

        li{
            
            width: 33.3%;
            padding: 0 35px 31px 0;
            display: inline-block;

            div.sub{
                margin-top: 3rem;
            }
            div{
                margin: 0;
                font-size: 13px;
                //padding-top: 3rem;
                color: #333;
            }
        }   
        }
    }

   
`

const ProjectHeader = () => {
    return (
        <ProjectHeaderBlock>
            <div>
                <p>
                    <Link to='/'>
                        <span className="path">메인</span>
                    </Link>
                    <span className="path-on">프로젝트</span>
                </p>
            </div>
            <div>
                <h2>개발자로써 개발에 참여한 프로젝트를 정리 했어요</h2>
            </div>
            <div className="comproject">
                <h2 id="comproject" className="com-title">회사 프로젝트</h2>
                <p>구성원으로써 참가했던 프로젝트입니다.</p>
                <p>보안상 간략하게 나타내었습니다.</p>
                <ul className="list-box">
                    <li>
                        <div className="intro">
                            <div className="logo">
                                <img src={img1} alt="softbank" width="50px"></img>
                            </div>
                        </div>
                        <div className="detail">
                            <span>소프트뱅크</span>
                            <div>2021.5 ~ 진행중</div>
                            <div>株）トマト</div>
                        </div>
                        <div className="details">
                            <p>Angular.js, javascript(ES6), REST API, Html/Css</p>
                            <p>VIP, 임원 사내 승인 페이지 구축</p>
                            <p>기획・설계서작성・제조・테스트</p>
                        </div>
                    </li>
                </ul>
                <ul className="list-box">
                    <li>
                        <div className="intro">
                            <div className="logo">
                                <img src={img1} alt="softbank" width="50px"></img>
                            </div>
                        </div>
                        <div className="detail">
                            <span>소프트뱅크</span>
                            <div>2020.11 ~ 2021.4</div>
                            <div>株）トマト</div>
                        </div>
                        <div className="details">
                            <p>javascript(ES6), REST API, JWT, Docusign</p>
                            <p>사내프로그램의 전자서명 프로그램 구축</p>
                            <p>설계서작성・제조・테스트</p>
                        </div>
                    </li>
                </ul>
                <ul className="list-box">
                    <li>
                        <div className="intro">
                            <div className="logo">
                                <img src={img1} alt="softbank" width="50px"></img>
                            </div>
                        </div>
                        <div className="detail">
                            <span>소프트뱅크</span>
                            <div>2020.6 ~2020.10</div>
                            <div>株）トマト</div>
                        </div>
                        <div className="details">
                            <p>java, REST API, Mulesoft</p>
                            <p>데이터 통합 프로그램 구축</p>
                            <p>기획・설계서작성・제조・테스트</p>

                        </div>
                    </li>
                </ul>
                <ul className="list-box">
                    <li>
                        <div className="intro">
                            <div className="logo">
                                <img src={img1} alt="softbank" width="50px"></img>
                            </div>
                        </div>
                        <div className="detail">
                            <span>소프트뱅크</span>
                            <div>2019.9 ~ 2020.5</div>
                            <div>株）トマト</div>
                        </div>
                        <div className="details">
                            <p>javascript(ES6), Angular.js</p>
                            <p>소프트뱅크 사내 업무관리 프로그램 재구축</p>
                            <p>설계서작성・제조・테스트</p>

                        </div>
                    </li>
                </ul>

                <ul className="list-box">
                    <li>
                        <div className="intro">
                            <div className="logo">
                                <img src={img2} alt="docomo" width="50px"></img>
                            </div>
                        </div>
                        <div className="detail">
                            <span>도코모</span>
                            <div>2019.6 ~ 2019.8</div>
                            <div>株）トマト</div>
                        </div>
                        <div className="details">
                            <p>JavaScript(ES6),Html/Css, Angular.js , SVN</p>
                            <p>도코모 모바일부 유지보수 및 기능 추가</p>
                            <p>제조・테스트・유지보수</p>

                        </div>
                    </li>
                </ul>
            </div>

            <div className="toyproject">
                <h2 id="toyproject" className="com-title">개인 프로젝트</h2>
                <p>다양한 기술을 학습하기위한 프로젝트 입니다.</p>
                <ul className="list-box2">
                    <li>
                        <a href="https://github.com/leegyusung/Shop_react" target="_blank">
                            <img src={img3} alt="shop_react" width="360px" height="200px"></img>
                            <div className="sub">리액트로 만든 쇼핑몰</div>
                            <div>React,NodeJS,ES6,Passport,JWT,Express,MongoDB,mongoose</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/leegyusung/Shop_node" target="_blank">
                            <img src={img4} alt="shop_react" width="360px" height="200px"></img>
                            <div className="sub">노드로 만든 쇼핑몰</div>
                            <div>NodeJS,Es6,Passport,Express,Sequelize,Google Analytics,Heroku</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/leegyusung/reciphoto-1" target="_blank">
                            <img src={img5} alt="reciphoto" width="360px" height="200px"></img>
                            <div className="sub">출장 관리 프로그램</div>
                            <div>Spring,JQuery,OpenCV,Google Calendar,Analytics</div>
                        </a>
                    </li>
                </ul>
            </div>
        </ProjectHeaderBlock >
    );
};

export default ProjectHeader;