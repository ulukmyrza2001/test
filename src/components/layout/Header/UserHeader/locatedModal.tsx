import { useState } from 'react'
import { Input } from '../../../UI/Inputs/Input/Input'
import { ModalComponent } from '../../../UI/Modal/Modal'

interface LocatedModalProps {
	showModal: boolean
	hideModalHandler: any
}

export const LocatedModal = (props: LocatedModalProps) => {
	const [searchLocated, setSearchLocated] = useState('')
	return (
		<ModalComponent
			active={props.showModal}
			handleClose={props.hideModalHandler}
			title='Укажите свое местоположение'
		>
			<div>
				<Input
					value={searchLocated}
					onChange={(e) => setSearchLocated(e.target.value)}
				/>
				<div>
					<span>Бишкек</span> <span>Алмата</span>
				</div>
			</div>
		</ModalComponent>
	)
}
