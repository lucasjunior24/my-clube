
import previewImage from '../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from '@/src/components/claimUsernameForm'
import styled from 'styled-components'


const Text = styled.p`
  color: #fff;
`
const Heading = styled.h2`
  color: #fff;
`

const Container = styled.div`
  background-color: yellow;
  height: 100vh;
`
export const Hero = styled.div`
  max-width: 400;
  padding: 0 10;

  ${Heading} {
    @media(max-width: 600px) {
      font-size: 6rem;
    }
  }

  ${Text} {
    margin-top: 2;
    /* color: '#fff'; */
  }
`

export const Preview = styled.div`
  padding-right: 8px;
  overflow: hidden;

  @media(max-width: 600px) {
    display: none;
  }
`
export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading >
          Agendamento descomplicado
        </Heading>
        <Text >
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt="Calendário simbolizando aplicação em funcionamentos"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
