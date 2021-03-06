import { memo, useState, useCallback, useContext } from "react";
import Link from "next/link";
import {
  StyledProduct,
  ProductLink,
  Cover,
  ProductContainer,
  CoverContainer,
  ProductName,
  Colors,
  Color,
  ColorButton,
  PriceContainer,
  Price,
  Abbr,
  LikeButton,
} from "../style";
import LikeSvg from "../../../svgs/heart";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/actions/productActions";
import { AuthContext } from "../../../contexts/auth";
import { LocaleContext } from "../../../contexts/locale";
import { useDispatch } from "react-redux";
import ImageSlider from "../../ImageSlider";
import formatPrice from "../../../utils/formatPrice";
import { ContentDirectionContext } from "../../../contexts/contentDirection";

const Product = ({ product, seller, inFavorites }) => {
  const { uid: userId } = useContext(AuthContext);
  const dispatch = useDispatch();

  // language
  const { locale } = useContext(LocaleContext);

  // content direction
  const contentDirection = useContext(ContentDirectionContext);

  const defaultColor =
    product.colors.find((color) => color.default) || colors[0];
  const [activeColor, setActiveColor] = useState(defaultColor);

  const productLink = {
    href: `/product/[id]/[color]`,
    asPrecedingText: `/product/${product.id}/`,
  };

  const handleLikeToggle = useCallback(() => {
    dispatch(
      inFavorites
        ? removeFromFavorites(userId, product.id)
        : addToFavorites(userId, product.id)
    );
  }, [inFavorites]);

  return (
    <StyledProduct key={product.id}>
      <ProductContainer>
        <Link
          passHref
          href={productLink.href}
          as={productLink.asPrecedingText + activeColor.value}
        >
          <ProductLink>
            <ImageSlider
              className="productsGrid__imageSlider"
              images={activeColor.images}
              height="22em"
            />
          </ProductLink>
        </Link>

        {product.colors.length > 1 && (
          <Colors>
            {product.colors.map(({ value: color }, index, colors) => (
              <Color key={color}>
                <ColorButton
                  aria-label={color}
                  color={color}
                  onClick={() => setActiveColor(colors[index])}
                  title={color}
                  data-active={color === activeColor.value}
                  onMouseDown={(e) => e.preventDefault()}
                />
              </Color>
            ))}
          </Colors>
        )}

        <Link
          passHref
          href={productLink.href}
          as={productLink.asPrecedingText + activeColor.value}
        >
          <ProductLink>
            <ProductName>{product.name}</ProductName>
          </ProductLink>
        </Link>

        <PriceContainer>
          <Price contentDirection={contentDirection}>
            {/* {product.price} <Abbr title="Egyptian">EGP</Abbr> */}
            {formatPrice(locale, product.price)}
          </Price>
          <LikeButton
            aria-label="Add to favorites"
            data-favorite={inFavorites}
            onClick={handleLikeToggle}
            onMouseDown={(e) => e.preventDefault()}
            contentDirection={contentDirection}
          >
            <LikeSvg className="product__likeSvg" />
          </LikeButton>
        </PriceContainer>
      </ProductContainer>
    </StyledProduct>
  );
};

export default memo(Product);
