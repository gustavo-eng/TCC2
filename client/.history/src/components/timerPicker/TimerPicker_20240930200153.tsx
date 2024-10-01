import { ConfigProvider, DatePicker, Space } from 'antd';
import ptBR from 'antd/es/date-picker/locale/pt_BR';
import ptBRGlobal from 'antd/es/locale/pt_BR';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; // Importa o locale pt-br

dayjs.locale('pt-br'); // Define o locale para português brasileiro

// Component level locale
const gregorianLocale: typeof ptBR = {
  ...ptBR,
  lang: {
    ...ptBR.lang,
    fieldDateFormat: 'DD-MM-YYYY', // Corrige para o formato gregoriano
    fieldDateTimeFormat: 'DD-MM-YYYY HH:mm:ss',
    yearFormat: 'YYYY',
    cellYearFormat: 'YYYY',
  },
};

// ConfigProvider level locale
const globalGregorianLocale: typeof ptBRGlobal = {
  ...ptBRGlobal,
  DatePicker: {
    ...ptBRGlobal.DatePicker!,
    lang: gregorianLocale.lang,
  },
};

interface TimerPickerProps {
  label: string;
  onChange: (date: any) => void;
  value: any;
}

function TimerPicker({ label, onChange, value }: TimerPickerProps) {
  const defaultValue = dayjs().startOf('year'); // Manter o valor padrão como o ano atual gregoriano

  return (
    <Space direction="vertical">
      <ConfigProvider locale={globalGregorianLocale}>
        <span className="text-gray-500 font-semibold">{label}</span>
        <Space direction="vertical">
          <DatePicker
            showTime // Exibe o seletor de hora
            defaultValue={defaultValue} // Mantém o valor atual (gregoriano)
            format="DD-MM-YYYY" // Usa o formato padrão gregoriano
            onChange={onChange}
            value={value} // O valor controlado
          />
        </Space>
      </ConfigProvider>
    </Space>
  );
}

export default TimerPicker;
