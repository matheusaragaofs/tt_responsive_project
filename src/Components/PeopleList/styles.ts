import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 70%;
  margin: 0 15px;
  overflow: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    margin-right: 14px;
  }
  div,
  strong {
    margin: 5px 5px 0px 5px;
  }
  strong {
    font-size: 10px;
    font-weight: bold;
    line-height: 15px;
    color: #333333;
  }
  strong + strong {
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #ebebeb;
  p {
    font-size: 12px;
  }
  span {
    display: flex;
    justify-content: space-between;
    width: 230px;
  }
`;