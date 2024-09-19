import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, Toaster } from 'react-hot-toast';
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";
import Select from "../../components/select/Select";
import client from "../../service/client";
import { registerAthlet, registerUserSchema } from "./CreateAccountTypes";
import "./custom-styles.css";



export default function CreateAccountManager() {
  // Configura o react-hook-form com zod
  const [gyms, setGyms] = useState<any>();

  const {
    register,
    handleSubmit,
   // watch,
   setValue,
   watch,
    formState: { errors },
  } = useForm<registerAthlet>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
        role: 'athlet', // Define o valor padrão para 'role'
    },
  });

 // const watchedValues = watch();

  const selectedGym = watch('idGym');

  const onSubmit:SubmitHandler<registerAthlet> = async (data: any) => {

    const formattedData = {
      ...data,
        role: 'athlet'
      };
      try {
        console.log('formatted data');
        console.log(formattedData);

        const responseRegister = await client.auth.register(formattedData);
        if(responseRegister?.status) {
          toast.success('Solicitação enviada com successo',  {duration: 4000})
        } else {
            toast.error('Erro ao enviar solicitação',  {duration: 4000})
          }
        } catch(err: any) {
          console.log('register error test, ', err)
          toast.error('Erro ao enviar solicitação',  {duration: 4000});
        }
        //sconsole.log("Dados do formulário:", data);
  };

  const tabChanged = ({
    prevIndex,
    nextIndex,
  }: {
    prevIndex: number;
    nextIndex: number;
  }) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
    console.log('selectedGym ', selectedGym)
  };

  const setAllGyms = async () => {

    let response = await client.gym.list();

    if (Array.isArray(response?.payload)) {

      const newGyms = response.payload.map((el: { idGym: number; name: string }) => ({
        value: el.idGym,
        label: el.name,
      }));

      setGyms((prevGyms:  { value: number; label: string }[]) => {
        const uniqueGyms = newGyms.filter(
          (newGym: {value: number }) => !prevGyms?.some((gym) => gym.value === newGym.value)
        );
        return [...(prevGyms || []), ...uniqueGyms];
      });
    } else {
      setGyms([]);
    }

  };

  useEffect(() => {
    setAllGyms()
  }, [])

  /*
ob.forEach(el => {
  v.push({ value: el?.idGym, label: el?.name})
})
console.log('v')
console.log(v)
  */

  return (
    <div className="w-full h-[70vh] pb-1 mb-0 flex flex-col">
      <Toaster position="bottom-center" />
      { JSON.stringify(gyms) }
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormWizard
          shape="circle"
          color="#22c55e"
          stepSize="xs"
          nextButtonText="Próximo"
          backButtonText="Voltar"
          finishButtonText="Cadastrar"
          layout="horizontal"
          onComplete={handleSubmit(onSubmit)} // Finaliza o cadastro
          onTabChange={tabChanged}
        >
          <FormWizard.TabContent title="Informações Pessoais" icon="ti-user">
            <div className="h-[42vh]">
              <Input
                label="Nome"
                type="text"
                placeholder="Nome completo"
                {...register("name")}
                errorMessage={errors?.name?.message}
              />
              <Input
                label="CPF"
                type="text"
                placeholder="Digite seu CPF"
                {...register("cpf")}
                errorMessage={errors?.cpf?.message}
              />
              <Input
                label="RG"
                type="text"
                placeholder="Digite seu CPF"
                {...register("rg")}
                errorMessage={errors?.rg?.message}
              />
              <Input
                label="Telefone"
                type="text"
                placeholder="(XX) XXXX-XXXX"
                {...register("phone")}
                errorMessage={errors?.phone?.message}
              />
              <Input
                label="Data de nascimento"
                type="date"
                {...register("birth")}
                errorMessage={errors.birth?.message}
              />
            </div>
          </FormWizard.TabContent>

          <FormWizard.TabContent title="Endereço" icon="ti-map-alt">
            <div className="h-[42vh]">
              <Input
                label="Bairro"
                type="text"
                placeholder="Informe seu bairro"
                {...register("neighborhood")}
                errorMessage={errors?.neighborhood?.message}
              />
              <Input
                label="Rua"
                type="text"
                placeholder="Informe sua rua"
                {...register("street")}
                errorMessage={errors?.street?.message}
              />
              <Input
                label="Número"
                type="number"
                placeholder="Informe o número"
                {...register("number")}
                errorMessage={errors?.number?.message}
              />
              <Input
                label="Cidade"
                type="text"
                placeholder="Nome da cidade"
                {...register("city")}
                errorMessage={errors?.city?.message}
              />
            </div>
          </FormWizard.TabContent>

          <FormWizard.TabContent title="Cadastro" icon="ti-check">
            <div className="h-[42vh]">
              <Input
                label="Email"
                type="text"
                placeholder="Informe seu email"
                {...register("email")}
                errorMessage={errors?.email?.message}
              />
              <PasswordInput
                label="Senha"
                placeholder="**********"
                {...register("password")}
                errorMessage={errors?.password?.message}
              />
              {/*
              <Input
                label="Academia"
                type="text"
                placeholder="Informe a academia"
                //errorMessage={errors?.idGym?.message}
                {...register("idGym")}
              />
              */}
              <Select
                id="hours"
                //name="hours"
                label="Academia"
                options={gyms}
                //onChangeCapture={(e: any) => setValue('idGym', e.target.value)}
                //onChange={() => console.log('')}
                onChange={(e) => console.log(e)}
                classNameOptions="bg-red-300"
                classNameSelect="bg-white rounded-md border-gray-400 hover:border-green-500  "

              />
            </div>
          </FormWizard.TabContent>
        </FormWizard>
      </form>
    </div>
  );
}
