import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  border: 1px solid lightGrey;
  padding: 10px;
  border-radius: 20px;
  flex: 0 1 calc(24% - 1em);
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
  @media screen and (max-width: 1800px) {
    flex: 0 1 calc(32% - 1em);
  }
  @media screen and (max-width: 1300px) {
    flex: 0 1 calc(48% - 1em);
  }
  @media screen and (max-width: 768px) {
    flex: 0 1 calc(100% - 1em);
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  & > img {
    border-radius: 20px;
    max-width: 100%;
  }
`;

export const ActionContainer = styled.div`
  text-align-center;
`;

export const ProductName = styled.h2`
  color: ;
`;

export const Slider = styled.h2``;
