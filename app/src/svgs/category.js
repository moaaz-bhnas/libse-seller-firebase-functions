import { memo } from "react";
import styled from "styled-components";

const CategorySvg = () => {
  return (
    <StyledCategorySvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 271.673 271.673"
      className="svg categorySvg"
      style={{ enableBackground: "new 0 0 271.673 271.673" }}
    >
      <CategorySvgPath
        d="M114.939,0H10.449C4.678,0,0,4.678,0,10.449v104.49c0,5.771,4.678,10.449,10.449,10.449h104.49
				c5.771,0,10.449-4.678,10.449-10.449V10.449C125.388,4.678,120.71,0,114.939,0z"
      />
      <CategorySvgPath
        d="M261.224,0h-104.49c-5.771,0-10.449,4.678-10.449,10.449v104.49c0,5.771,4.678,10.449,10.449,10.449h104.49
				c5.771,0,10.449-4.678,10.449-10.449V10.449C271.673,4.678,266.995,0,261.224,0z"
      />
      <CategorySvgPath
        d="M114.939,146.286H10.449C4.678,146.286,0,150.964,0,156.735v104.49c0,5.771,4.678,10.449,10.449,10.449h104.49
				c5.771,0,10.449-4.678,10.449-10.449v-104.49C125.388,150.964,120.71,146.286,114.939,146.286z"
      />
      <CategorySvgPath
        d="M261.224,146.286h-104.49c-5.771,0-10.449,4.678-10.449,10.449v104.49c0,5.771,4.678,10.449,10.449,10.449h104.49
				c5.771,0,10.449-4.678,10.449-10.449v-104.49C271.673,150.964,266.995,146.286,261.224,146.286z"
      />
    </StyledCategorySvg>
  );
};

const StyledCategorySvg = styled.svg``;

const CategorySvgPath = styled.path``;

export default memo(CategorySvg);
