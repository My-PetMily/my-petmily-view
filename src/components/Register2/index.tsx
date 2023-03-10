import useInput from '@hooks/useInput';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Contents,
  Wrap,
  Form,
  TitleH2,
  Label,
  Input,
  InputWrap,
  SubmitBtnWrap,
  SubmitBtn,
  DetailEx,
  LabelWrap,
} from './styles';

const Register = () => {
  const [data, handler, setData] = useInput({
    nickname: '',
    password: '',
    email: '',
  });

  const [onNickname, setOnNickname] = useState(false);

  console.log(data.nicknam1e);

  useEffect(() => {
    if (!data.nickname) {
      setOnNickname(false);
      return;
    }
    setOnNickname(true);
  }, [data.nickname]);

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
            <InputWrap>
              <Label htmlFor="selectMember">회원구분</Label>
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
              <hr style={{ margin: '15px 0px' }} />
            </InputWrap>
            <InputWrap>
              <LabelWrap>
                <Label htmlFor="nickName">닉네임</Label>
                {onNickname && <span>한글/영대소문자 최대 20자</span>}
              </LabelWrap>
              <Input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="한글/영대소문자 최대 20자"
                value={data.nickname}
                onChange={handler}
              />
              <DetailEx>닉네임 중복입니다!</DetailEx>
            </InputWrap>
            <InputWrap>
              <LabelWrap>
                <Label htmlFor="password">비밀번호</Label>
                <span>대소문자/숫자/특수문자 중 2가지 이상 10자~16자</span>
              </LabelWrap>
              <Input
                type="password"
                id="password"
                placeholder="대소문자/숫자/특수문자 중 2가지 이상 10자~16자"
              />
              <DetailEx>정규식에 안맞는거 아닌가요?</DetailEx>
            </InputWrap>
            <InputWrap>
              <LabelWrap>
                <Label htmlFor="passwordCheck">비밀번호 확인</Label>
              </LabelWrap>
              <Input
                type="password"
                id="passwordCheck"
                placeholder="비밀번호 확인"
              />
              <DetailEx>비밀번호가 일치하지 않아요!</DetailEx>
            </InputWrap>
            <InputWrap>
              <LabelWrap>
                <Label htmlFor="email">이메일</Label>
                <span>이메일 형식을 지켜서 입력해주세요!</span>
              </LabelWrap>
              <Input
                type="email"
                id="email"
                placeholder="이메일을 입력해주세요"
              />
              <DetailEx>중복입니다!</DetailEx>
            </InputWrap>
            <SubmitBtnWrap>
              <SubmitBtn disabled={false}>회원가입</SubmitBtn>
            </SubmitBtnWrap>
          </Form>
        </Contents>
      </Container>
    </Wrap>
  );
};

export default Register;
