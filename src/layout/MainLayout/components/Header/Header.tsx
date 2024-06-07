import * as S from "./Header.styles";
import { AppRoutes } from "../../../../Routes.const";
import { useResolvedPath } from "react-router";

const Header = () => {
  const path = useResolvedPath("").pathname;
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <img src="https://fakeimg.pl/100x50/" alt="logo" />
      </S.LogoContainer>
      <S.NavContainer>
        <S.Navigation>
          <S.NavigationLink
            to={AppRoutes.Sunglasses.home}
            isSelected={path === AppRoutes.Sunglasses.home}
          >
            Sunglasses
          </S.NavigationLink>
          <S.NavigationLink
            to={AppRoutes.Eyeglasses.home}
            isSelected={path === AppRoutes.Eyeglasses.home}
          >
            Eyeglasses
          </S.NavigationLink>
          <S.NavigationLink
            to={AppRoutes.Lenses.home}
            isSelected={path === AppRoutes.Lenses.home}
          >
            Lenses
          </S.NavigationLink>
        </S.Navigation>
      </S.NavContainer>
      <S.SearchContainer>
        <label htmlFor="site-search">Search the site:</label>
        <input type="search" id="site-search" name="q" />
        <button>Search</button>
      </S.SearchContainer>
    </S.HeaderContainer>
  );
};

export default Header;
