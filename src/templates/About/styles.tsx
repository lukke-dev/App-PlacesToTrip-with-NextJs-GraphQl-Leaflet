import styled from 'styled-components'

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  margin: auto;
  max-width: var(--container);
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Body = styled.div`
  p {
    font-size: var(--medium);
  }
`
