import React, { useState } from 'react';
import {
  Container,
  Contents,
  Wrap,
  Form,
  TitleH2,
  Tr,
  Td,
  Table,
  Th,
  Input,
  DetailMessage,
  SubmitBtnWrap,
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
          <TitleH2>
            <h2>REGISTER</h2>
          </TitleH2>
          <Form>
            <Table>
              <colgroup>
                <col style={{ width: '150px' }} />
                <col style={{ width: 'auto' }} />
              </colgroup>
              <tbody>
                <Tr>
                  <Th>회원구분</Th>
                  <Td>
                    <input
                      type="radio"
                      name="selectMember"
                      value="basic"
                      onChange={handleChange}
                      defaultChecked
                    />
                    <label style={{ marginRight: 5 }}>개인회원</label>
                    <input
                      type="radio"
                      name="selectMember"
                      value="company"
                      onChange={handleChange}
                    />
                    <label>사업자회원</label>
                  </Td>
                </Tr>
              </tbody>
            </Table>
            <h3>기본정보</h3>
            <Table>
              <colgroup>
                <col style={{ width: '150px' }} />
                <col style={{ width: 'auto' }} />
              </colgroup>
              <tbody>
                <Tr>
                  <Th>닉네임</Th>
                  <Td>
                    <Input type="text" />
                    <DetailMessage>(한글/영대소문자 최대 20자)</DetailMessage>
                  </Td>
                </Tr>
                <Tr>
                  <Th>비밀번호</Th>
                  <Td>
                    <Input
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                    />
                    <DetailMessage>
                      (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자)
                    </DetailMessage>
                  </Td>
                </Tr>
                <Tr>
                  <Th>비밀번호 확인</Th>
                  <Td>
                    <Input type="password" />
                    <DetailMessage>(일치여부)</DetailMessage>
                  </Td>
                </Tr>
                <Tr>
                  <Th>이메일</Th>
                  <Td>
                    <Input type="email" />
                    <DetailMessage>(중복여부)</DetailMessage>
                  </Td>
                </Tr>
              </tbody>
            </Table>
            <SubmitBtnWrap>
              <SubmitBtn>회원가입</SubmitBtn>
            </SubmitBtnWrap>
          </Form>
        </Contents>
      </Container>
    </Wrap>
  );
};

export default Register;
