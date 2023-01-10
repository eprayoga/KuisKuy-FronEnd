import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  ButtonDiv,
  FormButton,
  FormInput,
  Input,
  LabelForm,
  SignupFormContainer,
} from './SignupElements';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const onSubmit = () => {
    const userForm = {
      email,
      name,
      password,
      username,
    };
    if (email === '' || name === '' || password === '' || username === '') {
      toast.error('Silahkan isi semua data!!!');
    } else {
      localStorage.setItem('user-form', JSON.stringify(userForm));
      router.push('/daftar-foto');
    }
  };

  const routes = useRouter();

  const handleButtonSignin = () => {
    routes.push('/masuk');
  };
  return (
    <SignupFormContainer>
      <FormInput>
        <LabelForm>Nama Lengkap</LabelForm>
        <Input
          placeholder="Masukkan Nama Lengkap"
          name="nama"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormInput>
      <FormInput>
        <LabelForm>Username</LabelForm>
        <Input
          placeholder="Masukkan Username"
          name="nama"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormInput>
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
          Lanjut Daftar
        </FormButton>
        <FormButton buttonType="secondary" onClick={handleButtonSignin}>
          Masuk
        </FormButton>
      </ButtonDiv>
    </SignupFormContainer>
  );
};

export default SignupForm;
