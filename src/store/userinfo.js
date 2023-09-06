import { defineStore } from 'pinia';

export const userInfoStore = defineStore('userinfo', {
    state() {
        return {
            objNmae: {
                name: '小白',
                age: 20,
                love: '篮球',
            },
        };
    },
});
