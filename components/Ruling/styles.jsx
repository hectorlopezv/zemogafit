import styled from '@emotion/styled'

export const Content = styled.div`
  border: 1px solid #f1f1f1;
  height: 100%;
  z-index: 2;
`

export const Thumb = styled.div`
  /* width: 100%;
  height: 100%; */
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  mask-image: linear-gradient(0deg, rgba(48, 67, 99, 1) 0%, rgba(22, 13, 7, 1) 80%, rgba(159, 152, 127, 1) 100%);
`

export const LikesPercentages = styled.div`
  flex: ${props => props.percent};
`
