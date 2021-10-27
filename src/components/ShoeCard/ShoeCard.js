import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default

  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  // We evaluate the value of the variant props and assign a variant style and inner text accordingly.
  let SalePriceComponent;
  if (variant === "new-release") {
    SalePriceComponent = NewReleaseStyle;
    SalePriceComponent.innerText = "Just Released!";
  } else if (variant === "on-sale") {
    SalePriceComponent = OnSaleStyle;
    SalePriceComponent.innerText = "Sale";
  } else if (variant === "default") {
    SalePriceComponent = defaultStyle;
  } else {
    throw new Error(`Unrecognized variant: ${variant}`);
  }

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <SalePriceComponent variant={variant}>
          {SalePriceComponent.innerText}
        </SalePriceComponent>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  width: 315px;
  position: relative;
  isolation: isolate;
`;

const ImageWrapper = styled.div`
  position: relative;
  line-height: 0;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
  border-radius: 2px;
  padding: 8px;
  position: absolute;
  right: -4px;
  top: 8px;
  z-index: 2;
`;

// define les diff variant styles du composant SalePrice with styled component composition
const NewReleaseStyle = styled(SalePrice)`
  background-color: ${COLORS.secondary};
`;
const OnSaleStyle = styled(SalePrice)`
  background-color: ${COLORS.primary};
`;
const defaultStyle = styled(SalePrice)`
  display: none;
`;

export default ShoeCard;
