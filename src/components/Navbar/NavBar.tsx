'use client'
import Link from 'next/link'
import styled from 'styled-components'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useState } from 'react'
import { Modal } from '../UI/Modal/Modal'

export const NavBar = () => {
  const [showmodal, setShowModal] = useState(false)

  const showModalHandler = () => {
    setShowModal(true)
  }
  const hideModalHandler = () => {
    setShowModal(false)
  }

  return (
    <ContainerHeader>
      <InnerHeader>
        <WrapperLogo>
          <Link href="/">Чебер</Link>
        </WrapperLogo>
        <WrapperNav>
          <WrapperLocated onClick={() => showModalHandler()}>
            <LocationOnIcon />
            Бишкек
          </WrapperLocated>
          <Modal active={showmodal}>asd</Modal>
          <Link href="partner">Стать партнером</Link>
          <Link href="login">Войти</Link>
        </WrapperNav>
      </InnerHeader>
    </ContainerHeader>
  )
}

const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  -webkit-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);
`
const InnerHeader = styled.div`
  width: 100%;
  max-width: 1536px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: var(--ui-black);
  }
`
const WrapperLogo = styled.div`
  a {
    font-size: 23px;
  }
`
const WrapperNav = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const WrapperLocated = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
