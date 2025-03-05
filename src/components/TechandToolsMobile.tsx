import { TechandToolsList, type TechandToolsTypes } from '../consts';
import { SingleTech } from './SingleTech';
import { t } from 'i18next';

const TechandTools = () => {
  return (
    <div className="lg:hidden flex flex-col items-center gap-8 w-full">
      <h1 className="text-green font-bold text-xl mb-8">{t('projects.tools')}</h1>
      <div className="w-full grid grid-cols-3 gap-8">
        {TechandToolsList.map(({ logo, name }: TechandToolsTypes) => (
          <SingleTech key={name} logo={logo} name={name} />
        ))}
      </div>
    </div>
  );
};

export default TechandTools;
