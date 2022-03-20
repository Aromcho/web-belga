import React from "react";
import Link from "next/link";
import { PATHS } from "config";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";

import { Container } from "components/layout";
import { Button } from "components/button";

import {
  MenuContainer,
  MenuWrapper,
  MenuBrandWrapper,
  MenuBrand,
  MenuItem,
  MenuList,
  MenuInfo,
  MenuInfoItem,
  MenuInfoList,
  BurgerButton,
  IconWrapper,
  BurgerMenu,
  BurgerMenuList,
  BurgerMenuItem,
  LinkText
} from "./menu.styles";

/*Icons*/
import { TelIcon, WhatsappIcon, MenuBurgerIcon, CloseIcon, BelgaIsoIcon, SearchIcon, HeartIcon } from "components/icons";
import { classes } from "helpers";

export const Menu = observer(() => {
  const {
    rootStore: { userStore },
  } = useStore();

  /* Handle Menu */
  const [showMenu, setShowMenu] = React.useState<boolean>(false)
  const [sticky, setSticky] = React.useState<boolean>(false)
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      const st = window.pageYOffset;
      st > 0 ? setSticky(true) : setSticky(false)
    }, false);
  }

  return (
    <MenuContainer className={classes({ sticky })}>
      <MenuInfo>
        <MenuInfoList>
          <MenuInfoItem>La imprenta</MenuInfoItem>
          <MenuInfoItem>Belgrano C</MenuInfoItem>
          <MenuInfoItem>Belgrano R</MenuInfoItem>

          <MenuInfoItem><Link href='tel:+541152633393' ><a className='info--link'><TelIcon /> +54 11 5263 3393</a></Link></MenuInfoItem>
          <MenuInfoItem><Link href='https://api.whatsapp.com/send?phone=5491169462894&text=Hola%20Belga!%20%F0%9F%91%8B%20Quisiera%20hacerles%20una%20consulta.' ><a className='info--link' target='_blank'><WhatsappIcon /> +54 11 6946 2894</a></Link></MenuInfoItem>
        </MenuInfoList>
      </MenuInfo>

      <MenuWrapper>
        <Container className="align--center menu--container">

          <Link href={PATHS.ROOT}><a>
            <MenuBrandWrapper>
              <MenuBrand src="/images/brand_red.svg" alt="Belga inmobiliaria" title="Belga inmobiliaria" />
              <BelgaIsoIcon className='isobrand--img' />
            </MenuBrandWrapper>
          </a></Link>

          <MenuList>
            <MenuItem><Link href='#'><a className='menu--link'>Quiero comprar</a></Link></MenuItem>
            <MenuItem><Link href='#'><a className='menu--link'>Emprendimientos</a></Link></MenuItem>
            <MenuItem><Button text='Quiero vender' className='button--menu' /></MenuItem>
          </MenuList>

        </Container>

        <BurgerButton onClick={() => setShowMenu(!showMenu)} className={classes({ active: showMenu })}>
          <IconWrapper>
            <MenuBurgerIcon className={classes({ active: !showMenu })} />
            <CloseIcon className={classes({ active: showMenu })} />
          </IconWrapper>
        </BurgerButton>
        <BurgerMenu className={classes({ active: showMenu })}>

          <BurgerMenuList>
            <BurgerMenuItem>
              <Link href={PATHS.ROOT}><a className="burger--menu-link"><HeartIcon /> <LinkText>Favoritos</LinkText></a></Link>
            </BurgerMenuItem>

            <BurgerMenuItem>
              <Link href={PATHS.ROOT}><a className="burger--menu-link"><SearchIcon /> <LinkText>Búsquedas</LinkText></a></Link>
            </BurgerMenuItem>

            <BurgerMenuItem>
              <Link href={PATHS.ROOT}><a className="burger--menu-link"><BelgaIsoIcon /> <LinkText>Conocé Belga</LinkText></a></Link>
            </BurgerMenuItem>

            <BurgerMenuItem>
              <Link href={PATHS.ROOT}><a className="burger--menu-link"><TelIcon /> <LinkText>Contáctanos</LinkText></a></Link>
            </BurgerMenuItem>
          </BurgerMenuList>

        </BurgerMenu>


      </MenuWrapper>
    </MenuContainer >
  );
});
