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

  nav{
    background-color: yellow;
    grid-area: nav;
  }


  .history-event-c1{
    background-color: blue; 
    grid-area: c1;
     }

    .graph-action-plans-c2{
      background-color: orange;
      grid-area:c2;
    }

    .graph-inspections-c3{
      background-color: purple;
      grid-area:c3;

    }
    .graph-action-plans-c4{
      background-color: crimson;
      grid-area:c4;
    }
    .action-plans-c5{
      background-color: blueviolet;
      grid-area:c5;
    }

    .scheduled-inspections-c6{
      background-color: aquamarine;
      grid-area:c6;
    }

`


export const ScheduledInspections = styled.div`
  border: 0.5px solid #e4e4e4;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  flex: 1;
  justify-content: center;
  margin-top: 25px;
  margin: 0 25px;
  width: 748px;
  background: #ffff;
  section {
    display: flex;
    width: 748px;
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
      background: #c4c4c4;
      margin-right: 12px;
      width: 244px;
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
        width: 704px;
    height: 34px;
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
  margin-top: 60px;
  width: 347px;
  height: 269px;
  background: #ffffff;
  border: 0.5px solid #e4e4e4;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  margin-bottom: 25px;
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