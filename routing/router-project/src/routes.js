import UserStart from './components/UserStart.vue'

const User = resolve => {
	require.ensure(['./components/User.vue'], () => {
		resolve(require('./components/User.vue'))
	})
}

const UserDetail = resolve => {
	require.ensure(['./components/UserDetail.vue'], () => {
		resolve(require('./components/UserDetail.vue'))
	})
}

const UserEdit = resolve => {
	require.ensure(['./components/UserEdit.vue'], () => {
		resolve(require('./components/UserEdit.vue'))
	})
}



export const routes = [
	{
		path: '/',
		component: UserStart
	},
	{
		path: '/user',
		component: User,
		children: [
			{
				path: ':id',
				component: UserDetail
			},
			{
				path: ':id/edit',
				component: UserEdit,
				name: 'user-edit'
			}
		]
	},
	{
		path: '*',
		redirect: '/'
	}
];