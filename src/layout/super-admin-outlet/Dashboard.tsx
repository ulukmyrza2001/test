import React, { useState } from 'react'
import style from './Dasboard.module.css'
import {
	HiOutlineSpeakerphone,
	HiOutlineMenu,
	HiMenuAlt3,
} from 'react-icons/hi'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { BiLogIn, BiSupport } from 'react-icons/bi'
import { MdInfoOutline, MdHome } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { Divider } from '@mui/material'

export const SuperAdminOutlet = () => {
	const [open, setOpen] = useState(false)

	const locations = useLocation()

	const DATA_DASHBOARD = [
		{ name: 'Dashboard', link: '/dashboard', icon: MdHome },
		{ name: 'Заказчики', link: '/customers', icon: FiUsers },
		{ name: 'Тариф', link: '/tariffs', icon: MdInfoOutline },
		{
			name: 'Объявления',
			link: '/announcements',
			icon: HiOutlineSpeakerphone,
		},
		{ name: 'Поддержка', link: '/supports', icon: BiSupport },
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
