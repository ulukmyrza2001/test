import { Fragment, useEffect } from 'react'
import { Container } from '../../styles/ContainerStyle/Container'
import { ContainerSlider } from '../../components/ContainersSliders/ContainerSlider'
import { ServiceCard } from '../../components/Cards/ServiceCard/ServiceCard'
import { NavBar } from '../../components/Navbar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getBranchesMain } from '../../store/features/branch-slice'
import { AnyAction } from '@reduxjs/toolkit'

export const UserPage = () => {
	const dispatch = useDispatch()

	const { branchMain } = useSelector((state: any) => state.branch)

	useEffect(() => {
		dispatch(getBranchesMain() as never as AnyAction)
	}, [])

	return (
		<div>
			<NavBar />
			<Container sx={{ marginTop: '50px' }}>
				{branchMain?.map((item: any, index: number) => (
					<div
						key={index}
						style={{ width: '100%', marginTop: '30px' }}
					>
						<ContainerSlider
							dots={true}
							infinite={true}
							speed={400}
							slidesToShow={
								item?.branchResponses?.length < 4
									? item?.branchResponses?.length
									: 4
							}
							slidesToScroll={1}
							swipeToSlide={true}
							autoplay={false}
							pauseOnHover={true}
							arrowAndprev={true}
							typeButton={true}
							variableWidth={true}
							label={item.categoryResponse.name}
						>
							{item?.branchResponses?.map(
								(item: any, index: number) => {
									return <ServiceCard {...item} key={index} />
								},
							)}
						</ContainerSlider>
					</div>
				))}
			</Container>
		</div>
	)
}
