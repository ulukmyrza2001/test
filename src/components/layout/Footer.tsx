'use client'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <ContainerFooter>
      <InnerFooter>asd</InnerFooter>
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
  border-top: 1px solid red;
`
const InnerFooter = styled.div`
  width: 100%;
  max-width: 1536px;
  background-color: #ffffff;
`
