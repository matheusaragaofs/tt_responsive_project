import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`



@media only screen and (max-width:1040px){
      .navbar{
        width: 100%;
      .menu-burguer {
        background:none;
        color: #FAFAFA;
        margin: 5px 0;
      width: 43px;
         height: 32px;
         right:0;
      }
      }}





  grid-area: nav;
  z-index: 2;
  .linkArrowLeft {
    margin-left: 208px;
  }
  .arrowLeft {
    color: #0794b2;
    width: 20px;
    height: 20px;
  }
  .menu-burguer {
    cursor: pointer;
    margin-top: 150px;
    width: 60px;
    height: 50px;
    background: #fafafa;
    border-radius: 100%;
    color: #333333;
  }
  svg {
    transition: 0.5s;
  }
  svg:hover {
    color: #04db45;
  }
  .navbar {
    background: linear-gradient(180deg, #0db2d6 8.12%, #4fda91 71.62%);
    height: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    span {
      margin: 0;
    }
  }
  .nav-menu {
    background: #fafafa;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }
  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }
  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }
  .nav-text a {
    text-decoration: none;
    color: #0794b2;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    transition: 0.2s;
    border-radius: 4px;
  }
  .nav-text a:hover {
    color: ${shade(0.3, '#0794B2')};
  }
  .nav-menu-items {
    width: 100%;
  }
  /* .navbar-toggle {
  background: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
} */
  span {
    margin-left: 16px;
  }
`;