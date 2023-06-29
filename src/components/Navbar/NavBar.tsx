import React from 'react'
import styles from './NavBar.module.css'
import { ContainerSlider } from '../ContainersSliders/ContainerSlider'
import { GrStatusUnknown } from 'react-icons/gr'

const NAVBAR_DATA = [
  {
    name: 'Парикмахерские услуги',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Для мужчин',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Ногтевой сервис',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Удаление волос',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Ресницы',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Брови',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Уход за телом',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Косметология',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Макияж',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Стоматология',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Медицинские услуги',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Тату и пирсинг',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Татуаж',
    icon: GrStatusUnknown,
    link: '/barber'
  },
  {
    name: 'Коррекция фигуры',
    icon: GrStatusUnknown,
    link: '/barber'
  }
]

export const NavBar = () => {
  return (
    <div className={styles.container_navbar}>
      <div className={styles.container_inside_navbar}>
        <ContainerSlider
          dots={false}
          infinite={true}
          speed={400}
          slidesToShow={7}
          slidesToScroll={1}
          swipeToSlide={true}
          autoplay={true}
          autoplaySpeed={2000}
          pauseOnHover={true}
          arrowAndprev={true}
          typeButton={false}
          variableWidth={true}
        >
          {NAVBAR_DATA.map((item: { name: string; icon: any; link: string }) => {
            return (
              <div key={item.link} className={styles.container_card}>
                <div className={styles.card_title}>{item.name}</div>
                <div className={styles.card_icon}>
                  {React.createElement(item?.icon, { size: '30' })}
                </div>
              </div>
            )
          })}
        </ContainerSlider>
      </div>
    </div>
  )
}
