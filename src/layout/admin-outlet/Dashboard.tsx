import React, { useEffect, useState } from 'react'
import style from './Dasboard.module.css'
import { HiMenuAlt3, HiOutlineMenu } from 'react-icons/hi'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { BiLogIn } from 'react-icons/bi'
import { Divider } from '@mui/material'
import { IoCalendarNumber } from 'react-icons/io5'
import { MdOutlineDashboard } from 'react-icons/md'
import { GiMasterOfArms } from 'react-icons/gi'
import { FaServicestack } from 'react-icons/fa6'

export const AdminOutlet = () => {
	useEffect(() => {
		document.title = 'Admin'
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])
	const [open, setOpen] = useState<any>(false)

	const locations = useLocation()

	const DATA_DASHBOARD = [
		{ name: 'Dashboard', link: '/', icon: MdOutlineDashboard },
		{ name: 'Календарь', link: '/calendar', icon: IoCalendarNumber },
		{ name: 'Мастеры', link: '/masters', icon: GiMasterOfArms },
		{ name: 'Услуги', link: '/services', icon: FaServicestack },
	]

	return (
		<div className={style.container_dashboard}>
			<section
				className={
					open
						? style.container_inside_dashboard_open
						: style.container_inside_dashboard_close
				}
			>
				<div
					className={
						open
							? style.card_dashboard_open
							: style.card_dashboard_close
					}
				>
					<div className={style.dashboard_header}>
						{open ? (
							<HiMenuAlt3
								size={26}
								cursor='pointer'
								onClick={() => setOpen(!open)}
							/>
						) : (
							<HiOutlineMenu
								size={26}
								cursor='pointer'
								onClick={() => setOpen(!open)}
							/>
						)}
					</div>
					<div className={style.dashboard_main}>
						{DATA_DASHBOARD?.map((item: any, i: number) => (
							<React.Fragment key={i}>
								<Link
									to={item?.link}
									key={i}
									className={
										`/${
											locations.pathname.split('/')[1]
										}` === item.link
											? style.dashboard_card_inside_active
											: locations.pathname ===
											  item.subLink
											? style.dashboard_card_inside_active
											: style.dashboard_card_inside
									}
								>
									<div>
										{React.createElement(item?.icon, {
											size: '20',
										})}
									</div>
									<h3
										className={
											open
												? style.dashboard_title_open
												: style.dashboard_title_close
										}
									>
										{item?.name}
									</h3>
								</Link>
							</React.Fragment>
						))}
					</div>
					<br />
					<Divider sx={{ zIndex: 1, background: 'white' }} />
					<br />
					<div className={style.dashboard_title_logaut}>
						<div>
							<BiLogIn size={20} />
						</div>
						<h3
							className={
								open
									? style.dashboard_title_open
									: style.dashboard_title_close
							}
						>
							Выйти
						</h3>
					</div>
				</div>
				<Outlet />
			</section>
		</div>
	)
}
