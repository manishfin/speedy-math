import React from 'react';

import { Card } from 'antd';

function Option(props) {
    return (
        <Card>
            <Card.Grid style={{ width: '300px' }}>{props.value}</Card.Grid>
        </Card>
    );
}

export default Option;