import { useState } from 'react'
import { ModalComponent } from '../../../../../components/UI/Modal/Modal'
import { Switch } from '../../../../../components/UI/Switch/Switch'

interface AddDayScheduleModalProps {
	dayScheduleActive: boolean
	setDayScheduleActive: (active: boolean) => void
}

export const AddDayShedule = ({
	dayScheduleActive,
	setDayScheduleActive,
}: AddDayScheduleModalProps) => {
	function handleClose() {
		setDayScheduleActive(false)
	}
	const [state, setState] = useState(true)

	return (
		<ModalComponent active={dayScheduleActive} handleClose={handleClose}>
			<Switch checked={state} onChange={(e) => setState(e)} />
		</ModalComponent>
	)
}
