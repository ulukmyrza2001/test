import { BreadCrumbs } from '../../../../components/UI/BreadCrumbs/BreadCrumbs'

export const MasterInnerPage = () => {
	const BREAD_CRUMBS_MASTER = [
		{
			name: 'Мастеры',
			to: '/masters',
			path: 1,
		},
		{
			name: 'Мастер',
			to: '/master',
			path: 2,
		},
	]
	return (
		<div>
			<BreadCrumbs paths={BREAD_CRUMBS_MASTER} />
			<div>MasterInnerPage</div>
		</div>
	)
}
