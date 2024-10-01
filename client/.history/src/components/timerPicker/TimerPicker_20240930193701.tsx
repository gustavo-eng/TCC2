import { ConfigProvider, DatePicker, Space } from 'antd';
import ptBR from 'antd/es/date-picker/locale/pt_BR';
import ptBRGlobal from 'antd/es/locale/pt_BR';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';

dayjs.extend(buddhistEra);

const buddhistLocale: typeof ptBR = {
  ...ptBR,
  lang: {
    ...ptBR.lang,
    fieldDateFormat: 'DD-MM-BBBB',
    fieldDateTimeFormat: 'DD-MM-BBBB HH:mm:ss',
    yearFormat: 'BBBB',
    cellYearFormat: 'BBBB',
  },
};

const globalBuddhistLocale: typeof ptBRGlobal = {
  ...ptBRGlobal,
  DatePicker: {
    ...ptBRGlobal.DatePicker!,
    lang: buddhistLocale.lang,
  },
};

interface TimerPickerProps {
  label: string;
  onChange: (date: any) => void;
  value: any;
}

function TimerPicker({ label, onChange, value }: TimerPickerProps) {
  const defaultValue = dayjs(); // Ano atual com data completa

  // Função para exibir o ano budista
  const handleFormatBuddhistYear = (date: any) => {
    if (!date) return '';
    return dayjs(date).format('DD-MM-') + (dayjs(date).year() + 543); // Ajusta o ano para o budista
  };

  return (
    <Space direction="vertical">
      <ConfigProvider locale={globalBuddhistLocale}>
        <span className="text-gray-500 font-semibold">{label}</span>
        <Space direction="vertical">
          <DatePicker
            showTime
            defaultValue={defaultValue}
            format={(date) => handleFormatBuddhistYear(date)} // Formata a exibição para era budista
            onChange={onChange}
            value={value}
          />
        </Space>
      </ConfigProvider>
    </Space>
  );
}

export default TimerPicker;
