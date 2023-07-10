import React from 'react'
import styles from './ServicesBranch.module.css'
import { Container } from '../../../../styles/ContainerStyle/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AccordionUi } from '../../../../components/UI/Accordion/AccordionUi'
import { useSelector } from 'react-redux'

const data = [
	{
		id: 1,
		name: 'Remote',
		icon: 'string',
		subCategoryServices: [
			{
				id: 1,
				name: 'beybars',
				serviceResponses: [
					{
						id: 1,
						name: 'abu',
						price: 2000,
						duration: 30,
					},
				],
			},
		],
	},
	{
		id: 1,
		name: 'Remote',
		icon: 'string',
		subCategoryServices: [
			{
				id: 1,
				name: 'beybars',
				serviceResponses: [
					{
						id: 1,
						name: 'abu',
						price: 2000,
						duration: 30,
					},
				],
			},
		],
	},
	{
		id: 1,
		name: 'Remote',
		icon: 'string',
		subCategoryServices: [
			{
				id: 1,
				name: 'beybars',
				serviceResponses: [
					{
						id: 1,
						name: 'abu',
						price: 2000,
						duration: 30,
					},
				],
			},
		],
	},
]

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			className={styles.tab_content}
			{...other}
		>
			{value === index && (
				<Box sx={{ padding: '0 2rem' }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	}
}

export const ServicesBranchContent = () => {
	const { branchData } = useSelector((state: any) => state.branch)

	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}
	return (
		<Container
			sx={{
				minHeight: '400px',
			}}
		>
			<Box
				sx={{
					flexGrow: 1,
					display: 'flex',
					padding: '1rem 4rem',
					width: '100%',
				}}
			>
				<Tabs
					orientation='vertical'
					variant='scrollable'
					value={value}
					onChange={handleChange}
					aria-label='Vertical tabs example'
					TabIndicatorProps={{
						style: {
							backgroundColor: '#d9d9d9',
						},
					}}
					sx={{
						borderRight: 1,
						borderColor: 'divider',
					}}
				>
					<Tab
						className={styles.tabs_name}
						label='Услуги'
						{...a11yProps(0)}
					/>
					<Tab
						className={styles.tabs_name}
						label='Акции'
						{...a11yProps(1)}
					/>
				</Tabs>
				<TabPanel value={value} index={0}>
					<AccordionUi data={data} branchData={branchData} />
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
			</Box>
		</Container>
	)
}
