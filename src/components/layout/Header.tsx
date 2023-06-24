'use client'
import Link from 'next/link'
import styled from 'styled-components'

export const Header = () => {
  return (
    <ContainerHeader>
      <InnerHeader>
        <Link href="/">Cheber</Link>
        <Link href="login">Login</Link>
        <Link href="partner">Partner</Link>
      </InnerHeader>
    </ContainerHeader>
  )
}

const ContainerHeader = styled.header`
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid red;
  position: fixed;
  top: 0;
`
const InnerHeader = styled.div`
  width: 100%;
  max-width: 1536px;
  background-color: red;
`
