import ReactCountryFlag from 'react-country-flag';
import { useLanguage } from '../hooks/useLanguage';

export const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary/50 transition-colors duration-200"
      title={language === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
      aria-label={language === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
    >
      <ReactCountryFlag
        countryCode={language === 'en' ? 'US' : 'BR'}
        svg
        style={{
          width: '1.8rem',
          height: '1.2rem',
          borderRadius: '0.34rem',
        }}
      />
    </button>
  );
};
