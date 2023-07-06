import { useEffect, useState } from 'react'
import { Table } from '../../../../components/Tables/Table/Table'
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

interface MasterTableDataProps {
	firstName: string
	lastName: string
	phoneNumber: string
	id: number
	index: number | string
	row: any
}

export const Master = () => {
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

	//function

	function handleDelete(masterId: number) {
		dispatch(deleteMaster({ masterId }) as unknown as AnyAction)
	}

	function handleUpdate(row: MasterTableDataProps) {
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

	//useEffect

	useEffect(() => {
		dispatch(getMaster() as unknown as AnyAction)
	}, [])

	//const

	const HEADER_DATA_MASTER = [
		{
			headerName: '№',
			field: 'id',
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
							onClick={(event) => handleDelete(row.id)}
							children={
								<AiOutlineDelete cursor='pointer' size={22} />
							}
						/>
						<IconButton
							onClick={(event) => handleUpdate(row)}
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
		<div>
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
			<div style={{ margin: '30px' }}>
				<Button
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
				loading={isLoadingMaster}
				pagination={true}
				index={true}
				data={dataMaster}
			/>
		</div>
	)
}
