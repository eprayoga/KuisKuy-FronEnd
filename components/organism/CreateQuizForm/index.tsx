/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { CategoryTypes } from '../../../services/data-types';
import { createQuiz, getQuizCategory } from '../../../services/user';
import {
  BannerForm,
  ButtonPlus,
  ButtonSubmit,
  CategorySelect,
  DetailForm,
  DetailFormContainer,
  FormContainer,
  FormGroup,
  HeaderForm,
  Input,
  Label,
  LabelForm,
  LabelImage,
  Option,
  OptionCheck,
  OptionItems,
  QuestionDeleteButton,
  QuestionForm,
  QuestionFormItem,
  QuestionOption,
  QustionFormSection,
  YtPlayer,
} from './CreateQuizFormElements';

const ReactQuill = dynamic(import('react-quill'), { ssr: false });

const CreateQuizForm = () => {
  const [code, setCode] = useState(0);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [image, setImage] = useState<any>('');
  const [description, setDescription] = useState<any>('');
  const [referenceLink, setReferenceLink] = useState('');
  const [uploaded, setUploaded] = useState(0);

  const router = useRouter();

  const getQuizCategoryAPI = useCallback(async () => {
    const data = await getQuizCategory();

    setCategories(data);
    setCategory(data[0]._id);
  }, [getQuizCategory]);

  useEffect(() => {
    getQuizCategoryAPI();
  }, []);

  useEffect(() => {
    const randomCode =
      Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    setCode(randomCode);
  }, []);

  const initialQuestionState: any = {
    id: 0,
    question: '',
    options: [
      {
        id: 0,
        option: '',
      },
      {
        id: 1,
        option: '',
      },
      {
        id: 2,
        option: '',
      },
      {
        id: 3,
        option: '',
      },
    ],
    answer: 0,
  };
  const [question, setQuestion] = useState<any>([initialQuestionState]);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
    ],
  };
  const modulesOptionQuest = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],
    ],
  };

  const updateQuestion = (index: any) => (e: any) => {
    const newArr = [...question];
    newArr[index].question = e;
    newArr[index].id = index;

    setQuestion(newArr);
  };

  const updateOption = (index: any, id: number) => (e: any) => {
    const newArr = [...question];
    newArr[index].options[id].option = e;
    newArr[index].options[id].id = id;

    setQuestion(newArr);
  };

  const updateAnswerId = (index: any, id: Number) => {
    const newArr = [...question];
    newArr[index].answer = id;

    setQuestion(newArr);
  };

  const questionNumberPlus = () => {
    const newArr = initialQuestionState;
    newArr.id = question.length;
    setQuestion((oldArray: any) => [...oldArray, newArr]);
  };

  const handleRemoveQuestion = (index: any) => {
    setQuestion(question.filter((item: any) => item.id !== index));
  };

  const onSubmit = async () => {
    const uploadInterval = setInterval(() => {
      const uploadedProgress = localStorage.getItem('upload-progress');
      setUploaded(parseInt(uploadedProgress!, 10));
    }, 500);
    const data = new FormData();

    data.append('banner', image);
    data.append('code', `${code}`);
    data.append('kuisName', name);
    data.append('category', category);
    data.append('reference_link', referenceLink);
    data.append('description', description);
    data.append('type', 'multiple choice');
    data.append('questions', JSON.stringify(question));

    const result = await createQuiz(data);
    if (result.error) {
      clearInterval(uploadInterval);
      toast.error(result?.message);
    } else {
      clearInterval(uploadInterval);
      toast.success('Berhasil Membuat Kuis');
      router.push('kuis-saya');
    }
  };

  return (
    <>
      <HeaderForm>Detail Kuis</HeaderForm>
      <FormContainer>
        <DetailFormContainer>
          <BannerForm>
            <LabelImage htmlFor="avatar">
              {imagePreview ? (
                <Image src={imagePreview} alt="" width={100} height={100} />
              ) : (
                <div
                  className="d-flex w-100 h-100 justify-content-center align-items-center flex-column"
                  style={{ backgroundColor: '#dfdfdf' }}
                >
                  <i className="fa-solid fa-upload" />
                  Upload Banner
                </div>
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
          </BannerForm>
          <DetailForm>
            <FormGroup>
              <Label>Kode Kuis</Label>
              <Input value={code} disabled style={{ color: '#808080' }} />
            </FormGroup>
            <FormGroup>
              <Label>Nama Kuis</Label>
              <Input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Masukkan Nama Kuis"
              />
            </FormGroup>
            <FormGroup>
              <Label>Kategori Kuis</Label>
              <CategorySelect
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((cate: CategoryTypes) => (
                  <option key={cate._id} value={cate._id} selected>
                    {cate.name}
                  </option>
                ))}
              </CategorySelect>
            </FormGroup>
          </DetailForm>
        </DetailFormContainer>
        <FormGroup>
          <Label>Link video referensi (*opsi)</Label>
          <Input
            type="text"
            placeholder="Masukkan Link Video"
            value={referenceLink}
            onChange={(event) => setReferenceLink(event.target.value)}
          />
          <span style={{ fontSize: '9px' }}>
            *Video diambil dari link video youtube
          </span>
          {referenceLink !== '' && (
            <>
              <h6 className="text-center mt-3">Preview video</h6>
              <YtPlayer>
                <ReactPlayer url={referenceLink} width="300px" height="180px" />
              </YtPlayer>
            </>
          )}
        </FormGroup>
        <LabelForm style={{ marginTop: '20px' }}>Deskripsi Kuis</LabelForm>
        <ReactQuill
          modules={modules}
          theme="snow"
          className="editor-input"
          value={description}
          onChange={(e) => setDescription(e)}
        />
      </FormContainer>

      {/* Question */}
      <QustionFormSection>
        <HeaderForm>Pertanyaan</HeaderForm>
        {question.map(
          (
            quest: {
              options: any;
              id: any;
              question: any;
            },
            index: any
          ) => (
            <QuestionFormItem key={index}>
              <QuestionForm>
                <ReactQuill
                  theme="snow"
                  className="question-input"
                  modules={modulesOptionQuest}
                  value={quest.question}
                  onChange={updateQuestion(index)}
                />
              </QuestionForm>
              <h5>
                Opsi Jawaban
                <span style={{ fontSize: '9px' }}>
                  (*Centang jawaban yang benar)
                </span>
              </h5>
              <QuestionOption>
                <OptionItems>
                  <OptionCheck
                    type="radio"
                    name={`option-${index}-0`}
                    onClick={() => updateAnswerId(index, 0)}
                  />
                  <Option>
                    <ReactQuill
                      theme="snow"
                      className="option-input"
                      modules={modulesOptionQuest}
                      value={quest.options[0].option}
                      onChange={updateOption(index, 0)}
                    />
                  </Option>
                </OptionItems>
                <OptionItems>
                  <OptionCheck
                    type="radio"
                    name={`option-${index}`}
                    onClick={() => updateAnswerId(index, 1)}
                  />
                  <Option>
                    <ReactQuill
                      theme="snow"
                      className="option-input"
                      modules={modulesOptionQuest}
                      value={quest.options[1].option}
                      onChange={updateOption(index, 1)}
                    />
                  </Option>
                </OptionItems>
                <OptionItems>
                  <OptionCheck
                    type="radio"
                    name={`option-${index}`}
                    onClick={() => updateAnswerId(index, 2)}
                  />
                  <Option>
                    <ReactQuill
                      theme="snow"
                      className="option-input"
                      modules={modulesOptionQuest}
                      value={quest.options[2].option}
                      onChange={updateOption(index, 2)}
                    />
                  </Option>
                </OptionItems>
                <OptionItems>
                  <OptionCheck
                    type="radio"
                    name={`option-${index}`}
                    onClick={() => updateAnswerId(index, 3)}
                  />
                  <Option>
                    <ReactQuill
                      theme="snow"
                      className="option-input"
                      modules={modulesOptionQuest}
                      value={quest.options[3].option}
                      onChange={updateOption(index, 3)}
                    />
                  </Option>
                </OptionItems>
              </QuestionOption>
              <QuestionDeleteButton
                onClick={() => {
                  handleRemoveQuestion(quest.id);
                }}
              >
                Hapus Soal
              </QuestionDeleteButton>
            </QuestionFormItem>
          )
        )}
        <ButtonPlus
          onClick={() => {
            questionNumberPlus();
          }}
        >
          Tambah Soal
        </ButtonPlus>
        <ButtonSubmit onClick={onSubmit}>Simpan Quiz</ButtonSubmit>
        {uploaded > 0 && (
          <div className="progress fixed-top" style={{ zIndex: 12 }}>
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
      </QustionFormSection>
    </>
  );
};

export default CreateQuizForm;
