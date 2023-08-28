import { Heading, Text } from '@ignite-ui/react'
import { Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from '@/src/components/claimUsernameForm'
import styled from 'styled-components'

const Container = styled.div`
  background-color: red;
  height: 100vh;
`
export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
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
