import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
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
  Button,
  InputBox,
  ToLoginBtn,
} from './styles';

const Findpassword = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Wrap>
      <header style={{ height: 150 }}>이미지</header>
      <Container>
        <Contents>
          <FindpwTitle>
            <h2 style={{ margin: '0 auto' }}>FIND PASSWORD</h2>
            <TitleLine />
          </FindpwTitle>
          <form>
            <FormBox>
              <Modal
                isOpen={isOpen}
                style={{
                  overlay: {
                    position: 'fixed',
                    width: '100%',
                    height: '40%',
                    bottom: '50%',
                    top: '30%',
                  },
                  content: {
                    display: 'flex',
                    justifyContent: 'center',
                    border: '3px solid #377b38',
                  },
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    이메일 임시 비밀번호 전송
                  </h2>
                  <div
                    style={{
                      marginTop: '50px',
                      marginBottom: 40,
                      fontSize: 13,
                    }}
                  >
                    <div style={{ marginBottom: '20px' }}>
                      작성한 이메일로 임시 비밀번호가 전송되었습니다.
                    </div>
                    <div>* 로그인 후 비밀번호를 변경해주시기 바랍니다 *</div>
                  </div>
                  <ToLoginBtn onClick={() => navigate('/login')}>
                    로그인 페이지 이동
                  </ToLoginBtn>
                </div>
              </Modal>
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
