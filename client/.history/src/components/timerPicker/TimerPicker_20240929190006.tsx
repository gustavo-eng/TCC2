import { ConfigProvider, DatePicker, Space, Typography } from 'antd';
import ptBR from 'antd/es/date-picker/locale/pt_BR';
import ptBRGlobal from 'antd/es/locale/pt_BR';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import './index.css';

dayjs.extend(buddhistEra);

const { Title } = Typography;

// Component level locale
const buddhistLocale: typeof ptBR = {
  ...ptBR,
  lang: {
    ...ptBR.lang,
    fieldDateFormat: 'BBBB-MM-DD',
    fieldDateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
    yearFormat: 'BBBB',
    cellYearFormat: 'BBBB',
  },
};

// ConfigProvider level locale
const globalBuddhistLocale: typeof ptBRGlobal = {
  ...ptBRGlobal,
  DatePicker: {
    ...ptBRGlobal.DatePicker!,
    lang: buddhistLocale.lang,
  },
};

function TimerPicker() {
    <Space direction="vertical">
    <Title level={4}>Por locale nas props</Title>
    <DatePicker defaultValue={defaultValue} locale={buddhistLocale} onChange={onChange} />
    <DatePicker
      defaultValue={defaultValue}
      showTime
      locale={buddhistLocale}
      onChange={onChange}
    />

    <Title level={4}>Por ConfigProvider</Title>
    <ConfigProvider locale={globalBuddhistLocale}>
      <Space direction="vertical">
        <DatePicker defaultValue={defaultValue} onChange={onChange} />
        <DatePicker defaultValue={defaultValue} showTime onChange={onChange} />
      </Space>
    </ConfigProvider>
  </Space>
}

export  default TimerPicker