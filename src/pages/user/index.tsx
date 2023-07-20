import { Fragment, useEffect } from 'react'
import { Container } from '../../styles/ContainerStyle/Container'
import { ContainerSlider } from '../../components/ContainersSliders/ContainerSlider'
import { ServiceCard } from '../../components/Cards/ServiceCard/ServiceCard'
import { NavBar } from '../../components/Navbar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getBranchesMain } from '../../store/features/branch-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { TypeCompanyGenrate } from '../../utils/helpers/helpers'
import { Banner } from '../../components/Banner'

export const UserPage = () => {
	const dispatch = useDispatch()

	const { branchMain } = useSelector((state: any) => state.branch)

	useEffect(() => {
		dispatch(getBranchesMain() as unknown as AnyAction)
	}, [])

	return (
		<Fragment>
			<Container sx={{ marginTop: '20px' }}>
				<Banner />
			</Container>
			<Container sx={{ margin: '20px 0' }}>
				<NavBar />
			</Container>

			<Container sx={{ marginTop: '50px' }}>
				{branchMain?.map((item: any, index: number) => (
					<div key={index} style={{ width: '100%', marginTop: '30px' }}>
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
							label={TypeCompanyGenrate(item.categoryType)}
						>
							{item?.branchResponses?.map((item: any, index: number) => {
								return <ServiceCard {...item} key={index * 3} />
							})}
						</ContainerSlider>
					</div>
				))}
			</Container>
		</Fragment>
	)
}
