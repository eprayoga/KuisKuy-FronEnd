import React from 'react';
import {
  Description,
  MateriSectionConteiner,
  VideoSection,
} from './MateriSectionElements';

interface MateriSectionProps {
  description: string;
}
const MateriSection = (props: MateriSectionProps) => {
  const { description } = props;

  return (
    <MateriSectionConteiner>
      <h1>Materi Pengantar</h1>
      <VideoSection>
        <iframe
          src="https://www.youtube.com/embed/0P94ZcNqTIQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <h2>Pengenalan Dasar Microsoft Word</h2>
      </VideoSection>
      <h1>Deskripsi</h1>
      <Description>{description}</Description>
    </MateriSectionConteiner>
  );
};

export default MateriSection;
