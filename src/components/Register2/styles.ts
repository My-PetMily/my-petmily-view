import styled from 'styled-components';

export const Wrap = styled.section`
  font: 11px 'GoodRG';
  color: #353535;
  background: #fff;
  width: 90%;
  height: 100%;
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
`;

export const Form = styled.form`
  display: block;
  padding: 20px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

export const TitleH2 = styled.div`
  margin: 30px 0 50px;
  text-align: center;
  & h2 {
    margin: 0 auto;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: 'GoodBD';
  }
`;

export const InputWrap = styled.div`
  margin-bottom: 15px;
`;

export const LabelWrap = styled.div`
  margin-bottom: 5px;
  display: flex;
  & span {
    line-height: 1.2rem;
  }
`;

export const Label = styled.label`
  font-family: 'GoodBD';
  margin-right: 5px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 12px;
  border: 1px solid #4444;
  border-radius: 5px;
`;

export const SubmitBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitBtn = styled.button`
  font-family: 'GoodRG';
  padding: 15px 30px;
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 25px;
  margin-top: 10px;
  margin-bottom: 5px;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #377b38;
  }
`;

export const DetailEx = styled.div`
  color: red;
  margin-top: 5px;
`;
