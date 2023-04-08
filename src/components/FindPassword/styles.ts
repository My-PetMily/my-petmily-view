import styled from 'styled-components';

export const Wrap = styled.section`
  font: 11px 'Open Sans', 'Nanum Gothic', 'arial', 'sans-serif';
  color: #353535;
  background: #fff;
  position: relative;
  margin: 0 auto;
`;

export const Container = styled.article`
  margin: 0 auto;
  overflow: hidden;
`;

export const Contents = styled.div`
  position: relative;
  margin: 0 auto;
  min-height: 300px;
  width: 100%;
`;

export const FindpwTitle = styled.div`
  margin: 30px 0 50px;
  text-align: center;
  & h2 {
    margin: 0 auto;
    color: #000;
    font-family: 'GoodBD';
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const TitleLine = styled.div`
  width: 375px;
  height: 2px;
  background-color: #e5e5e5;
  margin: 20px auto;
`;

export const FormBox = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 50px;
  border: 2px solid #e5e5e5;
  @media screen and (max-width: 300px) {
    width: 80%;
    margin: 0 auto;
    padding: 10px;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`;

export const FormBoxTitle = styled.h3`
  margin: 0 0 20px;
  font-size: 15px;
  color: #000;
  text-align: center;
  text-decoration: underline;
`;

export const InputBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-right: 30px;
  width: 100px;
  font-size: 14px;
`;

export const Input = styled.input`
  border: 1px solid #d5d5d5;
  color: #353535;
  width: 100%;
  font-size: 14px;
  height: 25px;
  line-height: 28px;
`;

export const Button = styled.button`
  padding: 10px 0;
  text-align: center;
  margin-top: 20px;
  width: 100%;
  border: 1px solid transparent;
  color: #fff;
  background-color: #444;
  cursor: pointer;
  :hover {
    background-color: #377b38;
  }
`;

export const ToLoginBtn = styled.button`
  padding: 10px 0;
  border: 1px solid transparent;
  color: #fff;
  background-color: #444;
  cursor: pointer;
  :hover {
    background-color: #377b38;
  }
`;
