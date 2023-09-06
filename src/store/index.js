import { defineStore } from 'pinia';

import { userInfoStore } from './userinfo.js';

export const mainStore = defineStore('main', {
    state: () => {
        return {
            name: '张三',
            sayMsg: 'goer',
            phone: '13401009991',
            age: userInfoStore().objNmae,
        };
    },

    // 计算属性
    getters: {
        setPhone(state) {
            //   替换中间四个字符
            return state.phone
                .toString()
                .replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
        },
    },

    // 方法
    actions: {
        setSatte() {
            this.sayMsg = 'vue pinia 修改';
        },
    },
});
