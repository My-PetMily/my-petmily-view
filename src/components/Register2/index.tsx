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
  const [data, handler] = useInput({
    nickname: '',
    password: '',
    password2: '',
    email: '',
  });

  const [nickNameDetail, setNickNameDetail] = useState({
    onFocus: false,
    success: '',
    error: '',
  });

  const [emailDetail, setEmailDetail] = useState({
    onFocus: false,
    success: '',
    error: '',
  });

  const [submitCheck, setSubmitCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [regPassword, setRegPassword] = useState(false);
  const [selectMember, setSelectMember] = useState<{ [x: string]: string }>({
    select: 'basic',
  });

  const { nickname, password, email, password2 } = data;

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
      if (!nickname && !nickNameDetail.onFocus) {
        return;
      }
      instance
        .get(`/nickname?nickname=${nickname}`)
        .then((res) => {
          setNickNameDetail({
            onFocus: true,
            success: res.data.message,
            error: '',
          });
        })
        .catch((err) =>
          setNickNameDetail({
            onFocus: true,
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
      if (!email && !emailDetail.onFocus) {
        return;
      }
      instance
        .get(`/email?email=${email}`)
        .then((res) => {
          setEmailDetail({
            onFocus: true,
            success: res.data.message,
            error: '',
          });
        })
        .catch((err) => {
          setEmailDetail({
            onFocus: true,
            success: '',
            error: err.response.data.message,
          });
        });
    },
    500,
    [email],
  );

  useEffect(() => {
    // 정규식하기
  }, [password]);

  // 비밀번호1과 비밀번호2를 비교하는 useEffect
  useEffect(() => {
    // 비밀번호가 일치하지 않으면
    if (password !== password2) {
      setPasswordCheck(false);
      return;
    }

    setPasswordCheck(true);
  }, [password, password2]);

  // 모든 양식이 통과한다면 submit버튼눌렀을때 동작하도록
  useEffect(() => {
    if (!(nickNameDetail.success && emailDetail.success && passwordCheck)) {
      setSubmitCheck(false);
      return;
    }

    setSubmitCheck(true);
  }, [nickNameDetail.success, emailDetail.success, passwordCheck]);

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
                value={password}
                onChange={handler}
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
                name="password2"
                onChange={handler}
                value={password2}
                placeholder="비밀번호 확인"
              />
              {!passwordCheck && (
                <DetailError>비밀번호가 일치하지 않아요!</DetailError>
              )}
            </InputWrap>
            <InputWrap>
              <LabelWrap>
                <Label htmlFor="email">이메일</Label>
                {email && <span>이메일 형식을 지켜서 입력해주세요!</span>}
              </LabelWrap>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={handler}
              />
              {emailDetail.error && (
                <DetailError>{emailDetail.error}</DetailError>
              )}
              {emailDetail.success && (
                <DetailSuccess>{emailDetail.success}</DetailSuccess>
              )}
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
