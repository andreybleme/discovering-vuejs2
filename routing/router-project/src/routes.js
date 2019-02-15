import UserStart from './components/UserStart.vue'
import User from './components/User.vue'
import UserDetail from './components/UserDetail.vue'
import UserEdit from './components/UserEdit.vue'

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