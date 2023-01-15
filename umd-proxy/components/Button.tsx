import React from 'react';

let Button;
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
if (isMobile) {
  Button = React.lazy(async () => {
    const antdMobile = await import/* webpackChunkName: "antd-mobile" */('antd-mobile');
    return { default: antdMobile.Button };
  });
} else {
  Button = React.lazy(async () => {
    const antd = await import/* webpackChunkName: "antd" */('antd');
    return { default: antd.Button };
  });
}

export { Button };
