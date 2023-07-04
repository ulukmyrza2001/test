import React, { useEffect, useState } from 'react'
import style from './Dasboard.module.css'
import { HiMenuAlt3, HiOutlineMenu } from 'react-icons/hi'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { BiLogIn } from 'react-icons/bi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { Divider } from '@mui/material'
import { FaCalendarDays, FaFolderOpen } from 'react-icons/fa6'
import { MdAddHomeWork } from 'react-icons/md'

export const AdminOutlet = () => {
	const [open, setOpen] = useState(false)

	const locations = useLocation()

	const DATA_DASHBOARD = [
		{ name: 'Календарь', link: '/', icon: FaCalendarDays },
		{ name: 'Мастеры', link: '/masters', icon: BsFillPeopleFill },
		{ name: 'Услуги', link: '/services', icon: FaFolderOpen },
		{ name: 'Филиалы', link: '/branches', icon: MdAddHomeWork },
	]

	return (
		<div className={style.container_dashboard}>
			<section
				className={
					open
						? style.container_inside_dashboard_open
						: style.container_inside_dashboard_close
				}>
				<div
					className={
						open
							? style.card_dashboard_open
							: style.card_dashboard_close
					}>
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
									}>
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
										}>
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
							}>
							Выйти
						</h3>
					</div>
				</div>
				<Outlet />
			</section>
		</div>
	)
}
