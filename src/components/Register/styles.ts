import styled from 'styled-components';

export const Wrap = styled.section`
  font: 11px 'GoodRG';
  color: #353535;
  background: #fff;
  min-width: 410px;
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
  & table {
    position: relative;
    margin: 10px 0 0;
    line-height: 1.5;
  }
  & h3 {
    padding: 50px 10px 10px;
    font-size: 13px;
    color: #353535;
  }
`;

export const Form = styled.form`
  display: block;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #d5d5d5;
  margin-bottom: 150px;
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
export const Table = styled.table`
  width: 100%;
  border: 0;
  border-spacing: 0;
  border-collapse: collapse;
  & td {
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    color: #353535;
    vertical-align: middle;
    word-break: break-all;
    word-wrap: break-word;
  }
`;

export const Th = styled.th`
  padding: 11px 0 10px 18px;
  color: #353535;
  text-align: left;
  background-color: #fff;
  display: block;
  font-size: 13px;
  font-family: 'GoodBD';
`;

export const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

export const Td = styled.td`
  padding: 7px 10px 5px;
  display: block;
`;

export const Input = styled.input`
  display: block;
  height: 22px;
  line-height: 22px;
  padding: 2px 4px;
  border: 1px solid #d5d5d5;
  color: #353535;
  font-size: 12px;
`;

export const DetailMessage = styled.div`
  margin-top: 4px;
`;

export const SubmitBtnWrap = styled.div`
  padding: 10px 0;
  text-align: center;
`;

export const SubmitBtn = styled.button`
  font-family: 'GoodRG';
  width: 120px;
  padding: 15px 10px;
  color: #fff;
  background-color: #444;
  outline: none;
  border: none;
`;
