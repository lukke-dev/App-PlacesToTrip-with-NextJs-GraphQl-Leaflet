import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Home" />
    </LinkWrapper>
    <S.Heading>Places to Trip</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo
        ac tortor tristique pretium. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Curabitur euismod neque non
        laoreet commodo. Interdum et malesuada fames ac ante ipsum primis in
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
