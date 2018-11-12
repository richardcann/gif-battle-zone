// @flow
import 'antd/lib/modal/style/css';
import 'antd/lib/rate/style/css';
import { Modal, Rate } from 'antd';
import React from 'react';
import DisplayCard from '../DisplayCard';
import './style.scss';

type BattleProps = {
  visible: boolean,
  champion: number,
  challenger: number,
  onCancel: () => null,
  onWin: (number) => null,
  animateLoss: boolean | number
}

function BattleModal(props : BattleProps) {
  const {
    champion, challenger, onCancel, visible, onWin, animateLoss, newBattle, setRating
  } = props;
  if (animateLoss !== false && champion && challenger){
    if(animateLoss === champion.id){
      champion.className = 'animate bounceOut';
    }
    else if (animateLoss === challenger.id){
      challenger.className = 'animate bounceOut';
    }
  }
  return (
    <div>
      <Modal
        centered
        visible={visible}
        onCancel={onCancel}
        footer={null}
        className="BattleModal-modal"
      >
        {champion && challenger ? (
          <div className="BattleModal-container">
            <DisplayCard
              id={champion.id}
              className={champion.className}
              animationEnd={() => newBattle(challenger.id)}
              url={champion.img.url}
              height={champion.img.height}
              width={champion.img.width}
              onClick={onWin}/>
            <img className="BattleModal-versus" src="https://rsmconnect.com/wp-content/uploads/Icon-vs.png" />
            <DisplayCard id={challenger.id} className={challenger.className} animationEnd={() => newBattle(champion.id)} url={challenger.img.url} height={challenger.img.height} width={challenger.img.width} onClick={onWin} />
            <div className="BattleModal-rater">
              <label>Rate this category: </label>
              <Rate allowHalf defaultValue={2.5} onChange={setRating}/>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
export default BattleModal;
