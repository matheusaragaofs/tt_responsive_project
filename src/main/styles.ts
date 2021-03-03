import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 4fr 4fr 4fr;
    grid-template-rows: 1fr 5fr 4fr;
    grid-template-areas: "nav main main aside"
                        "nav main main aside"
                        "nav main main aside";
    nav{
        background-color: yellow;
        height:100%;
        grid-area: nav;
    }
    main{
        position: relative;
        header {
            left: 0;
        }
        display:flex;
        flex-direction: column;
        align-items: center;
        
        border: 1px solid black;
        background-color: #FAFAFA;
        height:100%;
        grid-area: main;

        .main-graphic {

            width:80%;
            /* border:1px solid black; */
            height:200px;
        }
        .graphic-content{
            width:80%;
            border: 1px solid black;
            height: 300px;
            display: flex;
            justify-content: space-around;

        }
    };
    aside{
        background-color: orange;
        height:100%;
        grid-area: aside;
    }

    @media (max-width:760px){
    display:flex;
    flex-direction: column;
    main{
        height: 60vh;

    }
    aside{
        height:40vh
    }
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