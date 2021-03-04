import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    height:100vh;
    grid-template-columns: 0.1fr 3fr 3fr 3fr;
    grid-template-rows:  0.2fr repeat(2fr);
    grid-template-areas: 
                        "nav c1 c1 c2"
                        "nav c3 c3 c5"
                        "nav c6 c6 c5";
  grid-gap: 0.3rem;
  
 /* Tablet */

  @media only screen and (max-width:1023px){
      grid-template-columns: 1fr 0.5fr 1fr;
      grid-template-rows: 1fr 4fr 4fr 4fr 4fr; 
      grid-template-areas: "nav nav nav"
                            "c1 c1 c1"
                            "c3 c3 c3"
                            "c5 c5 c2"
                            "c6 c6 c6"
  }
  @media screen and (max-width:695px){
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr repeat(6,1fr);
    grid-gap: 0.2rem;
    grid-template-areas: "nav"
                          "c1"
                          "c2"
                          "c3"
                          "c6"
                          "c5"

};



`

export const HistoryEvent = styled.div`
 
  grid-area: c1;
  display: flex;
  background: #fff;
  flex-direction: column;
  border: 0.5px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  > span {
    height: 50px;
    width: auto;
    span {
      svg {
        margin-right: 5px;
        width: 10px;
        height: 10px;
      }
      margin-left: 40px;
      display: flex;
      justify-content: left;
      align-items: center;
      p {
        margin: 0;
        color: #161616;
        font-size: 9px;
      }
    }
  }
  > section {
    width:90%;
    height: 180px;
  }
 
  div {
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 24px;
        height: 24px;
        margin-right: 12px;
      }
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    margin-top: 19px;
    margin-left: 32px;
    font-weight: 600;
    font-size: 14px;
    color: #333333;
    line-height: 21px;
  }
  form {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: absolute;
      font-size: 25px;
      right: 0;
      margin-right: 25px;
    }
    select {
      @media only screen and (max-width:437px){
      width: 160px;
    
  }
      padding-left: 15px;
      background: #c4c4c4;
      margin-right: 12px;
      width:200px;
      height: 28px;
      border-radius: 100px;
      color: #333333;
      font-weight: 600;
      border: 0;
      size: 14px;
      line-height: 21px;
      outline: none;
      -webkit-appearance: none;
    }
  }
`;


export const ScheduledInspections = styled.div`
  grid-area: c6;
  border: 0.5px solid #e4e4e4;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  flex: 1;
  /* justify-content: center; */
  background: #ffff;
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    margin-top: 19px;
    margin-left: 32px;
    font-weight: 600;
    font-size: 14px;
    color: #333333;
    line-height: 21px;
  }
  form {
    margin-right: 18px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: absolute;
      font-size: 25px;
      right: 0;
      margin-right: 25px;
    }
    select {
      min-width: 200px;
      background: #c4c4c4;
      margin-right: 12px;
      height: 28px;
      border-radius: 100px;
      color: #333333;
      font-weight: 600;
      border: 0;
      size: 14px;
      line-height: 21px;
      outline: none;
      padding-left: 15px;
      -webkit-appearance: none;
    }
  }

  input {
    height: 34px;
    width:95%;
    background: #fafafa;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 100px;
    outline: none;
    /* texto */
    margin-left: 16px;
    padding-left: 20px;
    font-family: Poppins;
    font-weight: 500;
    font-size: 12px;
    line-height: 25px;
    color: #999999;
    margin-bottom: 5px;
  }
`;

export const AsideGraphic = styled.div`
  grid-area: c2;
  background: #ffffff;
  border: 0.5px solid #e4e4e4;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  > div {
    svg {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    flex: 1;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
  }
  section {
    @media only screen and (max-width:1023px){
      height: 90%;
    }
    display:flex;
    justify-content: center;
    align-self: center;
    height: 70%;
    width: 345px;
  }
  p {
    margin: 0;
    font-size: 12px;
    color: #b0b0b0;
  }
  strong {
    font-weight: 600;
    font-size: 14px;
    color: #333333;
  }
`;

export const AsideContent = styled.div`
  grid-area: c5;
  background: #ffffff;
  border: 0.5px solid #e4e4e4;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  div {
    margin-top: 10px;
    margin-left: 10px;
  }
  section {
    margin-top: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      margin-left: 12px;
    }
    svg {
      margin-right: 12px;
      width: 24px;
      height: 24px;
    }
  }
  p {
    margin: 0;
    font-size: 12px;
    color: #b0b0b0;
  }
  strong {
    font-weight: 600;
    font-size: 14px;
    color: #333333;
  }
  input {
    background: #fafafa;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 100px;
    width: 90%;
    height: 34px;
    outline: none;
    margin: 10px 10px;
  }
  form {
    margin-right: 18px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: absolute;
      font-size: 25px;
      right: 0;
      margin-right: 20px;
    }
    select {
      width:95%;
      background: #c4c4c4;
      height: 28px;
      border-radius: 100px;
      color: #333333;
      font-weight: 600;
      border: 0;
      size: 14px;
      line-height: 21px;
      outline: none;
      padding-left: 15px;
      -webkit-appearance: none;
      margin-bottom: 10px;
    }
  }
