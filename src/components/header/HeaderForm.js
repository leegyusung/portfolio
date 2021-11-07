import styled from 'styled-components'
import { Link } from 'react-router-dom';
import $ from 'jquery'
import { useEffect, useState } from 'react';

const HeaderFormBlock = styled.div`
    position: fixed;
    //width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background: #fff;
`
const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    height: 81px;
    position: relative;
    display: flex;
    align-items: center;  

    div.logo{
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-left: 3rem;
    color: #004abf;
    }

    li.menu{
        display: inline-block;
        margin-left: 3rem;
        font-size: 16px;
        color: #666;    
    }
   

    a{
        text-decoration: none;
        color: #666;
        &:hover{
            color: #004abf;
        }
    }
  
    
`


const HeaderForm = () => {



    return (
        <HeaderFormBlock>
            <Wrapper>
                <Link to="/">
                    <div className="logo">DEVGYUSUNG</div>
                </Link>
                <ul>
                    <li className='menu'>
                        <Link to='/about'>
                            소개
                        </Link>
                    </li>
                    <li className='menu'>
                        <Link to='/project'>
                            프로젝트
                        </Link>
                    </li>
                    <li className='menu'>
                        <Link href="https://github.com/leegyusung" target="_blank">깃허브</Link>
                    </li>
                </ul>
            </Wrapper>
        </HeaderFormBlock>
    );
};

export default HeaderForm;