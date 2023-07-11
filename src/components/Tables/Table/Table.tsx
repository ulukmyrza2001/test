import './Table.css'
import LinearProgress from '@mui/material/LinearProgress'
import { DataGrid } from '@mui/x-data-grid'
import { InputLabel, Pagination } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import NoRowsTable from '../../../assets/image/NoRowsTable.svg'

export interface TableProps {
	columns: {
		headerName: string
		field: string
		flex: number
		valueGetter?: any | undefined
		renderCell?: any | undefined
	}[]
	data: any
	loading: boolean
	pagination: boolean
	index: boolean
	paginationChange?: any
	paginationValue?: any
	rowCount?: number
	onClickCard?: (e: any) => void
}

export function Table(props: TableProps) {
	const indexedData =
		props.data && Array.isArray(props.data)
			? props.data.map((row, index) => ({
					...row,
					index: index + 1,
					id:
						row.value && row.id
							? row.id
							: row.value
							? row.value
							: row.appointmentId || row.id,
			  }))
			: []

	function handleChangePagination(event: any, page: number) {
		props.paginationChange({
			...props?.paginationValue,
			page: page,
		})
	}

	function CustomPagination() {
		function handleChange(e: any) {
			props.paginationChange({
				...props?.paginationValue,
				pageSize: e.target.value,
			})
		}
		return (
			<div className='container_table_footer_pagination'>
				{props.pagination || (
					<>
						<InputLabel id='demo-simple-select-label'>
							Рядов на странице:
						</InputLabel>
						<Select
							variant='standard'
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={props?.paginationValue?.pageSize}
							onChange={handleChange}>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={20}>20</MenuItem>
						</Select>
						<Pagination
							count={props.rowCount}
							defaultPage={1}
							page={props?.paginationValue?.page}
							onChange={handleChangePagination}
						/>
					</>
				)}
			</div>
		)
	}

	function CustomNoRowsOverlay() {
		return (
			<div className='container_no_rows_table'>
				<img src={NoRowsTable} alt='IMG...' />
				<h1>Пусто</h1>
			</div>
		)
	}

	return (
		<div className='container_table'>
			<DataGrid
				sx={{
					width: '100%',
					height: '100%',
					minHeight: '370px',
					maxHeight: '630px',
					borderRadius: 4,
					background: 'white',
					zIndex: '0',
				}}
				columns={props.columns}
				rows={props.index ? indexedData : props.data}
				onRowClick={props.onClickCard}
				loading={props.loading}
				slots={{
					loadingOverlay: LinearProgress,
					pagination: CustomPagination,
					noRowsOverlay: CustomNoRowsOverlay,
				}}
				hideFooterPagination={props.pagination}
				disableColumnFilter
				disableColumnSelector
				disableRowSelectionOnClick
				localeText={{
					noRowsLabel: 'Пусто',
					columnMenuSortAsc: 'Сортировка по порядку',
					columnMenuSortDesc: 'Сортировка не по порядку',
					columnMenuUnsort: 'Несортировать',
					columnMenuFilter: 'Поиск',
					columnMenuManageColumns: 'Заголовки',
					columnMenuHideColumn: 'Скрыть столбец',
					columnsPanelTextFieldLabel: 'Найти столбец',
					columnsPanelTextFieldPlaceholder: 'Название столбца',
					columnsPanelShowAllButton: 'Показать все',
					columnsPanelHideAllButton: 'Скрыть все',
					filterPanelInputLabel: 'Значение',
					filterPanelInputPlaceholder: '',
					filterPanelColumns: 'Заголовки',
					filterPanelOperator: 'Оператор',
					filterOperatorContains: 'Cодержит',
					filterOperatorEquals: 'Pавно',
					filterOperatorStartsWith: 'Hачинается с',
					filterOperatorEndsWith: 'Заканчивается',
					filterOperatorIsEmpty: 'Пусто',
					filterOperatorIsNotEmpty: 'Не пусто',
					filterOperatorIsAnyOf: 'Любой из',
				}}
			/>
		</div>
	)
}
