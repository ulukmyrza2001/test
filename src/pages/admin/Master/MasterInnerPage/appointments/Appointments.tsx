import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMasterAppoinment } from '../../../../../store/features/calendar-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { Table } from '../../../../../components/Tables/Table/Table'
import { useParams } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { TranslateAppointmentStatus } from '../../../../../utils/helpers/helpers'

interface MasterRowTableProps {
	appointmentId: number
	appointmentStatus: string
	description: string
	fullName: string
	id: number
	index: number
	userId: number
	startTime: string
	row: any
}

export const Appointments = () => {
	const { dataMaster, isLoadingCalendar } = useSelector(
		(state: any) => state.calendar,
	)

	const [paginationAppointments, setPaginationAppointments] = useState({
		page: 1,
		pageSize: 10,
	})

	const { masterID } = useParams()
	const dispatch = useDispatch()

	//useEffect

	useEffect(() => {
		dispatch(
			getMasterAppoinment({
				size: paginationAppointments.pageSize,
				page: paginationAppointments.page,
				masterID: masterID,
			}) as unknown as AnyAction,
		)
	}, [masterID, paginationAppointments])

	//const

	const HEADER_MASTER_APPOINTMENTS = [
		{
			headerName: '№',
			field: 'index',
			flex: 5,
		},
		{
			headerName: 'ФИО',
			field: 'fullName',
			flex: 15,
		},
		{
			headerName: 'Описание',
			field: 'description',
			flex: 10,
		},
		{
			headerName: 'Визит',
			field: 'startTime',
			flex: 10,
			renderCell: ({ row }: MasterRowTableProps) => {
				return (
					<div>
						<div>{row.startTime?.split(' ')[0]}</div>
						<div>{`${row.startTime?.slice(
							10,
							16,
						)} - ${row.startTime?.slice(30, 36)}`}</div>
					</div>
				)
			},
		},
		{
			headerName: 'Статус',
			field: 'appointmentStatus',
			flex: 10,
			valueGetter: ({ row }: MasterRowTableProps) => {
				return TranslateAppointmentStatus(row.appointmentStatus)
			},
		},
		{
			headerName: 'Действие',
			field: 'action',
			flex: 5,
			renderCell: ({ row }: MasterRowTableProps) => {
				return (
					<div>
						<IconButton
							children={
								<AiOutlineDelete cursor='pointer' size={22} />
							}
						/>
						<IconButton
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
			<Table
				data={dataMaster?.content}
				columns={HEADER_MASTER_APPOINTMENTS}
				index={true}
				pagination={false}
				loading={isLoadingCalendar}
				rowCount={dataMaster?.totalPages}
				paginationChange={setPaginationAppointments}
				paginationValue={paginationAppointments}
			/>
		</div>
	)
}
