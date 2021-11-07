import styled from "styled-components";
import img1 from '../../lib/image/frontend.png'
import img2 from '../../lib/image/backend.png';
import img3 from '../../lib/image/server.png';

const MainForm2Block = styled.div`
    margin-top: 3rem;
`
const MainForm2Label = styled.div`
    font-size: 24px;
    color: #004abf;
    text-align: center;
    font-weight: 500;
`
const MainForm2Content = styled.div`
p.title{
    text-align: center;
    color: #666;
    margin: 0;
}
p{
    color: #666;
    padding: 0;
    font-size: 12px;

}
ul{
    margin-top: 3rem;
li{
    text-align: center;
    display: inline-block;
    width: 33%;
    img{
        width: 90px;
    }
}
}

`

const MainForm2 = () => {
    return (
        <MainForm2Block>
            <MainForm2Label>
                <p>Skills</p>
            </MainForm2Label>
            <MainForm2Content>
                <p className="title">웹 개발 파트별로 간략히 정리한 기술 스택입니다.</p>
                <p className="title">분야별 기술에 대하여 더 자세한 내용은 소개 페이지에서 확인 하실 수 있습니다.</p>
                <ul>
                    <li>
                        <img src={img1} alt='img'></img>
                        <p>HTML・CSS・JQuery</p>
                        <p>React.js・Angular.js SPA 개발</p>
                    </li>
                    <li>
                        <img src={img2} alt='img'></img>
                        <p>Java・Node.js 개발</p>
                        <p>MySQL・MongoDB 쿼리 작성</p>
                    </li>
                    <li>
                        <img src={img3} alt='img'></img>
                        <p>Git・SVN 버전관리</p>
                        <p>Heroku 서버배포</p>
                    </li>
                </ul>
            </MainForm2Content>
        </MainForm2Block>
    );
};

export default MainForm2;