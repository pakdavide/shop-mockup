import * as S from "../Sunglasses.styles";

export type ProductView = {
  images?: string;
  title: string;
  id: string;

};

const Product = ({ images, title, id }: ProductView) => {
  return (
    <S.Product id={id}>
      <S.ImageContainer>
        <img src={images||"https://fakeimg.pl/600/"} />
      </S.ImageContainer>
      <S.ActionContainer>
        <S.ProductName>{title}</S.ProductName>
      </S.ActionContainer>
    </S.Product>
  );
};

export default Product;
