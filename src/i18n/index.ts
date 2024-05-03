import spanish from '../i18n/es.json';

const LANG = {
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'es',
}:{currentLocale?: string}) => {
    switch (currentLocale) {
        case LANG.SPANISH:
            return spanish;
        default:
            return spanish;
    }
}