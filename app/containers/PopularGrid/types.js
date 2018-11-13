// @flow
export type PopularGridProps = {
  searchValue: string,
  onSearch: (string) => null,
  recommended: Array<string>,
  trends: Array<{name : string}>
}
