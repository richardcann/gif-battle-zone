// @flow
type MediaType = {
  left: {url : string},
  right: {url : string}
}

export type HeaderProps = {
  media: MediaType,
  onClick: () => null,
  error: boolean,
  closeError: () => null
}
