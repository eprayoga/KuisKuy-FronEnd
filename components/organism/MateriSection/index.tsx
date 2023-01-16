import ReactPlayer from 'react-player';
import {
  Description,
  MateriSectionConteiner,
  VideoSection,
} from './MateriSectionElements';

interface MateriSectionProps {
  description: string;
  referenceLink: string;
}
const MateriSection = (props: MateriSectionProps) => {
  // eslint-disable-next-line camelcase
  const { description, referenceLink } = props;

  return (
    <MateriSectionConteiner>
      <h1>Materi Pengantar</h1>
      <VideoSection>
        <ReactPlayer url={referenceLink} width="100%" />
      </VideoSection>
      <h1>Deskripsi</h1>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </MateriSectionConteiner>
  );
};

export default MateriSection;
