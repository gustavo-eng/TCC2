import { ConfigProvider, DatePicker, Space } from 'antd';
import ptBR from 'antd/es/date-picker/locale/pt_BR';
import ptBRGlobal from 'antd/es/locale/pt_BR';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';

dayjs.extend(buddhistEra);


// Component level locale
const buddhistLocale: typeof ptBR = {
  ...ptBR,
  lang: {
    ...ptBR.lang,
    fieldDateFormat: 'BBBB-MM-DD', //DD-MM-BBBB
    fieldDateTimeFormat: 'DD-MM-BBBB HH:mm:ss',
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

//const defaultValue = dayjs('2024-01-01');

interface TimerPickerProps {
  label: string;
  onChange: (date: any) => void;
  value: any;
}
const defaultValue = dayjs().startOf('year');

function TimerPicker({ label, onChange, value }: TimerPickerProps) {
    return (
    <Space direction="vertical">
        {JSON.stringify(defaultValue)}
      <ConfigProvider locale={globalBuddhistLocale}>
        <span className='text-gray-500 font-semibold'>{label}</span>
        <Space direction="vertical">
          <DatePicker defaultValue={defaultValue} showTime onChange={onChange} value={value} />
        </Space>
      </ConfigProvider>
    </Space>
  );
}

export default TimerPicker;
