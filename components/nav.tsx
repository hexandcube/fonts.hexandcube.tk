import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'react-feather';
import Link from 'next/link';
import {
  Logo,
  SimpleButton,
  NavWrapper,
  NavInner,
  NavLeft,
  LogoButton,
  NavRight,
  MobileMenu
} from '@varld/fontless-components';
import { useSize, useScroll } from '@varld/fontless-hooks';

export let Navbar = ({ name }: { name: string }) => {
  let [open, setOpen] = useState(false);
  let { width } = useSize();
  let { y } = useScroll();
  let lastYRef = useRef<number>();

  useEffect(() => {
    if (width > 870 && open) setOpen(false);
  }, [width, open]);

  useEffect(() => {
    if (y != lastYRef.current && open) {
      setOpen(false);
    }

    lastYRef.current = y;
  }, [y, open]);

  let isMobile = width <= 870;

  return (
    <NavWrapper scrolled={isMobile}>
      <NavInner>
        <NavLeft>
          <Link href="/">
            <LogoButton>
              <Logo noText />

              {!isMobile && <span style={{ marginLeft: 10 }}>{name}</span>}
            </LogoButton>
          </Link>
        </NavLeft>

        <NavRight>
          <div className="inner mobile">
            <SimpleButton onClick={() => setOpen(!open)}>
              <div className="icon">
                <ChevronDown />
              </div>
            </SimpleButton>
          </div>

          <div className="inner desktop">
            <a href="https://hexandcube.tk/" target="_blank" rel="noopener noreferrer">
              <SimpleButton>Hexandcube</SimpleButton>
            </a>
          </div>
        </NavRight>
      </NavInner>

      {isMobile && (
        <MobileMenu open={open}>
          <Link href="https://hexandcube.tk">
            <SimpleButton>Hexandcube</SimpleButton>
          </Link>

          <Link href="https://fontless.varld.co/">
            <SimpleButton>Fontless</SimpleButton>
          </Link>
        </MobileMenu>
      )}
    </NavWrapper>
  );
};
