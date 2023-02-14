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

export const RegisterTitle = styled.div`
  margin: 30px 0 50px;
  text-align: center;
  & h2 {
    margin: 0 auto;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const RegisterInput = styled.input`
  font-size: 100%;
  font-family: 'Open Sans', 'Nanum Barun Gothic', 'Nanum Gothic', Arial,
    Helvetica, sans-serif;
  color: #353535;
  vertical-align: middle;
  outline: none;
  height: 22px;
  line-height: 22px;
  padding: 2px 4px;
  border: 1px solid #d5d5d5;
  color: #353535;
  font-size: 12px;
  margin-bottom: 5px; //이거 빼야함
`;
