import styled from "styled-components";
import img1 from '../../lib/image/project-icon.png'

const MainForm3Block = styled.div`
    margin-top: 3rem;
    background: #fafafa;
    height: 250px;
    div{
        text-align: center;
        padding-top: 30px;
        li{
            display: inline-block;
            width: 48%;
            text-align: left;
            font-size: initial;
            margin: 0 10px;
            a{
                display: block;
                text-decoration: none;
                padding: 25px;
                border: 1px solid #eeeeee;
            }
            h3{
                font-weight: 500;
                color: #004abf;
                font-size: 20px;
                padding: 0 0 10px;
                margin: 0;
            }
            p{
                color: #666;
                margin: 0 auto;
            }
            i{
                color: #666;
                float: left;

            }
           
        }

    }
`


const MainForm3 = () => {
    return (
        <MainForm3Block>
            <div>
                <ul>
                    <li>
                        <a href="/project/#comproject">
                            <h3>회사 프로젝트</h3>
                            <p>회사에서 진행한 프로젝트 입니다.</p>
                            <p>서비스 개발이 완료되어 현재 운영되고 있습니다.</p>
                            <div>
                                <i>상세보기→</i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/project/#toyproject">
                            <h3>개인 프로젝트</h3>
                            <p>다양한 기술을 습득하며 개발한 포트플리오 입니다.</p>
                            <p>학습용, 간단한 서비스 등의 개발 활동 입니다.</p>
                            <div>
                                <i>상세보기→</i>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </MainForm3Block>
    );
};

export default MainForm3;