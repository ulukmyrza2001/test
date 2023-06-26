import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Breadcrumbs } from '@mui/material'
import { ThreeDots } from 'react-loader-spinner'

export function BreadCrumbs({ paths }: any) {
  return (
    <StyledBreadcrumb aria-label="breadcrumbs" separator="/">
      {paths.map((path: any, index: number) => {
        const lastIndex = index === paths.length - 1
        return lastIndex ? (
          <StyledContainerTitle key={path.path}>
            {path.isLoading ? (
              <ThreeDots
                height="30"
                width="30"
                radius="9"
                color="gray"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            ) : (
              path.name
            )}
          </StyledContainerTitle>
        ) : (
          <Link key={path.path} href={path.to} passHref>
            <StyledNavLink>
              {path.isLoading ? (
                <ThreeDots
                  height="30"
                  width="30"
                  radius="9"
                  color="gray"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              ) : (
                path.name
              )}
            </StyledNavLink>
          </Link>
        )
      })}
    </StyledBreadcrumb>
  )
}

const StyledBreadcrumb = styled(Breadcrumbs)`
  width: 100%;
`
const StyledNavLink = styled.a`
  color: ${({ color }) => color || '#7395AE'};
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`
const StyledContainerTitle = styled.div`
  font-size: 18px;
  line-height: 27px;
  box-sizing: border-box;
  font-weight: 400;
  font-family: sans-serif;
  color: black;
`
