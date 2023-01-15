import React from 'react';

let Button;
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
if (isMobile) {
  Button = React.lazy(() => import/* webpackChunkName: "antd-mobile" */('antd-mobile/es/components/button'));
} else {
  Button = React.lazy(() => import/* webpackChunkName: "antd" */('antd/es/button'));
}

export { Button };
