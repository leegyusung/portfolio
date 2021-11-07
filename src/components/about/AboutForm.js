import styled from 'styled-components'
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';
import img1 from '../../lib/image/web.png';
import img2 from '../../lib/image/javascript.png'
import img3 from '../../lib/image/flow.png';
import img4 from '../../lib/image/trust.png'
import img5 from '../../lib/image/frontend.png'
import img6 from '../../lib/image/backend.png'
import img7 from '../../lib/image/server.png'
import html from '../../lib/image/frontend/skill_html.png'
import css from '../../lib/image/frontend/skill_css.png'
import javascript from '../../lib/image/frontend/skill_javascript.png'
import react from '../../lib/image/frontend/skill_react.png'
import jquery from '../../lib/image/frontend/skill_jquery.png';
import angular from '../../lib/image/frontend/skill_angular.png';

import java from '../../lib/image/backend/skill_java.png';
import mongo from '../../lib/image/backend/skill_mongo.png';
import sql from '../../lib/image/backend/skill_mysql.png';
import nodejs from '../../lib/image/backend/skill_nodejs.png';
import springs from '../../lib/image/backend/skill_spring.png';

import git from '../../lib/image/dev/skill_git.png';
import svn from '../../lib/image/dev/skill_svn.png';
import heroku from '../../lib/image/dev/skill_heroku.png';

const AboutFormBlock = styled(Responsive)`
    padding-top: 7rem;
    div.header{
        margin-bottom: 3rem;
    }

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
    p{
        color: #333;
        font-size: 16px;
        line-height: 160%;
        //margin: 0 auto;
    }
    h2{
        color: #333;
        font-size: 28px;
        font-weight: 400;
        margin: 0;
    }
    ul{
        list-style: none;
    }
`
const AboutForm1 = styled.div`
    margin-top: 5rem;
    ul{
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-around;
    li{
       
        text-align: center;
        display: inline-block;
        text-align: center;
        background: #f2f2f2;
        padding: 20px;
        width: 170px;
        border-radius: 50%;
        box-sizing: border-box;
        margin :0 30px 0 30px
        }
        p{
            margin: 0 auto;
        }
    }
    img{
        width: 64px;
        opacity: 0.9;
    }
`
const AboutForm2 = styled.div`
    margin-top: 3rem;
    h2{
        color: #333;
        font-size: 24px;
        font-weight: 300%;
    }
    p{
        color: #333;
        font-size: 16px;
        line-height: 160%;
    }
    border-bottom: 1px solid #ebebeb;
`
const AboutForm3 = styled.div`
    
    margin-top:3rem;
    margin-bottom: 3rem;
    h2{
        color: #333;
        font-size: 24px;
        font-weight: 300%;
    }
    div.first-skills{
        margin-top: 4rem;
        margin-bottom: 4rem;
    }

    div{
       // margin-top: 3rem;
        div.detail{

            display: flex;
            h3{
                font-weight: 300;
                margin: 0;
            }
            p{
                margin: 0;
            }
            div.image{
                margin-right: 3rem;
            }

            div.title{
                width: 15%;
                padding-top: 2.5rem;
                color: #333;
                //font-weight: 300;
            }
        }
        img{
            margin: 0px 24px 0 0;
            opacity: 0.7;
        }
    }
    div.skill{
        ul{
            display: flex;
            
        li{
          margin-right: 1rem;
          width: 50%;
        }
        }
        h3{
            padding-top: 5px;
            font-size: 14.5px;
            
            span{
                color: blue;
            }
        }
        img{
            float: left;
            width: 48px;
            height: 48px;
        }
        span{
            font-size: 10px;
        }
    }
`


