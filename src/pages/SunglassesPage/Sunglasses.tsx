import { useEffect, useState } from "react";
import * as S from "./Sunglasses.styles";
import { MainLayout } from "../../layout/MainLayout";
import { fetchList } from "../../repositories/sunglassesRepositories";
import Product from "./components/Product";
import { Sunglasses } from "../../types/sunglassesType";

const Sunglassses = () => {
  const [products, setProducts] = useState<Sunglasses[]>([]);

  useEffect(() => {
    fetchList().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <MainLayout>
      <S.ListContainer>
        <S.List>
          {products.map((e) => {
            return <Product title={e.name} id={e.UPC}/>;
          })}
        </S.List>
      </S.ListContainer>
    </MainLayout>
  );
};

export default Sunglassses;
