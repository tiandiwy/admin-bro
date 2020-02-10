import styled from 'styled-components'
import {
  space, SpaceProps, color, ColorProps,
  size, SizeProps, layout, LayoutProps,
  flexbox, FlexboxProps, border, BorderProps,
  position, PositionProps, variant,
} from 'styled-system'

const variants = variant({
  variants: {
    grey: {
      flexGrow: 1,
      bg: 'greyPale',
      p: 'xl',
    },
    white: {
      p: 'xxl',
      bg: 'white',
    },
  },
})

/**
 * Prop Types of an Button component.
 * Apart from those defined below it extends all {@link SpaceProps}, {@link ColorProps}
 * {@link SizeProps}, {@link LayoutProps}, {@link FlexboxProps}, {@link PositionProps}
 * and {@link BorderProps}
 *
 * @memberof Box
 * @alias BoxProps
 * @property {string} [...] Other props from {@link SpaceProps}, {@link ColorProps}
 *                          {@link SizeProps}, {@link LayoutProps}, {@link FlexboxProps},
 *                          {@link PositionProps} and {@link BorderProps}
 */
export type BoxProps = SpaceProps & ColorProps & SizeProps & LayoutProps &
  Omit<FlexboxProps, 'flex'> & BorderProps & PositionProps & {
    /** If box should be rendered as flex */
    flex?: boolean;
    /** Box variants */
    variant?: 'grey' | 'white';
  }

/**
 * Main component which allows you to define entire layout of the application
 *
 * @component
 * @subcategory Atoms
 * @example <caption>Simple White/Gray wrapper</caption>
 * return (
 * <Box variant="grey">
 *   <Box variant="white">
 *     <Text>This is the default wrapper in the application</Text>
 *   </Box>
 * </Box>
 * )
 * @example <caption>Positioning buttons</caption>
 * return (
 * <Box variant="grey">
 *   <Box variant="white" flex flexDirection="row">
 *     <Box flexGrow={1}>
 *       <Header.H3>Some header</Header.H3>
 *     </Box>
 *     <Box flexShrink={0}>
 *       <Button>Example Button On The Right</Button>
 *     </Box>
 *   </Box>
 * </Box>
 * )
 */
export const Box = styled.section<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
  ${({ flex }): string => (flex ? 'display: flex;' : '')}
  font-family: ${({ theme }): string => theme.font};
  line-height: ${({ theme }): string => theme.lineHeights.default};
  font-size: ${({ theme }): string => theme.fontSizes.default};
  font-weight: normal;

  ${space};
  ${color};
  ${size};
  ${layout};
  ${flexbox};
  ${border};
  ${position};
  ${variants};
`

export default Box