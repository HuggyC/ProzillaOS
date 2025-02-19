import { Skin } from '@prozilla-os/core';

export const gaaTheme: Skin = {
	id: 'gaa',
	name: 'GAA Theme',
	description: 'Theme for GENERATIVE AI ACADEMY',
	version: '1.0.0',
	author: {
		name: 'GENERATIVE AI ACADEMY',
		url: 'https://generative-ai.academy'
	},
	wallpapers: {
		'default': {
			background: 'linear-gradient(140deg, #a8c0ff 0%, #d6a4e7 50%, #fbc2eb 100%)'
		}
	},
	colors: {
		primary: '#4475FF',
		secondary: '#AA44FF',
		success: '#44FF75',
		danger: '#FF4444',
		warning: '#FFAA44',
		info: '#44DDFF',
		
		background: '#1A1A1A',
		surface: '#2A2A2A',
		border: '#3A3A3A',
		
		text: '#FFFFFF',
		textSecondary: '#AAAAAA',
		
		hover: 'rgba(255, 255, 255, 0.1)',
		active: 'rgba(255, 255, 255, 0.2)',
	},
	window: {
		titleBar: {
			background: '#2A2A2A',
			text: '#FFFFFF',
			buttons: {
				background: 'transparent',
				hover: 'rgba(255, 255, 255, 0.1)',
				active: 'rgba(255, 255, 255, 0.2)',
			}
		},
		content: {
			background: '#1A1A1A',
			text: '#FFFFFF'
		}
	},
	taskbar: {
		background: 'rgba(26, 26, 26, 0.8)',
		text: '#FFFFFF',
		buttons: {
			background: 'transparent',
			hover: 'rgba(255, 255, 255, 0.1)',
			active: 'rgba(255, 255, 255, 0.2)',
		}
	},
	desktop: {
		icons: {
			text: '#FFFFFF',
			textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
			background: 'rgba(255, 255, 255, 0.1)',
			hover: 'rgba(255, 255, 255, 0.2)',
			active: 'rgba(255, 255, 255, 0.3)',
		}
	}
};