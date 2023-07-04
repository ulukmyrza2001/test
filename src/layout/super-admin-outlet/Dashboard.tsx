import React, { useState } from 'react'
import styles from './Dasboard.module.css'
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
		<div className={styles.container_dashboard}>
			<section
				className={
					open
						? styles.container_inside_dashboard_open
						: styles.container_inside_dashboard_close
				}
			>
				<div
					className={
						open
							? styles.card_dashboard_open
							: styles.card_dashboard_close
					}
				>
					<div className={styles.dashboard_header}>
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
					<div className={styles.dashboard_main}>
						{DATA_DASHBOARD?.map((item: any, i: number) => (
							<React.Fragment key={i}>
								<Link
									to={item?.link}
									key={i}
									className={
										`/${
											locations.pathname.split('/')[1]
										}` === item.link
											? styles.dashboard_card_inside_active
											: locations.pathname ===
											  item.subLink
											? styles.dashboard_card_inside_active
											: styles.dashboard_card_inside
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
												? styles.dashboard_title_open
												: styles.dashboard_title_close
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
					<div className={styles.dashboard_title_logaut}>
						<div>
							<BiLogIn size={20} />
						</div>
						<h3
							className={
								open
									? styles.dashboard_title_open
									: styles.dashboard_title_close
							}
						>
							Выйти
						</h3>
					</div>
				</div>
				<div className={styles.wrapper_outlet}>
					<Outlet />
				</div>
			</section>
		</div>
	)
}
