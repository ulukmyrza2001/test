import { Table } from '../../../../components/Tables/Table/Table'

export const Master = () => {
	return (
		<div style={{ width: '100%' }}>
			<Table
				data={[]}
				columns={[
					{
						headerName: '№',
						field: 'index',
						flex: 5,
					},
					{
						headerName: 'Категория',
						field: 'label',
						flex: 10,
					},
					{
						headerName: '№',
						field: 'asd',
						flex: 5,
					},
					{
						headerName: 'Категория',
						field: 'ga',
						flex: 10,
					},
					{
						headerName: '№',
						field: 'ads',
						flex: 5,
					},
					{
						headerName: 'Категория',
						field: 'da',
						flex: 10,
					},
				]}
				loading={false}
				pagination={true}
				index={false}
			/>
		</div>
	)
}
