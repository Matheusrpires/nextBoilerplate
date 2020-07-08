import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, React, Next e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao Lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para a tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
