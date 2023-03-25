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
  DetailError,
  DetailSuccess,
  LabelWrap,
} from './styles';
import instance from 'apis';
import useDebouncedEffect from '@hooks/useDebounce';

const Register = () => {
  const [data, handler, setData] = useInput({
    nickname: '',
    password: '',
    email: '',
  });

  const { nickname, password, email } = data;

  const [nickNameDetail, setNickNameDetail] = useState({
    success: '',
    error: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmail] = useState('');

  const [selectMember, setSelectMember] = useState<{ [x: string]: string }>({
    select: 'basic',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectMember({
      [name]: value,
    });
  };

  // then -> res.data.message
  // err -> err.response.data
  useDebouncedEffect(
    () => {
      // 초기 렌더링시 바로 api요청 보내는 것을 막기 위해
      if (!nickNameDetail.error && !nickname) {
        return;
      }
      instance
        .get(`/nickname?nickname=${nickname}`)
        .then((res) => {
          console.log(res);
          setNickNameDetail({
            success: res.data.message,
            error: '',
          });
        })
        .catch((err) =>
          setNickNameDetail({
            success: '',
            error: err.response.data.message,
          }),
        );
    },
    500,
    [nickname],
  );

  useDebouncedEffect(
    () => {
      // 초기 렌더링시 바로 api요청 보내는 것을 막기 위해
      if (!emailError && !email) {
        return;
      }
      instance
        .get(`/email?email=${data.email}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    500,
    [data.email],
  );

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
                {nickname && <span>한글/영대소문자 최대 20자</span>}
              </LabelWrap>
              <Input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="한글/영대소문자 최대 20자"
                value={nickname}
                onChange={handler}
              />
              {nickNameDetail.error && (
                <DetailError>{nickNameDetail.error}</DetailError>
              )}
              {nickNameDetail.success && (
                <DetailSuccess>{nickNameDetail.success}</DetailSuccess>
              )}
            </InputWrap>
            <InputWrap>
              <LabelWrap>
                <Label htmlFor="password">비밀번호</Label>
                {password && (
                  <span>대소문자/숫자/특수문자 중 2가지 이상 10자~16자</span>
                )}
              </LabelWrap>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="대소문자/숫자/특수문자 중 2가지 이상 10자~16자"
              />
              <DetailError>정규식에 안맞는거 아닌가요?</DetailError>
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
              <DetailError>비밀번호가 일치하지 않아요!</DetailError>
            </InputWrap>
            <InputWrap>
              <LabelWrap>
                <Label htmlFor="email">이메일</Label>
                {data.email && <span>이메일 형식을 지켜서 입력해주세요!</span>}
              </LabelWrap>
              <Input
                type="email"
                id="email"
                placeholder="이메일을 입력해주세요"
              />
              <DetailError>중복입니다!</DetailError>
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
