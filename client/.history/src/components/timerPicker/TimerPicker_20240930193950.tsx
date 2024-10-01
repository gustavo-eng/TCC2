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
    fieldDateFormat: 'DD-MM-BBBB', // DD-MM-YYYY
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

interface TimerPickerProps {
  label: string;
  onChange: (date: any) => void;
  value: any;
}

function TimerPicker({ label, onChange, value }: TimerPickerProps) {
  // Define o valor padrão como o ano atual
  const defaultValue = dayjs().subtract(543, 'year').startOf('year'); // Ano com 543 anos subtraídos

  return (
    <Space direction="vertical">
      <ConfigProvider locale={globalBuddhistLocale}>
        <span className="text-gray-500 font-semibold">{label}</span>
        <Space direction="vertical">
          <DatePicker
            showTime // Exibe o seletor de hora
            //defaultValue={defaultValue} // Começa com o ano atual
            format="DD-MM-YYYY HH:mm" // Formato completo de data e hora
            onChange={onChange}
            value={2043} // O valor controlado
          />
        </Space>
      </ConfigProvider>
    </Space>
  );
}

export default TimerPicker;
