import { useEffect } from 'react'
import { useParams } from 'react-router'
import { BreadCrumbs } from '../../../../components/UI/BreadCrumbs/BreadCrumbs'
import { Button } from '../../../../components/UI/Buttons/Button/Button'
import { getMasterById } from '../../../../store/features/master-slice'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import styles from './MasterInnerPage.module.css'

export const MasterInnerPage = () => {
	const { dataMasterById } = useSelector((state: any) => state.master)

	const { masterID } = useParams()
	const dispatch = useDispatch()

	//useEffect

	useEffect(() => {
		dispatch(getMasterById({ masterID }) as unknown as AnyAction)
	}, [])

	//function

	//const

	console.log(dataMasterById)

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
		<div className={styles.container_master_inner_page}>
			<div className={styles.container_master_inner_header}>
				<BreadCrumbs paths={BREAD_CRUMBS_MASTER} />
				<Button width='180px' onClick={() => console.log('abu')}>
					Добавит мастер
				</Button>
			</div>
			<div></div>
		</div>
	)
}
