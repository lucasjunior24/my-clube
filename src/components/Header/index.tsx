import { HeaderContainer } from './styled'

import LogoIgnite from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={LogoIgnite} alt="" />
      <nav>
        <Link href="" title="Timer">
          <Timer size={24} />
        </Link>
        <Link href="" title="Historíco">
          <Scroll size={24} />
        </Link>
      </nav>
    </HeaderContainer>
  )
}
