import React from 'react';
import {
  Container,
  Contents,
  RegisterInput,
  RegisterTitle,
  Wrap,
} from './styles';

const Register = () => {
  return (
    <Wrap>
      <header>이미지</header>
      <Container>
        <Contents>
          <RegisterTitle>
            <h2 style={{ margin: '0 auto' }}>REGISTER</h2>
          </RegisterTitle>
          <form>
            <table border={1}>
              <tr>
                <th>회원구분</th>
                <td>
                  <RegisterInput type="radio" checked />
                  <label>개인회원</label>
                </td>
                <td>
                  <RegisterInput type="radio" />
                  <label>사업자회원</label>
                </td>
              </tr>
            </table>
            <h3>기본정보</h3>
            <table>
              <tr>
                <th>닉네임</th>
                <td>
                  <RegisterInput type="text" />
                  <span>닉네임을 입력해주세요</span>(한글/영대소문자 최대 20자)
                </td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <RegisterInput type="password" />
                  <span>
                    (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
                  </span>
                </td>
              </tr>
              <tr>
                <th>비밀번호 확인</th>
                <td>
                  <RegisterInput type="password" />
                  <span>에러메시지 띄우는 곳</span>
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <RegisterInput type="email" />
                  <span>에러메시지 띄우는 곳</span>
                  <button>인증번호 받기</button>
                </td>
              </tr>
              <tr>
                <th>이메일 확인</th>
                <td>
                  <RegisterInput type="text" />
                  <span>에러메시지 띄우는 곳</span>
                  <button>확인</button>
                </td>
              </tr>
            </table>
            <div>
              <button>회원가입</button>
            </div>
          </form>
        </Contents>
      </Container>
    </Wrap>
  );
};

export default Register;
