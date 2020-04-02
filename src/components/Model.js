import React from 'react';
import { Button, Modal } from 'antd';

function Model(props) {
    return (
        <div>
            <Modal
                title="Game Over"
                visible={props.visible}
                onCancel={() => props.callBack()}
                footer={[
                    <Button key="back" onClick={() => props.callBack()}>Cancel</Button>,
                    <Button key="restart" type="primary" onClick={() => props.callBack()}>Restart</Button>,
                ]}
            >
                <p><b>Total Score:</b> {props.totalScore}</p>
                <p><b>Total Time:</b> {props.totalTime}</p>
            </Modal>
        </div>
    );
}

export default Model;