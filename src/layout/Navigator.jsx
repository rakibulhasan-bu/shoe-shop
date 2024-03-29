import styled from "styled-components";
import { Logo, Menu, Cart } from "../icons/index";
import { avatar } from "../assets/imagedata";
import FloatingCart from "../components/FloatingCart";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const navLinks = ["collections", "men", "women", "about", "contact"];

const Navigator = () => {
  const { showSidebar, showCart, hideCart, state } = useGlobalContext();

  return (
    <NavigatorWrapper>
      <nav>
        <div className="nav-left">
          <button onClick={showSidebar} className="menu-btn">
            <Menu />
          </button>
          <Link to={"/"} className="text-2xl font-extrabold font-serif">
            Shoe Shop
          </Link>
          <ul className="nav-links">
            {navLinks.map((link, idx) => {
              return (
                <li key={idx}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-right">
          <button
            onClick={() => {
              if (state.showingCart) {
                hideCart();
              } else {
                showCart();
              }
            }}
            className="cart-btn"
          >
            <Cart />
            {state.totalCartSize > 0 && <span>{state.totalCartSize}</span>}
          </button>
          <button className="avatar-btn">
            <img src={avatar} alt="avatar" />
          </button>
          <FloatingCart className={`${state.showingCart ? "active" : ""}`} />
        </div>
      </nav>
    </NavigatorWrapper>
  );
};

const NavigatorWrapper = styled.header`
  position: relative;
  padding: 2.4rem;
  border-bottom: 1px solid hsl(var(--divider));

  img,
  svg {
    display: block;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .menu-btn {
      display: block;

      @media only screen and (min-width: 768px) {
        display: none;
      }
    }

    .nav-links {
      display: none;
    }
  }

  .nav-right {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .cart-btn {
      position: relative;

      svg,
      path {
        fill: hsl(var(--black));
      }

      span {
        user-select: none;
        position: absolute;
        top: -1rem;
        right: -1rem;
        background-color: hsl(var(--orange));
        font-weight: 700;
        color: hsl(var(--white));
        border-radius: 50%;
        padding: 0.3rem 0.8rem;
        font-size: 1.1rem;
      }
    }

    .avatar-btn {
      height: 2.4rem;
      width: 2.4rem;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 4rem;
    .nav-left {
      .nav-links {
        display: flex;
        gap: 2.2rem;
        list-style: none;
        margin-left: 3rem;
        a {
          text-decoration: none;
          font-size: 1.2rem;
          text-transform: capitalize;
          color: hsl(var(--dark-grayish-blue));
        }
      }
    }

    .nav-right {
      gap: 2.4rem;

      .avatar-btn {
        height: 3.5rem;
        width: 3.5rem;
        &:hover {
          outline: 2px solid hsl(var(--orange));
        }
      }
    }
  }

  @media only screen and (min-width: 1000px) {
    padding: 1rem 0;
    max-width: 90%;
    margin: 0 auto;

    .nav-right {
      gap: 2.7rem;
      justify-content: space-between;
      .avatar-btn {
        height: 2.5rem;
        width: 2.5rem;

        img {
          width: 100%;
        }
      }
    }
  }
`;

export default Navigator;
