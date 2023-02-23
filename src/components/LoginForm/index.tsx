import React from 'react';
import {
  Wrap,
  Line,
  LoginTitle,
  Input,
  LoginFormWrap,
  InputError,
  EmailSave,
  SubmitBtn,
  LoginMenu,
} from './styles';

const Login = () => {
  return (
    <>
      <header style={{ height: '7.2rem' }}>
        <a>
          <img alt="이러이런 이미지태그" />
        </a>
      </header>
      <Wrap>
        <LoginTitle>로그인</LoginTitle>
        <Line />
        <LoginFormWrap>
          <form>
            <div>
              <Input type="email" placeholder="이메일주소" />
              <InputError>에러</InputError>
            </div>
            <div>
              <Input type="password" placeholder="비밀번호" />
              <InputError>에러</InputError>
            </div>
            <EmailSave>
              <input type="checkbox" id="save_email" />
              <label htmlFor="save_email">이메일 저장</label>
            </EmailSave>
            <SubmitBtn>로그인</SubmitBtn>
          </form>
        </LoginFormWrap>
        <LoginMenu>
          <li>
            <a>회원가입</a>
          </li>
          <li>
            <a href="/#">비밀번호 찾기</a>
          </li>
        </LoginMenu>
      </Wrap>
    </>
  );
};

export default Login;
