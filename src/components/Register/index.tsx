import React, { useState } from 'react';
import {
  Container,
  Contents,
  RegisterTitle,
  Wrap,
  RegisterTable,
  TableTh,
  Input,
  Btn,
  WrapEmail,
  SubmitWrap,
  SubmitBtn,
} from './styles';

const Register = () => {
  const [selectMember, setSelectMember] = useState<{ [x: string]: string }>({
    select: 'basic',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectMember({
      [name]: value,
    });

    console.log(selectMember);
  };

  return (
    <Wrap>
      <header>이미지</header>
      <Container>
        <Contents>
          <RegisterTitle>
            <h2 style={{ margin: '0 auto' }}>REGISTER</h2>
          </RegisterTitle>
          <form>
            <RegisterTable>
              <tbody>
                <tr>
                  <TableTh>회원구분</TableTh>
                  <td>
                    <Input
                      type="radio"
                      name="selectMember"
                      value="basic"
                      onChange={handleChange}
                      defaultChecked
                    />
                    <label style={{ marginRight: 5 }}>개인회원</label>
                    <Input
                      type="radio"
                      name="selectMember"
                      value="company"
                      onChange={handleChange}
                    />
                    <label>사업자회원</label>
                  </td>
                </tr>
              </tbody>
            </RegisterTable>
            <h3
              style={{
                margin: '50px 0 20px',
                fontSize: 12,
                color: '#353535',
                fontWeight: 'Bold',
              }}
            >
              기본정보
            </h3>
            <RegisterTable>
              <tbody>
                <tr>
                  <TableTh>닉네임</TableTh>
                  <td>
                    <Input type="text" />
                    <span>닉네임을 입력해주세요</span>(한글/영대소문자 최대
                    20자)
                  </td>
                </tr>
                <tr>
                  <TableTh>비밀번호</TableTh>
                  <td>
                    <Input type="password" />
                    <span>
                      (영문 대소문자/숫자/특수문자 중 2가지 이상 조합,
                      10자~16자)
                    </span>
                  </td>
                </tr>
                <tr>
                  <TableTh>비밀번호 확인</TableTh>
                  <td>
                    <Input type="password" />
                    <span></span>
                  </td>
                </tr>
                <tr>
                  <TableTh>이메일</TableTh>
                  <td>
                    <WrapEmail>
                      <Input type="email" />
                      <span></span>
                      <Btn>인증번호 받기</Btn>
                    </WrapEmail>
                  </td>
                </tr>
                <tr>
                  <TableTh>이메일 확인</TableTh>
                  <td>
                    <WrapEmail>
                      <Input type="text" />
                      <span></span>
                      <Btn>확인</Btn>
                    </WrapEmail>
                  </td>
                </tr>
              </tbody>
            </RegisterTable>
            <SubmitWrap>
              <SubmitBtn>회원가입</SubmitBtn>
            </SubmitWrap>
          </form>
        </Contents>
      </Container>
    </Wrap>
  );
};

export default Register;
