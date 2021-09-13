import React from 'react'
import styled, { keyframes, css } from 'styled-components'

import { Matchday } from 'state/types'
import Matches from 'views/SportParties/Matchdays/Matches'
import { TheDateProps } from '../TheDate'
import { MatchdayProps } from '../Matchday'

export interface ActionPanelProps {
  matchday: MatchdayProps
  theDate: TheDateProps
  details: Matchday
  userDataReady: boolean
  expanded: boolean
}

const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 500px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 500px;
  }
  to {
    max-height: 0px;
  }
`

const Container = styled.div<{ expanded }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    flex-direction: column;
    padding: 16px 32px;
  }
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({ details, expanded }) => {
  return (
    <Container expanded={expanded}>
      <Matches {...details} />
    </Container>
  )
}

export default ActionPanel