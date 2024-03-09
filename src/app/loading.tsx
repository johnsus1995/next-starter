import { Spin } from 'antd';
import * as React from 'react';

export default function Loading() {
  return (
    <div>
      <Spin
        // delay={3000}
        size='large'
        spinning
        fullscreen
        // indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      />
    </div>
  );
}
