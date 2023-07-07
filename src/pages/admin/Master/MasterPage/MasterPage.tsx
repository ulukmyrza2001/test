import { useEffect, useState } from 'react'
import { Table } from '../../../../components/Tables/Table/Table'
import styles from './Master.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	deleteMaster,
	getMaster,
} from '../../../../store/features/master-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { IconButton } from '@mui/material'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Button } from '../../../../components/UI/Buttons/Button/Button'
import { MasterAddModal } from './masterAddModal/MasterAddModal'
import { MasterUpdateModal } from './masterUpdateModal/MasterUpdateModal'
import { useNavigate } from 'react-router'
import { BreadCrumbs } from '../../../../components/UI/BreadCrumbs/BreadCrumbs'

interface MasterTableDataProps {
	firstName: string
	lastName: string
	phoneNumber: string
	id: number
	index: number | string
	row: any
}

export const MasterPage = () => {
	const { dataMaster, isLoadingMaster } = useSelector(
		(state: any) => state.master,
	)

	const [masterData, setMasterData] = useState({
		firstName: '',
		lastName: '',
		authInfoRequest: {
			phoneNumber: '+996',
			password: '',
		},
	})
	const [masterModal, setMasterModal] = useState({
		masterModalAdd: false,
		masterModalUpdate: false,
	})
	const [masterId, setMasterId] = useState(0)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	//function

	function handleDelete(masterId: number, event: React.MouseEvent) {
		event.stopPropagation()
		dispatch(deleteMaster({ masterId }) as unknown as AnyAction)
	}

	function handleUpdate(row: MasterTableDataProps, event: React.MouseEvent) {
		event.stopPropagation()
		setMasterId(row.id)
		setMasterModal({
			masterModalAdd: false,
			masterModalUpdate: true,
		})
		setMasterData({
			firstName: row.firstName,
			lastName: row.lastName,
			authInfoRequest: {
				phoneNumber: row.phoneNumber,
				password: '',
			},
		})
	}

	function handleToGo(id: number) {
		navigate(`/master/${id}`)
	}

	//useEffect

	useEffect(() => {
		dispatch(getMaster() as unknown as AnyAction)
	}, [])

	//const

	const BREAD_CRUMBS_MASTERS = [
		{
			name: 'Мастеры',
			to: '/masters',
			isLoading: isLoadingMaster,
			path: 1,
		},
	]

	const HEADER_DATA_MASTER = [
		{
			headerName: '№',
			field: 'index',
			flex: 15,
		},
		{
			headerName: 'Мастер',
			field: 'label',
			flex: 20,
			valueGetter: ({ row }: MasterTableDataProps) => {
				return `${row.firstName} ${row.lastName}`
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
			flex: 10,
			renderCell: ({ row }: MasterTableDataProps) => {
				return (
					<div>
						<IconButton
							onClick={(event) => handleDelete(row.id, event)}
							children={
								<AiOutlineDelete cursor='pointer' size={22} />
							}
						/>
						<IconButton
							onClick={(event) => handleUpdate(row, event)}
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
		<div className={styles.container_master_page}>
			<MasterAddModal
				masterModal={masterModal}
				setMasterModal={setMasterModal}
				masterData={masterData}
				setMasterData={setMasterData}
			/>
			<MasterUpdateModal
				masterModal={masterModal}
				setMasterModal={setMasterModal}
				masterData={masterData}
				setMasterData={setMasterData}
				masterId={masterId}
			/>
			<div className={styles.container_master_header}>
				<BreadCrumbs paths={BREAD_CRUMBS_MASTERS} />
				<Button
					width='180px'
					onClick={() =>
						setMasterModal({
							masterModalAdd: true,
							masterModalUpdate: false,
						})
					}>
					Добавит мастер
				</Button>
			</div>
			<Table
				columns={HEADER_DATA_MASTER}
				data={dataMaster}
				loading={isLoadingMaster}
				pagination={true}
				index={true}
				onClickCard={(row) => handleToGo(row.id)}
			/>
		</div>
	)
}
