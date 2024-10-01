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
  const defaultValue = dayjs().startOf('year'); // Manter o valor padrão como o ano atual gregoriano

  // Função para formatar a exibição no calendário budista
  const buddhistYearFormat = (date: any) => {
    if (!date) return ''; // Verifica se existe uma data
    return dayjs(date).format('DD-MM-') + (dayjs(date).year() + 543); // Adiciona 543 anos para exibição
  };

  return (
    <Space direction="vertical">
      <ConfigProvider locale={globalBuddhistLocale}>
        <span className="text-gray-500 font-semibold">{label}</span>
        <Space direction="vertical">
          <DatePicker
            showTime // Exibe o seletor de hora
            defaultValue={defaultValue} // Mantém o valor atual (gregoriano)
            format={buddhistYearFormat} // Exibe o ano budista
            onChange={onChange}
            value={value} // O valor controlado
          />
        </Space>
      </ConfigProvider>
    </Space>
  );
}

export default TimerPicker;
