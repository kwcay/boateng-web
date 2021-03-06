import Color from 'color';
import styled, { StyledProps } from 'styled-components';

export const HERO_AMBER = 'amber';
export const HERO_GREEN = 'green';
export const HERO_IMAGE = 'image';
export const HERO_PURPLE = 'purple';
export const HERO_WHITE = 'white';

type HeroStyling =
  | typeof HERO_AMBER
  | typeof HERO_GREEN
  | typeof HERO_IMAGE
  | typeof HERO_PURPLE
  | typeof HERO_WHITE;

export interface HeroProps {
  height?: string;
  justify?: string;
  padding?: string;
  styling?: HeroStyling;
}

type StyledHeroProps = StyledProps<HeroProps>;

const heroImg = '/assets/images/bg/2d367c83ace8e17b5d262944c7044aee.jpg';

const bgGradientDelta = 0.0;

const getBackground = ({ styling, theme }: StyledHeroProps): string => {
  switch (styling) {
    case HERO_IMAGE:
      return `center center no-repeat url("${heroImg}")`;

    case HERO_AMBER:
      return `linear-gradient(
        ${theme.amber.string()},
        ${theme.amber.darken(bgGradientDelta).string()}
      )`;

    case HERO_GREEN:
      return `linear-gradient(
        ${theme.green.string()},
        ${theme.green.darken(bgGradientDelta).string()}
      )`;

    case HERO_PURPLE:
      return `linear-gradient(
        ${theme.purple.string()},
        ${theme.purple.darken(bgGradientDelta).string()}
      )`;

    default:
      return 'white';
  }
};

const getColor = ({ styling, theme }: StyledHeroProps): Color => {
  switch (styling) {
    case HERO_IMAGE:
    case HERO_GREEN:
    case HERO_PURPLE:
      return theme.white;

    default:
      return theme.textColor;
  }
};

const Hero = styled.div<HeroProps>`
  background: ${props => getBackground(props)};
  background-size: cover;
  box-sizing: border-box;
  color: ${props => getColor(props).string()};
  height: ${props => props.height || '100vh'};
  padding: ${props => props.padding || '1rem'};

  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify || 'center'};
`;

export default Hero;
