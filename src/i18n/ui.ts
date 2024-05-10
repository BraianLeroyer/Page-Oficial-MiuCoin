import UnitedStatesFlag from '../components/flags/UnitedStates.astro';
import SpainFlag from '../components/flags/Spain.astro';

export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.index': 'index',
		'nav.Aviso': 'Aviso',
		'nav.cookie': 'cookie',
		'nav.privacidad': 'Privacidad',
		'nav.terminos': 'terminos',
	},
	en: {
		'nav.index': 'Home',
		'nav.Aviso': 'Warning',
        'nav.terminos': 'Legal Notice',
		'nav.privacidad': 'Privacy',
		'nav.cookie': 'Cookies',
	},
} as const;

export const routes = {
	es: {
		aviso: 'aviso',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
	},
	en: {
		vota: 'vote',
        warning: 'warning',
        'aviso-legal': 'legal-notice',
		privacidad: 'privacy',
		cookies: 'cookies',
	},
	
};