import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    height:100vh;
    grid-template-columns: 0.2fr 3fr 3fr 3fr;
    grid-template-rows:  0.2fr repeat(2fr);
    grid-template-areas: 
                        "nav c1 c1 c2"
                        "nav c3 c4 c5"
                        "nav c6 c6 c5";
  grid-gap: 0.2rem;
  nav{
    background-color: yellow;
    grid-area: nav;
  }


  .history-event-c1{
    background-color: blue; 
    grid-area: c1;
    div {
      display: flex;
      justify-content: center;
      border:1px solid white;
      height: 200px;
      width: 80%;
    }
     }

    .graph-action-plans-c2{
      background-color: orange;
    }

    .graph-inspections-c3{
      background-color: purple;
      grid-area:c3;
      div{
        
      height: 200px;
      width:80%;
      }

    }
    .graph-action-plans-c4{
      background-color: crimson;
      grid-area:c4;
      div{
        
        height: 200px;
        width:80%;
        }
  
    }
 

`


export const ScheduledInspections = styled.div`
  grid-area: c6;

  border: 0.5px solid #e4e4e4;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  flex: 1;
  /* justify-content: center; */
  margin-top: 25px;
  margin: 0 25px;
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
    align-items: center;
  }
  section {
    display:flex;
    align-self: center;
    height: 189px;
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