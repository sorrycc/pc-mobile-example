export default {
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    dayjs: 'dayjs',
    antd: ["script https://unpkg.com/antd@5.1.4/dist/antd.min.js", 'antd'],
    'antd-mobile': ["script https://unpkg.com/antd-mobile@5.28.0/umd/antd-mobile.js", 'antdMobile'],
  },
  headScripts: [
    'https://unpkg.com/react@18.2.0/umd/react.production.min.js',
    'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
    'https://unpkg.com/dayjs@1.11.7/dayjs.min.js',
  ],
  mfsu: false,
};
