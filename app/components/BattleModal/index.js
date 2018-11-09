// @flow
import 'antd/lib/modal/style/css';
import 'antd/lib/button/style/css';
import { Modal, Button } from 'antd';
import React from 'react';

type BattleProps = {
  visible: boolean,
  Champion: React$Element<>,
  Challenger: React$Element<>
}

function BattleModal(props : BattleProps){
  const { Champion, Challenger } = props;
  let { visible } = props;

  function setModalVisible(modal2Visible) {
    visible = modal2Visible;
  }

  return (
    <div>
      <Button type="primary" onClick={() => setModalVisible(true)}>Battle</Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={visible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        {Champion}
        {Challenger}
      </Modal>
    </div>
  );
}

export default BattleModal;
