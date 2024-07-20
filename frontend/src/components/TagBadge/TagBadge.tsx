import styled from '@emotion/styled';

interface Props {
  $width?: keyof typeof widthSize;
  $color?: 'string';
}
const widthSize = { small: '36px', medium: '110px', large: '140px', full: '100%' };
const S = {
  TagBadge: styled.div<Props>`
    width: ${({ $width }) => ($width ? widthSize[$width] : 'fit-content')};
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 32px;
    color: ${({ $color, theme }) => ($color ? $color : theme.palette.grey300)};
    border: 2px solid;
    border-color: ${({ $color, theme }) => ($color ? $color : theme.palette.grey200)};
    border-radius: 10px;
    font-weight: ${({ theme }) => theme.text.weight.medium};
    font-size: ${({ theme }) => theme.text.size.small};
    font-color: ${({ $color, theme }) => ($color ? $color : theme.palette.black)};
    background-color: ${({ theme }) => theme.palette.white};
    padding: 6px 11px;
  `,
};

const TagBadge = S.TagBadge;

export default TagBadge;
