import styled from 'styled-components'

interface TitleProps {
  color?: string
  size?: string
  weight?: string
}

export const Title = styled.h3<TitleProps>`
  color: ${({ color }) => color || '#212529'};
  font-size: ${({ size }) => size || '20px'};
  letter-spacing: 0.5px;
  font-weight: ${({ weight }) => weight || '400'};
`

interface TextProps {
  color?: string
  size?: string
  weight?: string
}

export const Text = styled.p<TextProps>`
  color: ${({ color }) => color || '#383b3e'};
  font-size: ${({ size }) => size || '12px'};
  letter-spacing: 0.5px;
  font-weight: ${({ weight }) => weight || '400'};
`
