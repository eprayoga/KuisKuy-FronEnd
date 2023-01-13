import React from 'react';
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
        <iframe
          src={`https://www.youtube.com/embed/${referenceLink}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoSection>
      <h1>Deskripsi</h1>
      <Description>{description}</Description>
    </MateriSectionConteiner>
  );
};

export default MateriSection;
