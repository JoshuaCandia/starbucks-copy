import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarItem,
  Link,
  Button,
  Image,
} from '@nextui-org/react'
import logo from '../assets/logo.png'
export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar className='static h-[4.5rem]' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Image src={logo} alt='logo' width='50' height='50' />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Sign in</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className='hidden lg:flex'
            color='primary'
            href='#'
            variant='flat'
          >
            Join now
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className='w-full' href='#' size='lg'>
            Menú
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='#' size='lg'>
            Rewards
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='#' size='lg'>
            Gift Cards
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
