import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { BiSolidCircle } from 'react-icons/bi'
import { AiOutlineRightCircle } from 'react-icons/ai'
import styles from './Accordion.module.css'
import { Link, useLocation } from 'react-router-dom'

interface Accordion {
	id: number
	name: string
	icon?: string
	subCategoryServices:
		| {
				id: number
				name: string
				serviceResponses: {
					id: number
					name: string
					serviceResponses: {
						id: number
						name: string
						price: number
						duration: number
					}[]
				}
		  }[]
		| []
}

export const AccordionUi = (props: any) => {
	const { pathname } = useLocation()
	const path = pathname.slice(1)

	return (
		<>
			{props.data?.map(
				(el: {
					id: number
					name: string
					icon: string
					subCategoryServices: []
				}) => {
					return (
						<div key={el.id}>
							<Accordion
								className={styles['MuiPaper-root']}
								sx={{
									boxShadow: 'none',
									margin: '5px',
									backgroundColor: '#d9d9d9',
								}}
							>
								<AccordionSummary
									className={
										styles['MuiAccordionSummary-content']
									}
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<img
										className={styles.icon}
										src={el?.icon}
										alt={el?.icon}
									/>
									<p>{el?.name}</p>
								</AccordionSummary>
								<AccordionDetails>
									{el?.subCategoryServices.map(
										(item: {
											id: number
											name: string
											serviceResponses: []
										}) => {
											return (
												<Accordion
													className={
														styles['MuiPaper-root']
													}
													sx={{ boxShadow: 'none' }}
													key={item.id}
												>
													<AccordionSummary
														expandIcon={
															<ExpandMoreIcon />
														}
														aria-controls='panel1a-content'
														id='panel1a-header'
													>
														<Typography>
															{item?.name}
														</Typography>
													</AccordionSummary>
													<AccordionDetails
														className={
															styles.details
														}
													>
														{item?.serviceResponses?.map(
															(elem: {
																id: number
																name: string
																price: number
																duration: number
															}) => {
																return (
																	<div
																		className={
																			styles.blockItem
																		}
																		key={Math.random()}
																	>
																		<div
																			className={
																				styles.title
																			}
																		>
																			<p>
																				{
																					elem?.name
																				}
																			</p>
																			<p
																				className={
																					styles.timePrice
																				}
																			>
																				{
																					elem?.price
																				}{' '}
																				сом{' '}
																				<BiSolidCircle
																					size={
																						8
																					}
																				/>{' '}
																				{
																					elem?.duration
																				}{' '}
																				минут
																			</p>
																		</div>
																		<Link
																			to={`/${props.branchData?.companyName}/barbershop/usluga/${elem.id}`}
																			className={
																				path ===
																				'barbershop'
																					? styles.barber_icon
																					: styles.iconLink
																			}
																		>
																			<AiOutlineRightCircle />
																		</Link>
																	</div>
																)
															},
														)}
													</AccordionDetails>
												</Accordion>
											)
										},
									)}
								</AccordionDetails>
							</Accordion>
						</div>
					)
				},
			)}
		</>
	)
}
