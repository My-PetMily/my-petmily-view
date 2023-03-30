import React from 'react';
import {
  Container,
  Contents,
  Wrap,
  FindpwTitle,
  TitleLine,
  FormBox,
  FormBoxTitle,
  Label,
  Input,
  InputBox,
  Button,
} from './styles';

const Findpassword = () => {
  return (
    <Wrap>
      <header>이미지</header>
      <Container>
        <Contents>
          <FindpwTitle>
            <h2 style={{ margin: '0 auto' }}>FIND PASSWORD</h2>
            <TitleLine />
          </FindpwTitle>
          <form>
            <FormBox>
              <FormBoxTitle>비밀번호 찾기</FormBoxTitle>
              <InputBox>
                <Label htmlFor="nickname">닉네임</Label>
                <Input type="text" id="nickname" />
              </InputBox>
              <InputBox>
                <Label htmlFor="email">이메일</Label>
                <Input type="text" id="email" />
              </InputBox>
              <Button>확인</Button>
            </FormBox>
          </form>
        </Contents>
      </Container>
    </Wrap>
  );
};

export default Findpassword;
