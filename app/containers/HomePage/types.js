// @flow

type GifDetails = {
  url : string,
  width : string,
  height : string,
  size : string
}

type GifImage = {
  images : {downsized : GifDetails}
}

export type GifData = {
  gifs : Array<GifImage>
}

export type HomePageProps = {
  onSearchCategory : (string) => null,
  setRating: (number) => null,
  addRating: (number, string) => null,
  homeGifLeft: {url : string},
  homeGifRight: {url : string},
  closeError: () => null,
  trends: Array<{name : string}>,
  error: boolean | string,
  search: string,
  currentRating: number,
  recommended: Array<string>,
  battleMode: boolean,
  gifs: GifImage,
  winner: number,
  challenger: number,
  exitBattle: () => null,
  animatingLoss: boolean,
  setHomeGifLeft: () => null,
  setHomeGifRight: () => null,
  setRecommendations: (Array<string>) => null,
  setTrends: () => null,
  animateLoss: (number | boolean) => null,
  enterBattle: ({champion : number, challenger : number}) => null
}

export type State = {
  search: ?string,
  battleMode: boolean,
  winner: ?number,
  challenger: ?number,
  loading: boolean,
  animateLoss: boolean,
  error: boolean,
  recommended: ?Array<string>,
  currentRating: ?number,
  homeGifLeft: ?number,
  homeGifRight: ?number,
  trends: Array<{ name: string }>,
  data: {
    gifs: boolean,
  },
  set: (string, any) => State,
  setIn: (Array<string>, any) => State
}
