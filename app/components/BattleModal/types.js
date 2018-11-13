// @flow
type Contender = {
  id: number,
  className?: string,
  img: {url : string}
}

export type BattleProps = {
  visible: boolean,
  champion: Contender,
  challenger: Contender,
  onCancel: () => null,
  onWin: (number) => null,
  animateLoss: boolean | number,
  newBattle: (number) => null,
  setRating: (number) => null
}
