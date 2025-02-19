import { Apps, createAppConfigObject } from '@prozilla-os/core';
import { 
	BrainCircuit, 
	Image as ImageIcon, 
	Video, 
	Music,
	UsersRound,
	Settings
} from 'lucide-react';

export const apps: Apps = createAppConfigObject([
	{
		id: 'llm-texte',
		name: 'LLM-TEXTE',
		description: 'Maîtrisez les modèles de langage',
		icon: BrainCircuit,
		iconBackground: '#4475FF',
		window: {
			width: 800,
			height: 600,
			backgroundColor: '#1A1A1A',
			taskbarButton: true,
		},
	},
	{
		id: 'image',
		name: 'IMAGE',
		description: 'Créez des visuels époustouflants',
		icon: ImageIcon,
		iconBackground: '#AA44FF',
		window: {
			width: 800,
			height: 600,
			backgroundColor: '#1A1A1A',
			taskbarButton: true,
		},
	},
	{
		id: 'video-audio',
		name: 'VIDEO-AUDIO',
		description: 'Explorez la création multimédia',
		icon: Video,
		iconBackground: '#44FF75',
		window: {
			width: 800,
			height: 600,
			backgroundColor: '#1A1A1A',
			taskbarButton: true,
		},
	},
	{
		id: 'musique',
		name: 'MUSIQUE',
		description: 'Découvrez la composition par IA',
		icon: Music,
		iconBackground: '#FF4444',
		window: {
			width: 800,
			height: 600,
			backgroundColor: '#1A1A1A',
			taskbarButton: true,
		},
	},
	{
		id: 'community',
		name: 'Communauté',
		description: 'Espace communautaire',
		icon: UsersRound,
		iconBackground: '#44DDFF',
		window: {
			width: 1000,
			height: 700,
			backgroundColor: '#1A1A1A',
			taskbarButton: true,
		},
	},
	{
		id: 'settings',
		name: 'Paramètres',
		description: 'Paramètres système',
		icon: Settings,
		iconBackground: '#888888',
		window: {
			width: 600,
			height: 500,
			backgroundColor: '#1A1A1A',
			taskbarButton: true,
		},
	},
]);