/* eslint-disable react/jsx-one-expression-per-line */
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { setLogin, setSignUp } from '../services/auth';
import { CategoryTypes } from '../services/data-types';
import { getQuizCategory } from '../services/user';

const SignupFotoContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;

  @media screen and (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const SignupFotoSection = styled.section`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input#avatar {
    visibility: hidden;
    height: 0px;
  }
`;

const LabelImage = styled.label`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Profile = styled.div`
  h1 {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
  }
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  margin-block: 40px;
`;

export const LabelForm = styled.label`
  font-weight: 500;
  font-size: 18px;
`;

const CategorySelect = styled.select`
  width: 100%;
  background-color: #fff;
  border: 1px solid #0c145a;
  border-radius: 100px;
  font-weight: 400;
  font-size: 18px;
  padding: 10px 24px;
  font-family: 'Poppins', sans-serif;
  color: #0c145a;
`;

const FormButton = styled.button`
  outline: none;
  border: none;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #6d67e4;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
`;

const DaftarFoto = () => {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState('');
  const [image, setImage] = useState<any>('');
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [uploaded, setUploaded] = useState(0);

  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
    username: '',
  });

  const router = useRouter();

  const getQuizCategoryAPI = useCallback(async () => {
    const data = await getQuizCategory();

    setCategories(data);
    setFavorite(data[0]._id);
  }, [getQuizCategory]);

  useEffect(() => {
    getQuizCategoryAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form');
    if (getLocalForm) {
      setLocalForm(JSON.parse(getLocalForm!));
    } else {
      router.push('/daftar');
    }
  }, []);

  const onSubmit = async () => {
    const uploadInterval = setInterval(() => {
      const uploadedProgress = localStorage.getItem('upload-progress');
      setUploaded(parseInt(uploadedProgress!, 10));
    }, 500);
    const getLocalForm = await localStorage.getItem('user-form');
    const form = JSON.parse(getLocalForm!);
    const data = new FormData();

    data.append('profile_photo', image);
    data.append('email', form.email);
    data.append('name', form.name);
    data.append('password', form.password);
    data.append('username', form.username);
    data.append('favorite', favorite);

    const result = await setSignUp(data);
    if (result.error) {
      clearInterval(uploadInterval);
      toast.error(result?.message);
      router.push('/daftar');
    } else {
      clearInterval(uploadInterval);
      const dataLogin = {
        email: form.email,
        password: form.password,
      };
      toast.success('Register Berhasil');
      const response = await setLogin(dataLogin);
      if (response.error) {
        toast.error(response.message);
      } else {
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64, { expires: 2 });
        router.push('/join');
        localStorage.removeItem('user-form');
      }
    }
  };

  return (
    <>
      <Head>
        <title>Daftar Foto | KuisKuy</title>
        <meta
          name="description"
          content="Tingkatkan ilmu dengan metode kuis yang menyenangkan dari KuisKuy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignupFotoContainer>
        <SignupFotoSection>
          <LabelImage htmlFor="avatar">
            {imagePreview ? (
              <Image src={imagePreview} alt="" width={100} height={100} />
            ) : (
              <img src="/assets/img/upload.png" alt="" />
            )}
          </LabelImage>
          <input
            id="avatar"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={(event) => {
              const img = event.target.files![0];
              setImagePreview(URL.createObjectURL(img));
              return setImage(img);
            }}
          />
          <Profile>
            <h1>{localForm.name}</h1>
            <p>{localForm.email}</p>
          </Profile>
          <FormInput>
            <LabelForm>Kategori Kuis Favorit</LabelForm>
            <CategorySelect
              id="category"
              name="category"
              aria-label="Favorite Game"
              value={favorite}
              onChange={(event) => setFavorite(event.target.value)}
            >
              {categories.map((category: CategoryTypes) => (
                <option key={category._id} value={category._id} selected>
                  {category.name}
                </option>
              ))}
            </CategorySelect>
          </FormInput>
          <FormButton onClick={onSubmit}>Buat Akun Saya</FormButton>
        </SignupFotoSection>
        {uploaded > 0 && (
          <div className="progress fixed-top">
            <div
              className={
                uploaded === 100
                  ? 'progress-bar progress-bar-striped progress-bar-animated bg-success'
                  : 'progress-bar progress-bar-striped progress-bar-animated'
              }
              role="progressbar"
              style={{ width: `${uploaded}%` }}
              aria-valuenow={uploaded}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {uploaded}%
            </div>
          </div>
        )}
      </SignupFotoContainer>
    </>
  );
};

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (token) {
    return {
      redirect: {
        destination: '/join',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default DaftarFoto;
