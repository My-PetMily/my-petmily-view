import styled from 'styled-components';

export const Wrap = styled.section`
  width: 100%;
  min-width: 100%;
  min-height: calc(100vh - 307px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 70%;
  height: 2px;
  background-color: #d9dadb;
  margin: 0 auto;
`;

export const LoginTitle = styled.h3`
  font-size: 2.6rem;
  letter-spacing: -0.02em;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 2.5rem !important;
`;

export const LoginFormWrap = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 3rem;
`;

export const Input = styled.input`
  border: 0.1rem solid #d9dadb;
  font-size: 1.1rem;
  padding: 0 1.5rem;
  /* border-radius: 0.5rem; */
  color: #1d1d1b;
  width: 100%;
  line-height: 3.8rem;
  height: 3.8rem;
`;

export const InputError = styled.p`
  text-align: left;
  font-size: 1rem;
  line-height: 1.3rem;
  letter-spacing: -0.02em;
  color: #d00042;
  margin: 0.5rem 0;
`;

export const EmailSave = styled.p`
  color: #757575;
  clear: both;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 25px;
  & label {
    width: 100%;
    height: 25px;
    line-height: 25px;
    margin-left: 10px;
    text-align: left;
    padding-left: 5px;
  }
`;

export const SubmitBtn = styled.button`
  padding: 0 2rem;
  background-color: #333;
  color: #fff;
  font-weight: 600;
  border: 0.1rem solid #333;
  display: block;
  text-align: center;
  height: auto;
  transition: all 0.3s;
  box-sizing: border-box;
  margin-top: 1rem !important;
  font-size: 1.6rem;
  width: 100%;
  min-height: 3.8rem;
  line-height: 3.8rem;
  cursor: pointer;
  :hover {
    background-color: #377b38;
    border-color: #377b38;
  }
`;

export const LoginMenu = styled.ul`
  display: flex;
  justify-content: center;
  margin: 2rem 0 6rem;
  & li {
    position: relative;
    padding-right: 1rem;
    margin-right: 1rem;
  }
  & li:first-child {
    padding-left: 50px;
  }
  & li::before {
    content: '';
    display: block;
    width: 0.1rem;
    height: 1rem;
    background-color: #d9dadb;
    position: absolute;
    right: 0;
    top: 0.3rem;
  }
  & li:last-child::before {
    width: 0;
  }
  & li a {
    font-size: 1rem;
    letter-spacing: -0.02rem;
    line-height: 1.5;
    color: #6b6b6b;
  }
`;
