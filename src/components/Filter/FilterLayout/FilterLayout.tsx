import React, { ChangeEvent } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import TuneIcon from '@mui/icons-material/Tune'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	Slider,
	Typography,
} from '@mui/material'
import './FilterLayout.module.css'

export const Filterlayout = () => {
	const [expanded, setExpanded] = React.useState<string | false>('panel1') // Updated state value

	const handleChange =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false) // Updated to set to false when collapsed
		}

	const [value, setValue] = React.useState<{
		rate: ChangeEvent<HTMLInputElement> | string
		type: ChangeEvent<HTMLInputElement> | string
	}>({
		rate: '',
		type: '',
	})

	return (
		<Accordion
			expanded={expanded === 'panel1'}
			onChange={handleChange('panel1')}
			sx={{ width: '24%', minWidth: '250px' }}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1bh-content'
				id='panel1bh-header'
			>
				<Typography
					sx={{ color: 'text.secondary', marginRight: '10px' }}
				>
					<TuneIcon />
				</Typography>
				<Typography sx={{ width: '15%', flexShrink: 0 }}>
					Фильтры
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Grid
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
					}}
				>
					<Typography
						variant='body2'
						sx={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							gap: '10px',
							cursor: 'pointer',
							transition: '0.3s',
							':hover': {
								color: 'greenyellow',
							},
						}}
					>
						Сбросить
						<RestartAltIcon
							sx={{ width: '18px', height: '18px' }}
						/>
					</Typography>

					<FormControl>
						<FormLabel id='demo-radio-buttons-group-label'>
							Тип
						</FormLabel>
						<RadioGroup
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue='female'
							name='radio-buttons-group'
							value={value.type}
							onChange={(e) =>
								setValue({
									...value,
									type: e.target.value,
								})
							}
							sx={{
								fontWeight: '400',
								'*': {
									fontSize: '14px !important',
									color: 'black',
								},
							}}
							row={false}
						>
							<FormControlLabel
								value='Restourent'
								control={<Radio />}
								label='Ресторан'
							/>
							<FormControlLabel
								value='Clinic'
								control={<Radio />}
								label='Клиники'
							/>
							<FormControlLabel
								value='Other'
								control={<Radio />}
								label='Другое'
							/>
						</RadioGroup>
					</FormControl>

					<FormGroup
						sx={{
							'*': {
								fontSize: '15px !important',
							},
						}}
					>
						<Typography variant='body2'>По цене</Typography>
						<FormControlLabel
							control={<Checkbox />}
							label='Низкая цена'
						/>
						<FormControlLabel
							control={<Checkbox />}
							label='Средняя цена'
						/>
						<FormControlLabel
							control={<Checkbox />}
							label='Высокая цена'
						/>
					</FormGroup>

					<Grid>
						<Typography>В радиусе</Typography>
						<Slider
							defaultValue={30}
							aria-label='Disabled slider'
						/>
					</Grid>

					<FormControl>
						<FormLabel id='demo-radio-buttons-group-label'>
							Рейтинг
						</FormLabel>
						<RadioGroup
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue='female'
							name='radio-buttons-group'
							value={value.rate}
							onChange={(e) =>
								setValue({
									...value,
									rate: e.target.value,
								})
							}
							sx={{
								fontWeight: '400',
								'*': {
									fontSize: '14px !important',
									color: 'black',
								},
							}}
							row={false}
						>
							<FormControlLabel
								value='Restourent'
								control={<Radio />}
								label='С любым рейтингом'
							/>
							<FormControlLabel
								value='Clinic'
								control={<Radio />}
								label='С рейтингом более 4,0'
							/>
							<FormControlLabel
								value='Other'
								control={<Radio />}
								label='С рейтингом более 4,7'
							/>
						</RadioGroup>
					</FormControl>

					<FormGroup
						sx={{
							'*': {
								fontSize: '15px !important',
							},
						}}
					>
						<Typography variant='body2'>Дополнительно</Typography>
						<FormControlLabel
							control={<Checkbox />}
							label='Со скидкой'
						/>
						<FormControlLabel
							control={<Checkbox />}
							label='С экспресс услугами'
						/>
					</FormGroup>
				</Grid>
			</AccordionDetails>
		</Accordion>
	)
}
