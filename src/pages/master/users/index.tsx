import { useEffect } from 'react'
import styles from './Users.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../../store/features/user-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { Table } from '../../../components/Tables/Table/Table'

export const UsersPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { usersAllData, isLoadingUsers } = useSelector(
		(state: any) => state.users
	)
	useEffect(() => {
		dispatch(getAllUsers() as unknown as AnyAction)
	}, [])

	const HEADER_DATA_USERS = [
		{
			headerName: '№',
			field: 'index',
			flex: 3,
		},
		{
			headerName: 'Фамилия',
			field: 'lastName',
			flex: 10,
		},
		{
			headerName: 'Имя',
			field: 'firstName',
			flex: 10,
		},
		{
			headerName: 'Номер',
			field: 'phoneNumber',
			flex: 10,
		},

		// {
		// 	headerName: 'Действие',
		// 	field: 'action',
		// 	flex: 5,
		// 	renderCell: (item: any) => {
		// 		return (
		// 			<div>
		// 				<IconButton
		// 					onClick={(event) => handleDelete(item.id, event)}
		// 					children={<AiOutlineDelete cursor="pointer" size={22} />}
		// 				/>
		// 				<IconButton
		// 					onClick={(event) => handleEdit(item.row, event)}
		// 					children={<AiOutlineEdit cursor="pointer" size={22} />}
		// 				/>
		// 			</div>
		// 		)
		// 	},
		// },
	]
	return (
		<div className={styles.usr}>
			<div className={styles.usr_wrapper}>
				<h1 className={styles.caption}>Пользователи</h1>
			</div>
			<div className={styles.content}>
				<div
					style={{
						width: '100%',
						height: '100%',
					}}
				>
					<Table
						columns={HEADER_DATA_USERS}
						data={usersAllData}
						loading={isLoadingUsers}
						pagination={true}
						index={true}
						onClickCard={(item: any) => navigate(`/users/${item.id}`)}
					/>
				</div>
			</div>
		</div>
	)
}
