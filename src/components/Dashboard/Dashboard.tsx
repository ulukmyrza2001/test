import React, { createElement, useState } from 'react'
import style from './Dashboard.module.css'
import { PiCalendarCheck } from 'react-icons/pi'

const data = [
  {
    name: 'Calendar',
    icon: PiCalendarCheck
  },
  {
    name: 'Calendar',
    icon: PiCalendarCheck
  },
  {
    name: 'Calendar',
    icon: PiCalendarCheck
  },
  {
    name: 'Calendar',
    icon: PiCalendarCheck
  }
]

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className={style.container_main}>
        <div className={style.button_open_close} onClick={() => setIsOpen(!isOpen)}>
          Close
        </div>
        <ul className={style.container_card}>
          {data.map((item, index) => {
            return (
              <li key={index + 1} className={style.card_main}>
                <div>{createElement(item.icon, { size: '25' })}</div>
                <span>{item.name}</span>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