`;

export const AsideActions = styled.div`
  height: 520px;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
`;

export const AsideActionsContent = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ebebeb;
  & + div {
    margin-top: 10px;
  }
  div {
    margin: 0;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  strong {
    font-weight: 500;
    font-size: 12px;
    color: #333333;
  }
  div:first-child {
    span {
      width: 66px;
      p {
        text-align: center;
        border: 1px solid #7fc008;
        border-radius: 100px;
        font-size: 10px;
        color: #7fc008;
        padding: 0.2px 1.5px;
      }
    }
  }
  div:nth-child(2) {
    span {
      font-size: 12px;
      color: #bdbdbd;
    }
  }
`;

export const C3Section = styled.div`
  grid-area: c3;
  
  @media only screen and (max-width:695px){
    section {
      flex-direction: column;
    }
  }
  section{
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
`

 export const C3Graphic = styled.div `

    @media only screen and (max-width:695px){
      width:100%;
    }

  width:50%;
  background: #ffff;
  border: 0.5px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: flex;


  display: flex;
  flex-direction: column;
  span.averageTimeOne {
    margin-bottom: 26px;
  }
  span.averageTimeTwo {
    margin-bottom: 24px;
  }
  > a {
    p {
      margin: 0;
      margin-left: 10px;
      margin-bottom: 4px;
    }
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: #333333;
  }

  & + div {
    @media only screen and (max-width:1023px){
    margin-left:0;
  }
    margin-left: 10px;
  }
  header {
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      height: 24px;
      width: 24px;
      margin-right: 19px;
    }
    span {
      strong {
        font-size: 14px;
        line-height: 21px;
        color: #333333;
      }
      > p {
        margin: 0;
        color: #b0b0b0;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
   section {
    width: 90%;

  }
  div {
    justify-content: space-between;
    align-items: center;
    display: flex;
    height: 100px;
    span:first-child {
      span + span {
        margin-top: 6px;
      }
      span {
        p {
          text-align: center;
        }
        display: flex;
        align-items: center;
        svg {
          font-size: 10px;
          margin-right: 4px;
          margin-left: 15px;
        }
      }
    }
    p {
      margin: 0;
      font-size: 9px;
    }
    strong {
      font-size: 10px;
      margin-left: 20px;
      color: #b0b0b0;
      font-weight: normal;
    }
   
    span:nth-child(2) {
      span + span {
        margin-top: 6px;
      }
      span {
        p {
          margin-left: 10px;
        }
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

 
 
 
 
 `
export const C4Graphic = styled.div`

@media only screen and (max-width:695px){
    width:100%;
    margin-left:0;
    }

  width:50%;


  display: flex;
  flex-direction: column;
  background: #ffff;
  border: 0.5px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

 span.averageTimeOne {
    margin-bottom: 26px;
  }
  span.averageTimeTwo {
    margin-bottom: 24px;
  }
  > a {
    p {
      margin: 0;
      margin-left: 10px;
      margin-bottom: 4px;
    }
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: #333333;
  }

  & + div {
    margin-left: 10px;
  }
  header {
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      height: 24px;
      width: 24px;
      margin-right: 19px;
    }
    span {
      strong {
        font-size: 14px;
        line-height: 21px;
        color: #333333;
      }
      > p {
        margin: 0;
        color: #b0b0b0;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
  section {
    width: 95%;
    height: 200px;
  }
  div {
    justify-content: space-between;
    align-items: center;
    display: flex;
    height: 100px;
    span:first-child {
      span + span {
        margin-top: 6px;
      }
      span {
        p {
          text-align: center;
        }
        display: flex;
        align-items: center;
        svg {
          font-size: 10px;
          margin-right: 4px;
          margin-left: 15px;
        }
      }
    }
    p {
      margin: 0;
      font-size: 9px;
    }
    strong {
      font-size: 10px;
      margin-left: 20px;
      color: #b0b0b0;
      font-weight: normal;
    }
   
    span:nth-child(2) {
      span + span {
        margin-top: 6px;
      }
      span {
        p {
          margin-left: 10px;
        }
        margin-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
 
 `
