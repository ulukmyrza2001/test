import styled from 'styled-components'

interface ContainerProps {
  children: any
  flex?: string
  align?: string
  justify?: string
}

export const Container = (props: ContainerProps) => {
  return (
    <Wrapper>
      <InnerWrapper flex={props.flex} align={props.align} justify={props.justify}>
        {props.children}
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
`
const InnerWrapper = styled.div<{ flex: any; align: any; justify: any }>`
  width: 100%;
  max-width: 1536px;
  background-color: #ffffff;
  display: ${({ flex }) => (flex ? flex : 'flex')};
  align-items: ${({ align }) => (align ? align : 'baseline')};
  justify-content: ${({ justify }) => (justify ? justify : 'initial')};
`
