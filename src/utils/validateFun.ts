export const validateAndroidPackageName = (packageName: string): boolean => {
    // 正则表达式校验安卓包名规则
    const packageNameRegex = /^[a-zA-Z0-9.]+$/;

    // 允许空字符串
    if (packageName === '') {
        return true;
    }

    // 检查是否包含空格
    if (/\s/.test(packageName)) {
        return false;
    }

    // 校验是否符合安卓包名规范
    if (!packageNameRegex.test(packageName)) {
        return false;
    }

    return true;
}

export const validateFullRule = (packageName: string): boolean => {
    // 正则表达式校验全屏规则
    const fullRuleRegex = /^[a-zA-Z*:]+$/;

    // 允许空字符串
    if (packageName === '') {
        return true;
    }

    // 检查是否包含空格
    if (/\s/.test(packageName)) {
        return false;
    }

    // 校验是否符合全屏规则
    if (!fullRuleRegex.test(packageName)) {
        return false;
    }

    return true;
}



export const validateNotEmpty = (input: string): boolean => {
    return input.trim() !== '';
};