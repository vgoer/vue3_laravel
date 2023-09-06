// outer 模块
const outer = {
    path: '/outer',
    name: 'Outer',
    meta: { title: 'Outer' },
    component: () => import('@/views/outer/outer.vue'),
    children: [
        {
            path: '/outer/one',
            name: 'OuterOne',
            component: () => import('@/views/outer/one.vue'),
        },
    ],
};

export default outer;
