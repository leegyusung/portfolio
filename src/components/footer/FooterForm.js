import styled from "styled-components";
import img1 from '../../lib/image/git.png';
import img2 from '../../lib/image/mail.png';

const FooterFormBlock = styled.div`
    //width: 100px;
    //position: absolute;
    //bottom: 0;
    background: #39424c;
    color: white;
    text-align: center;
`
const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
    padding: 40px 0px;

    .info span{
    display: inline;
    margin: 0 10px 0 0;
    color: white;
    font-size: 12px;
    float: left;
    }

    .link img{
       width: 28px;
       float: right;
       opacity: 0.6;
    }
`

const FooterForm = () => {
    return (
        <FooterFormBlock>
            <Wrapper>
                <div className="info">
                    <span>이규성 |</span>
                    <span>이메일 lgs7542@naver.com |</span>
                    <span>카카오톡 lgs7554</span>
                </div>
                <div className="link">
                    <a href="mailto:lgs7542@naver.com" title="이메일">
                        <img src={img2} alt=""></img>
                    </a>
                    <a href="https://github.com/leegyusung" target="_blank">
                        <img src={img1} alt=""></img>
                    </a>
                </div>
                <br />
                <div className="info">
                    <span>Copyright ⓒ 2021 Gyusung All Rights Reserved.</span>
                </div>
            </Wrapper>

        </FooterFormBlock >
    );
};

export default FooterForm;

