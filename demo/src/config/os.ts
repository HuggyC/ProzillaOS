import { OSConfig } from '@prozilla-os/core';

export const osConfig: OSConfig = {
	name: 'GENERATIVE AI ACADEMY',
	version: '1.0.0',
	author: {
		name: 'GENERATIVE AI ACADEMY',
		url: 'https://generative-ai.academy'
	},
	defaultPath: '/home/gaa',
	defaultVolume: 0.5,
	defaultBrightness: 1,
	defaultWallpaper: 'default',
	defaultSkin: 'default',
	taskbarConfig: {
		position: 'bottom',
		startMenu: true,
		quickLaunch: true,
		taskList: true,
		systemTray: true
	},
	desktopConfig: {
		showIcons: true,
		contextMenu: true
	}
};