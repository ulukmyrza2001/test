import styles from './Company.module.css'
import { IconButton } from '@mui/material'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Table } from '../../../components/Tables/Table/Table'
import { Button } from '../../../components/UI/Buttons/Button/Button'
import { useEffect } from 'react'
import { getCompanies } from '../../../store/features/company-slice'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'

export const СompanyPage = () => {
	const { companies, isLoadingCompanies } = useSelector(
		(state: any) => state.companies,
	)

	console.log(companies)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCompanies() as unknown as AnyAction)
	}, [dispatch])

	const HeaderСompany = [
		{
			headerName: '№',
			field: 'id',
			flex: 10,
		},
		{
			headerName: 'Лого',
			field: 'logo',
			flex: 20,
		},
		{
			headerName: 'Название',
			field: 'name',
			flex: 20,
		},
		{
			headerName: 'Домен',
			field: 'domain',
			flex: 20,
		},
		{
			headerName: 'Директор',
			field: 'label',
			flex: 20,
			valueGetter: (item: any) => {
				return `${item.row.firstName} ${item.row.lastName}`
			},
		},
		{
			headerName: 'Телефон',
			field: 'phoneNumber',
			flex: 20,
		},
		{
			headerName: 'Действие',
			field: 'action',
			flex: 20,
			renderCell: (item: any) => {
				return (
					<div>
						<IconButton
							// onClick={(event) => showDeleteModal(item, event)}
							children={
								<AiOutlineDelete cursor='pointer' size={22} />
							}
						/>
						<IconButton
							// onClick={(event) =>
							// 	showEditModalHandler(item, event)
							// }
							children={
								<AiOutlineEdit cursor='pointer' size={22} />
							}
						/>
					</div>
				)
			},
		},
	]
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className='name_page'>Компания</h1>
				<div>
					<Button>Добавить</Button>
				</div>
			</div>
			<br />
			<Table
				data={companies}
				columns={HeaderСompany}
				loading={isLoadingCompanies}
				pagination={true}
				index={false}
			/>
		</div>
	)
}
