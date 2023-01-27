import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { setLogin } from '../../../services/auth';
import {
  ButtonDiv,
  FormButton,
  FormInput,
  Input,
  LabelForm,
  LoginFormContainer,
} from './LoginFormElements';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
    if (!email && !password) {
      toast.error('Email dan password harus diisi!!!');
    } else if (!email || !password) {
      if (!email) {
        toast.error('Email harus diisi!!!');
      } else if (!password) {
        toast.error('password harus diisi!!!');
      }
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success('Login Berhasil');
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64, { expires: 2 });
        router.push('/join');
      }
    }
  };

  const handleButtonSignup = () => {
    router.push('/daftar');
  };
  return (
    <LoginFormContainer>
      <FormInput>
        <LabelForm>Email</LabelForm>
        <Input
          placeholder="Masukkan Email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormInput>
      <FormInput>
        <LabelForm>Kata sandi</LabelForm>
        <Input
          placeholder="Masukkan Kata sandi"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormInput>
      <ButtonDiv>
        <FormButton buttonType="primary" onClick={onSubmit}>
          Masuk
        </FormButton>
        <FormButton buttonType="secondary" onClick={handleButtonSignup}>
          Daftar
        </FormButton>
      </ButtonDiv>
    </LoginFormContainer>
  );
};

export default LoginForm;
