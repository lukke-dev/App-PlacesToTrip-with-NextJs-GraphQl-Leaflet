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
        faucibus. Vivamus a feugiat nunc, nec facilisis metus. Cras pellentesque
        ante in ligula vehicula blandit eget ac metus. Suspendisse sagittis diam
        augue, sed commodo justo euismod sit amet. Phasellus vitae lacus ut
        lectus iaculis mattis at nec tortor. Suspendisse potenti. Vivamus sed
        metus rhoncus, elementum magna et, vulputate metus. Suspendisse dictum
        placerat leo sit amet convallis. In ac nibh in nunc pulvinar vehicula ut
        eget felis. Integer elementum elit vitae semper fermentum. Morbi
        malesuada vel urna sed ultricies. Donec suscipit nisl porttitor dui
        cursus congue. Nunc mattis urna eget sapien pharetra, tempor aliquet
        arcu sagittis. Aliquam convallis velit urna, ut pharetra metus auctor
        id. Donec vel sem convallis, rutrum libero at, scelerisque dolor.
        Maecenas placerat nunc eget justo faucibus, nec sodales nulla varius.
        Phasellus nec felis nulla. Suspendisse eu sem orci. Duis nec libero eu
        lacus fringilla placerat. Nunc consectetur metus vel eros aliquet
        dignissim. Curabitur ut scelerisque tortor. Donec odio sapien, ultrices
        quis ultricies non, vehicula ut lectus.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
