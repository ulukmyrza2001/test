'use client'
import { Text } from '@/src/styles/typography/typography'
import Link from 'next/link'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <ContainerFooter>
      <InnerFooter>
        <WrapperLink>
          <WrapperLogo>
            <Link href="/">Чебер</Link>
          </WrapperLogo>
          <Text>
            Сервис онлайн бронирования в <br /> сфере красоты и здоровья.
          </Text>
        </WrapperLink>
        <WrapperLink>
          <Link href="/">
            <Text>Стать партнером</Text>
          </Link>
          <Link href="/">
            <Text>Контакты</Text>
          </Link>
          <Link href="/">
            <Text>Карта сайта</Text>
          </Link>
        </WrapperLink>
        <WrapperLink>
          <Link href="/">
            <Text>Стать партнером</Text>
          </Link>
          <Link href="/">
            <Text>Контакты</Text>
          </Link>
          <Link href="/">
            <Text>Карта сайта</Text>
          </Link>
        </WrapperLink>
        <WrapperLink>
          <Link href="/">
            <Text>Стать партнером</Text>
          </Link>
          <Link href="/">
            <Text>Контакты</Text>
          </Link>
          <Link href="/">
            <Text>Карта сайта</Text>
          </Link>
        </WrapperLink>
      </InnerFooter>
    </ContainerFooter>
  )
}

const ContainerFooter = styled.footer`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  -webkit-box-shadow: 0px 0px 3px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 3px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 3px 2px rgba(34, 60, 80, 0.2);
  margin-top: 50px;
`
const InnerFooter = styled.div`
  width: 100%;
  max-width: 1536px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 30px 0;
`
const WrapperLogo = styled.div`
  a {
    color: var(--ui-black);
    font-size: 23px;
  }
`

const WrapperLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
