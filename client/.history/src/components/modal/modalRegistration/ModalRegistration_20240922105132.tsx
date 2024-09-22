import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAppSelector from "../../../hooks/useAppSelector";
import client from "../../../service/client";
import { authSelector } from "../../../store/auth/authReducer";
import FileInput from "../../FileInput/FileInput";
import Select from "../../select/Select";
import Modal from "../Modal";

interface ModalRegistrationProps {
  isOpen: boolean;
  nameCompetition?: string;
  startDate?: string;
  textHeader?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  onClose: () => void;
  description?: string;
  idEvent?: string;
  idPayment?: string | number;
  idAthlete?: string | number;
  idCategory?: string | number;
}

let mockData = [
  { idEvent: "1", nameCompetition: "Evento de id 1" },
  { idEvent: "2", nameCompetition: "Evento de id 2" },
];

function findEventById(mockData: any, id: any) {
  return mockData.find((event: { idEvent: any }) => event.idEvent === id);
}

export default function ModalRegistration({
  isOpen = false,
  nameCompetition = "Nome da competicao",
  description,
  startDate,
  endDate,
  startTime,
  endTime,
  onClose,
  textHeader,
  idEvent,
  idPayment,
}: ModalRegistrationProps) {
  const [classCategory, setClassCategory] = useState<any>();
  const [classCategoryOptions, setClassCategoryOptions] = useState<any>();
  const [gender, setGender] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [file, setFile] = useState<any>(null);
  const [allCategory, setAllCategory] = useState<any>();
  const [optionsGenderGenerate, setOptionsGenderGenerate] = useState<any>();
  const { user } = useAppSelector(authSelector);

  // Chamar client.category.get() apenas quando o componente for montado
  function getWeightsByGenderAndClass(gender: any, classCategory: any) {
    // Filtra os itens que correspondem ao gender e classCategory
        const filteredCategories = allCategory.filter((category: { gender: any; classCategory: any; }) =>
            category.gender === gender && category.classCategory === classCategory
        );

        // Combina todos os weights e remove duplicatas
        const combinedWeights = filteredCategories.flatMap((category: { weight: string; }) =>
            JSON.parse(category.weight) // Converte a string para array
        );

        // Remove duplicatas e retorna o array final
        return Array.from(new Set(combinedWeights));
    }


  useEffect(() => {
    const getOptionsGender = async () => {
      try {
        const response = await client.category.get();
        const categories = response.payload;
        setAllCategory(categories);
        const optionsGender = Array.from(
          new Set(
            categories.map((category: { gender: any }) => category.gender)
          )
        ).map((gender) => ({
          value: gender,
          label: gender,
        }));
        setOptionsGenderGenerate(
          optionsGender || { value: "null", label: "Nenhum informado" }
        );
      } catch (error) {
        toast.error("Erro ao buscar categorias", { duration: 4000 });
      }
    };

    if (isOpen) {
      getOptionsGender();
    }
  }, [isOpen]); // Chama apenas quando o modal é aberto


  useEffect(() => {
    const getOptionsClassCategoryByGender = async (gender?: string) => {
      if (!gender) return;
      try {
        const response = await client.category.get();
        const categories = response.payload;
        const filteredCategories = categories.filter(
          (category: any) => category.gender === gender
        );

        const uniqueClassCategories = Array.from(
          new Set(
            filteredCategories.map(
              (category: { classCategory: any }) => category.classCategory
            )
          )
        );

        const t = uniqueClassCategories.map((classCategory) => ({
          value: classCategory,
          label: classCategory,
        }));

        setClassCategoryOptions(t);
      } catch (error) {
        toast.error("Erro ao buscar classes por gênero", { duration: 4000 });
      }
    };

    if (gender) {
      getOptionsClassCategoryByGender(gender);
    }


  }, [gender]); // Chama quando o gender muda

  useEffect(() => {
    // Certifique-se de que o gender e classCategory estão definidos antes de chamar a função
    if (gender && classCategory) {
      const result = getWeightsByGenderAndClass(gender, classCategory);
      console.log('Result:', result);
    }
  }, [gender, classCategory]); // Chama quando o gender ou classCategory mudam



  const handleRegistration = async () => {
    const formData = new FormData();
    formData.append("idAthlete", user?.idAthlete);
    formData.append("idEvent", idEvent as any);
    formData.append("idCategory", category as any);
    formData.append("file", file);

    try {
      const el = await client.payments.post(formData);
      if (el?.status) {
        toast.success("Inscrição enviada com sucesso", { duration: 4000 });
      } else {
        toast.error("Erro ao enviar inscrição", { duration: 4000 });
      }
    } catch (error) {
      toast.error("Erro ao enviar inscrição", { duration: 4000 });
    }
  };



  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Toaster />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onClickOK={handleRegistration}
        onClickCancel={onClose}
        textHeader={textHeader || "Register"}
        hasFooter
        labelBtnCancel="Cancelar"
        labelBtnOk="Salvar"
      >
        <div className=" w-full h-full p-1">
          <div className="p-0.5">
            <h1 className="text-gray-500 font-medium text-[18px] ">
              {findEventById(mockData, idEvent?.toString())?.nameCompetition ||
                nameCompetition}
            </h1>
          </div>
          {startDate && (
            <div className=" flex flex-row">
              {startDate && (
                <div className="mr-10">
                  Data inicio: {startDate} às {startTime}
                </div>
              )}
              {endDate && (
                <div className="">
                  Data fim: {endDate} às {endTime}
                </div>
              )}
            </div>
          )}
          {description && (
            <div>
              <h1 className="font-semibold text-gray-700">Descrição</h1>
              <p className="text-[15px] break-words">{description}</p>
            </div>
          )}
          <div className="flex flex-col ">
            <Select
              id="gender"
              name="gender"
              options={optionsGenderGenerate}
              label="Sexo"
              isOptional={false}
              className="mt-2"
              onChange={(e) => {
                let value = e?.target?.value;
                setGender(value);
                if (!value) {
                  setClassCategory(undefined);
                  setCategory(undefined);
                }
              }}
              disabled={false}
            />
            <Select
              id="classCategory"
              name="classCategory"
              options={classCategoryOptions}
              isOptional={false}
              label="Selecione a classe"
              className="mt-2"
              onChange={(e) => {
                let value = e.target.value;
                setClassCategory(value);
                if (!value) {
                  setCategory(undefined);
                }
              }}
              disabled={!gender}
            />
            <Select
              id="weight"
              name="weight"
              isOptional={false}
              options={[
                { value: "4", label: "-55" },
                { value: "5", label: "-60" },
              ]}
              label="Categoria (Kg)"
              className="mt-2"
              onChange={(e) => setCategory(e?.target?.value)}
              disabled={!classCategory}
            />
          </div>
          <div className="mt-2">
            <FileInput label="Anexe o comprovante" onFileDrop={setFile} />
          </div>
        </div>
      </Modal>
    </>
  );
}
