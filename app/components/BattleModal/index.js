// @flow
import 'antd/lib/modal/style/css';
import { Modal } from 'antd';
import React from 'react';
import DisplayCard from '../DisplayCard';

type BattleProps = {
  visible: boolean,
  champion: number,
  challenger: number,
  onCancel: () => null,
  onWin: (number) => null,
}

function BattleModal(props : BattleProps) {
  const {
    champion, challenger, onCancel, visible, onWin
  } = props;
  return (
    <div>
      <Modal
        centered
        visible={visible}
        onCancel={onCancel}
        footer={null}
      >
        {champion && challenger ? (
          <div>
            <DisplayCard id={champion.id} url={champion.img.url} height={champion.img.height} width={champion.img.width} onClick={onWin} />
            <DisplayCard id={challenger.id} url={challenger.img.url} height={challenger.img.height} width={challenger.img.width} onClick={onWin} />
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
export default BattleModal;
