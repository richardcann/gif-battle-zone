// @flow
export type DisplayProps = {
  url: string,
  id: number,
  onClick: (number) => null,
  className?: string,
  animationEnd?: () => null
}

export type DisplayState = {
  loading: boolean
};
