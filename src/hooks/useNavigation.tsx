import { computed, reactive, ref } from 'vue';
import { useDeviceStore } from '@/stores/device';
import { createDiscreteApi, darkTheme, lightTheme, useModal, type ConfigProviderProps } from 'naive-ui'; // 假设你用的是 Naive UI 的 modal
import type { NavigationItem } from '@/components/Sidebar/Sidebar.vue';
import { useGameBoosterStore } from '../stores/gameBooster';

export function useNavigation() {
	const deviceStore = useDeviceStore();
    const gameBoosterStore = useGameBoosterStore();
	const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
		theme: deviceStore.isDarkMode ? darkTheme : lightTheme,
	}));
	const { message, modal } = createDiscreteApi(['message', 'modal'], {
		configProviderProps: configProviderPropsRef,
	});
	const loading = ref(false);

	const padSidebarList = reactive<NavigationItem[]>([
		{
			name: '应用横屏布局',
			routeName: 'home',
			href: '/',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-putong'></use>
				</svg>
			),
		},
		{
			name: '应用布局优化',
			routeName: 'autoui',
			isShow() {
				return Boolean(deviceStore.androidTargetSdk && deviceStore.androidTargetSdk >= 33);
			},
			href: '/autoui',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-yingyong2'></use>
				</svg>
			),
		},
		{
			name: '游戏显示布局',
			routeName: 'game-booster',
			href: '/game-booster',
			isShow() {
				return Boolean(
					deviceStore.androidTargetSdk &&
						deviceStore.androidTargetSdk >= 32 &&
						gameBoosterStore.hasGameBoosterDataBase,
				);
			},
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-youxi7'></use>
				</svg>
			),
		},
		{
			name: '窗口控制器',
			routeName: 'dot-black-list',
			href: '/dot-black-list',
			isShow() {
				return Boolean(deviceStore.MIOSVersion && deviceStore.MIOSVersion >= 1);
			},
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-kongzhitai'></use>
				</svg>
			),
		},
		{
			name: '系统体验增强',
			routeName: 'system-experience-enhance',
			href: '/system-experience-enhance',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-jiqunchushihua1'></use>
				</svg>
			),
		},
		{
			name: '触控笔映射(待开发)',
			routeName: 'magic-control',
			href: '/magic-control',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-youxi8'></use>
				</svg>
			),
			isShow() {
				return false;
			},
		},
		{
			name: '精选应用',
			routeName: 'appStore',
			href: '/appStore',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-linggan'></use>
				</svg>
			),
		},
		{
			name: '日志记录',
			routeName: 'logs',
			href: '/logs',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-biaoji'></use>
				</svg>
			),
		},
		{
			name: '新春彩蛋',
			routeName: 'eggs',
			href: '/eggs',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-chunjie'></use>
				</svg>
			),
		},
	]);

    const foldSidebarList = reactive<NavigationItem[]>([
		{
			name: '应用横屏布局',
			routeName: 'home',
			href: '/',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-putong'></use>
				</svg>
			),
		},
		{
			name: '应用布局优化',
			routeName: 'autoui',
			isShow() {
				return Boolean(deviceStore.androidTargetSdk && deviceStore.androidTargetSdk >= 33);
			},
			href: '/autoui',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-yingyong2'></use>
				</svg>
			),
		},
		{
			name: '游戏显示布局',
			routeName: 'game-booster',
			href: '/game-booster',
			isShow() {
				return Boolean(
					deviceStore.androidTargetSdk &&
						deviceStore.androidTargetSdk >= 32 &&
						gameBoosterStore.hasGameBoosterDataBase,
				);
			},
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-youxi7'></use>
				</svg>
			),
		},
		{
			name: '窗口控制器',
			routeName: 'dot-black-list',
			href: '/dot-black-list',
			isShow() {
				return Boolean(deviceStore.MIOSVersion && deviceStore.MIOSVersion >= 1);
			},
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-kongzhitai'></use>
				</svg>
			),
		},
		{
			name: '系统体验增强',
			routeName: 'system-experience-enhance',
			href: '/system-experience-enhance',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-jiqunchushihua1'></use>
				</svg>
			),
		},
		{
			name: '触控笔映射(待开发)',
			routeName: 'magic-control',
			href: '/magic-control',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-youxi8'></use>
				</svg>
			),
			isShow() {
				return false;
			},
		},
		{
			name: '精选应用',
			routeName: 'appStore',
			href: '/appStore',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-linggan'></use>
				</svg>
			),
		},
		{
			name: '日志记录',
			routeName: 'logs',
			href: '/logs',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-biaoji'></use>
				</svg>
			),
		},
		{
			name: '新春彩蛋',
			routeName: 'eggs',
			href: '/eggs',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-chunjie'></use>
				</svg>
			),
		},
	]);

    const phoneSidebarList = reactive<NavigationItem[]>([
		{
			name: '系统体验增强',
			routeName: 'home',
			href: '/home',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-jiqunchushihua1'></use>
				</svg>
			),
		},
		{
			name: '存储健康',
			routeName: 'memory-health',
			href: '/memory-health',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-wulitu_yingpan'></use>
				</svg>
			),
		},
		{
			name: '电池健康',
			routeName: 'battery-health',
			href: '/battery-health',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-dianchi'></use>
				</svg>
			),
		},
		{
			name: '精选应用',
			routeName: 'appStore',
			href: '/appStore',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-linggan'></use>
				</svg>
			),
		},
		{
			name: '日志记录',
			routeName: 'logs',
			href: '/logs',
			icon: () => (
				<svg class='icon' aria-hidden='true'>
					<use xlinkHref='#icon-biaoji'></use>
				</svg>
			),
		}
	]);

    const sidebarList = computed(() => {
		switch (deviceStore.deviceType) {
			case 'tablet': {
				return padSidebarList;
			}
			case 'fold': {
				return foldSidebarList;
			}
			case 'phone': {
				return phoneSidebarList;
			}
			default: {
				return [];
			}
		}
    })


	return { sidebarList };
}
