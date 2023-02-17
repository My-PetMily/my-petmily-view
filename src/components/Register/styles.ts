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

export const RegisterTable = styled.table`
  width: 100%;
  margin: 10px 0 0;
  border-bottom: 1px solid #dfdfdf;
  border-top: 0;
  color: #fff;
  line-height: 1.5;
  & td {
    padding: 8px 10px 7px;
    border-top: 1px solid #dfdfdf;
    color: #353535;
    vertical-align: middle;
    word-break: break-all;
    word-wrap: break-word;
  }
`;

export const TableTh = styled.th`
  padding: 11px 0 10px 18px;
  border: 1px solid #dfdfdf;
  width: 150px;
  color: #353535;
  text-align: left;
  font-weight: normal;
  background-color: #fff;
`;

export const Input = styled.input`
  height: 22px;
  line-height: 22px;
  padding: 2px 4px;
  margin-right: 5px;
  border: 1px solid #d5d5d5;
  color: #353535;
  font-size: 12px;
`;

export const EmailTd = styled.td`
  display: flex;
  justify-content: space-between;
  width: 290px;
`;

export const Btn = styled.button`
  display: block;
  background-color: #444;
  color: #fff;
  width: 90px;
  cursor: pointer;
  height: 22px;
  border: none;
  :hover {
    background-color: #377b38;
    border: none;
  }
`;

export const WrapEmail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 290px;
`;

export const SubmitWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SubmitBtn = styled(Btn)`
  height: 100%;
  width: 130px;
  padding: 10px 16px;
`;
