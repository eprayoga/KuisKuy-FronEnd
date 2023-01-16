import styled from 'styled-components';

export const HeaderForm = styled.h3`
  font-weight: 700;
`;

export const FormContainer = styled.div`
  .editor-input {
    height: 400px;
    padding-bottom: 120px;
  }
`;

export const LabelImage = styled.label`
  width: 270px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;

  span {
    width: 100% !important;
    height: 100% !important;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;

export const DetailFormContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const BannerForm = styled.div`
  width: 270px;
  padding: 0;

  input#avatar {
    visibility: hidden;
    height: 0px;
  }
`;

export const DetailForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const FormGroup = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 0px;
  left: 20px;
  transform: translateY(-50%);
  font-size: 12px;
  background-color: #fff;
  padding: 0 6px;
`;

export const LabelForm = styled.label`
  font-size: 18px;
  margin: 5px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #0c145a;
  border-radius: 15px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  padding: 12px 18px;
  font-family: 'Poppins', sans-serif;
  color: #0c145a;

  &::placeholder {
    color: #808080;
  }
`;

export const CategorySelect = styled.select`
  width: 100%;
  border: 1px solid #0c145a;
  border-radius: 15px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  padding: 12px 18px;
  font-family: 'Poppins', sans-serif;
  color: #0c145a;
  background-color: #fff;
`;

export const YtPlayer = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0px auto;
`;

export const QustionFormSection = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  margin: 60px 0;
  padding: 0;
`;

export const QuestionFormItem = styled.li`
  width: 100%;
  position: relative;
`;

export const QuestionForm = styled.div`
  width: 100%;

  .question-input {
    width: 100%;
    height: 150px;
    padding-bottom: 60px;
  }
`;

export const QuestionOption = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

export const OptionItems = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

export const OptionCheck = styled.input``;

export const Option = styled.div`
  width: 100%;

  .option-input {
    height: 60px;
    margin-bottom: 40px;
  }
`;

export const QuestionDeleteButton = styled.div`
  padding: 6px 30px;
  background-color: #ff0000;
  color: #fff;
  font-size: 12px;
  border-radius: 20px;
  font-weight: 700;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 10px;
`;

export const ButtonPlus = styled.div`
  padding: 10px 30px;
  background-color: #6d67e4;
  color: #fff;
  font-size: 16px;
  border-radius: 20px;
  font-weight: 700;
  cursor: pointer;
`;
