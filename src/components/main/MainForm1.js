import styled, { keyframes } from "styled-components";
import img_main from '../../lib/image/visual.png';
import img_human from '../../lib/image/human.png'



const typing = keyframes`
   0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`

const MainForm1Block = styled.div`
    padding-top: 5rem;
    margin: 0 auto;

    section{
        position: relative;
        background: url(${img_main});
        height: 450px;
    }
    .visual{
        margin: 0 auto;
    }

    .logo{
    position: absolute;
    font-size: 36px;
    color: #004abf;
    line-height: 80px;
    margin-left: 30rem;
    margin-top: 8rem;
    
     h1{
         margin: 0;
         color: #666;
         font-size: 20px;
         line-height: 20px;
     }

     .typing{
        white-space: nowrap;
        position: absolute;
        color: transparent;
        margin-top: 1rem;
        margin-left: -11.2rem;
        transform: translate(-50%, -50%);
     }

     .typing::after{
         content: "도태되지 않는 개발자가 되기 위해 노력합니다.";
         position: absolute;
        // top: 0;
        // left: 0;
         //width: 100%;
         //height: 100%;
         color: #666;
         overflow: hidden;
         border-right: 1px solid black;
        animation: ${typing} 4s steps(31) infinite;
     }
}

    .human{
    position: absolute;
    right: 450px;
    top: 140px;
    }
 

`



const MainForm1 = () => {
    return (
        <MainForm1Block>
            <section>
                <div className="visual">
                    <div className="logo">안녕하세요,
                        <div>
                            <h1>끈기와 열정으로 준비된 개발자 이규성입니다.</h1>
                            <h1 className="typing">도태되지 않는 개발자가 되기 위해 노력합니다.</h1>
                        </div>
                    </div>
                    <img className="human" src={img_human} alt="img"></img>
                </div>
            </section>
        </MainForm1Block>
    );
};

export default MainForm1;