const AboutForm = () => {
    return (
        <AboutFormBlock>
            <div className="header">
                <p>
                    <Link to='/'>
                        <span className="path">메인</span>
                    </Link>
                    <span className="path-on">소개</span>
                </p>
            </div>
            <div>
                <h2>웹 브라우저로 사람을 연결하는 개발자</h2>
                <h2>이규성에 대해 알아보세요!</h2>
            </div>
            <AboutForm1>
                <ul>
                    <li>
                        <img src={img1} alt="web"></img>
                        <p>웹 개발자</p>
                        <p>이규성</p>
                    </li>

                    <li>
                        <img src={img2} alt="javascript"></img>
                        <p>매력적인</p>
                        <p>JavaScript</p>
                    </li>

                    <li>
                        <img src={img3} alt="flow"></img>
                        <p>문제의식</p>
                        <p>강인한 끈기</p>
                    </li>

                    <li>
                        <img src={img4} alt="trust"></img>
                        <p>핵심가치</p>
                        <p>소통</p>
                    </li>
                </ul>
            </AboutForm1>
            <AboutForm2>
                <h2>개발자 소개</h2>
                <p>대학교 시절, 전공과목으로 C언어,아두이노를 접하며 프로그래밍을 통해 무언가를 구현하는 것에 대해서 흥미를 느끼기 시작하였습니다.</p>
                <p>대학교 졸업 후, 한국무역협회에서 주관하는 SC IT MASTER 이라는 교육 과정 이수하여 일본 IT 회사에서 첫 사회생활을 시작하였습니다</p>
                <p>JavaScript을 기반으로 최근에는 React, NodeJS에 관심을 느끼어 웹 프로그램을 개발하고 있습니다.</p>
                <p>일본 현장에서 일하며 느낀 경험을 토대로 성장하고 있으며 새로운 기술에 적극적으로 도전합니다.</p>
                <br />
                <p>반갑습니다, 소통을 중시하는 개발자 이규성입니다!</p>

            </AboutForm2>
            <AboutForm3>
                <h2>기술스텍 소개</h2>
                <p>현업에서 사용하여 프로젝트를 진행하거나 관심있게 학습해본 경험이 있는 기술스텍입니다.</p>
                <p>실무 토이는 해당언어를 사용하여 결과물을 도출해본 경험이 있으며 개발된 소스코드를 이해할 수 있습니다.</p>
                <div className="first-skills">
                    <div className="detail">
                        <div className="image">
                            <img src={img5} alt="frontend"></img>
                        </div>
                        <div className="title">
                            <h3>Frontend</h3>
                            <p>SPA프레임워크</p>
                        </div>
                        <div className="skill">
                            <ul>
                                <li>
                                    <img src={html} alt="html"></img>
                                    <div>
                                        <h3>HTML <span>실무</span></h3>
                                        <span>태그를 활용한 마크업</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={css} alt="Css"></img>
                                    <div>
                                        <h3>Css <span>실무</span></h3>
                                        <span>화면 디자인</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={react} alt="React"></img>
                                    <div>
                                        <h3>React <span>토이</span></h3>
                                        <span>Hook,Redux,CSS-in-JS 활용</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={javascript} alt="JavaScript"></img>
                                    <div>
                                        <h3>Javascript <span>실무</span></h3>
                                        <span>ES6 자바스크립트 문법 활용</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={jquery} alt="jQuery"></img>
                                    <div>
                                        <h3>JQuery <span>실무</span></h3>
                                        <span>제이쿼리 문법 활용</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={angular} alt="angular"></img>
                                    <div>
                                        <h3>Angular.js <span>실무</span></h3>
                                        <span>앵귤러.js 문법 활용</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="first-skills">
                    <div className="detail">
                        <div className="image">
                            <img src={img6} alt="backend"></img>
                        </div>
                        <div className="title">
                            <h3>Backend</h3>
                            <p>MVC웹개발</p>
                        </div>
                        <div className="skill">
                            <ul>
                                <li>
                                    <img src={java} alt="Java"></img>
                                    <div>
                                        <h3>Java <span>실무</span></h3>
                                        <span>객체지향적 설계</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={springs} alt="Spring"></img>
                                    <div>
                                        <h3>Spring <span>실무</span></h3>
                                        <span>라이브러리를 활용한 웹 개발</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={nodejs} alt="Node"></img>
                                    <div>
                                        <h3>Node <span>토이</span></h3>
                                        <span>Express 기반의 REST API 구축</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={sql} alt="Sql"></img>
                                    <div>
                                        <h3>MySql <span>실무</span></h3>
                                        <span>SQL 작성</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={mongo} alt="Mongo"></img>
                                    <div>
                                        <h3>MongoDB <span>토이</span></h3>
                                        <span>SQL 작성</span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="first-skills">
                    <div className="detail">
                        <div className="image">
                            <img src={img7} alt="server"></img>
                        </div>
                        <div className="title">
                            <h3>Devops</h3>
                            <p>형상관리 툴 & 서버 배포</p>
                        </div>
                        <div className="skill">
                            <ul>
                                <li>
                                    <img src={git} alt="git"></img>
                                    <div>
                                        <h3>Git <span>실무</span></h3>
                                        <span>기본적인 사용과 브랜치 활용</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={svn} alt="svn"></img>
                                    <div>
                                        <h3>SVN <span>실무</span></h3>
                                        <span>형상관리 툴 활용</span>
                                    </div>
                                </li>
                                <li>
                                    <img src={heroku} alt="heroku"></img>
                                    <div>
                                        <h3>Heroku <span>토이</span></h3>
                                        <span>서버 배포</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </AboutForm3>
        </AboutFormBlock>
    );
};

export default AboutForm;