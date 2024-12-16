import { t } from 'i18next';
import type { IconType } from 'react-icons/lib';
import { techStore } from '../store';
import { useEffect, useState } from 'react';
import { ChallengeInfo, ProfessionalInfo } from '../consts';
interface ProjectCardProps {
  image: string;
  icon: string;
  name: string;
  type: string;
  description: string;
  appLink: string;
  repoLink: string;
  typeProject: string;
}

export const ProjectCard = ({
  image,
  icon,
  name,
  type,
  description,
  appLink,
  repoLink,
  typeProject,
}: ProjectCardProps) => {
  const techLogos =
    typeProject === 'challenge'
      ? ChallengeInfo.find((info) => info.name === name)?.listOfIcons
      : ProfessionalInfo.find((info) => info.name === name)?.listOfIcons;
  const currentTech = techStore((state) => state.tech);

  const compareTech = () => {
    if (
      techLogos?.find((element) => element.name === currentTech) !== undefined
    ) {
      return true;
    }
    return false;
  };
  return (
    <div
      className={`w-[350px] lg:w-[400px] ${compareTech() && 'shadow-2xl shadow-green'} h-[600px] rounded-md flex flex-col gap-8 bg-gray hover:scale-110 transition ease-in-out delay-150`}
    >
      <div className="w-full h-fit">
        <img
          src={image}
          width="400"
          height="100"
          alt=""
          className="rounded-t-md"
        />
      </div>
      <div className="w-full px-4 flex flex-col gap-4 h-[160px]">
        <div className="flex w-full gap-4">
          <img src={icon} width="40" height="40" alt="" />
          <div>
            <h3 className="text-white font-bold">{t(type)}</h3>
            <h2 className="text-green font-bold">{name}</h2>
          </div>
        </div>
        <p className="text-white ml-2 h-[120px]">{t(description)}</p>
      </div>
      <div className="flex flex-col items-center gap-4 h-[200px]">
        <h3 className="text-green font-bold">{t('projects.tech')}</h3>
        <div className="flex text-3xl lg:text-4xl gap-4 text-green">
          {techLogos &&
            techLogos.map(({ name, logo: Logo }, index) => (
              <div key={`${name}-${index}`} id={name}>
                <Logo width={24} height={24} size={24} />
              </div>
            ))}
        </div>
        <div className="mt-6 flex gap-8">
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green px-4 py-2 rounded-full text-white"
          >
            Link
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-4 py-2 rounded-full border-2 border-green"
          >
            {t('projects.repoLink')}
          </a>
        </div>
      </div>
    </div>
  );
};
