import instance from '../utils/request';

/**
 * 登录接口
 * @param {Object} data 表单数据
 * @returns
 */
export const user_login_api = (data) => {
    return instance({
        path: '/user/login',
        method: 'post',
        data,
    });
};
