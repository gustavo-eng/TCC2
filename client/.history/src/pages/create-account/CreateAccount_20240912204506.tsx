import { zodResolver } from "@hookform/resolvers/zod";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";
import "./custom-styles.css";

// Define o registerUserSchema de validação com Zod
const registerUserSchema = z.object({
    name: z.any().nullable().optional(),
    cpf: z.any().nullable().optional(),
    phone: z.any().nullable().optional(),
    birth: z.any().nullable().optional(),
    neighborhood: z.any().nullable().optional(),
    street: z.any().nullable().optional(),
    number: z.any().nullable().optional(),
    city: z.any().nullable().optional(),
    email: z.any().nullable().optional(),
    password: z.any().nullable().optional(),
    repetirSenha: z.any().nullable().optional(),
    idGym: z.string().nullable().optional(),
  });


export type registerAthlet = z.infer<typeof registerUserSchema>;

export default function CreateAccountManager() {
  // Configura o react-hook-form com zod
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<registerAthlet>({
    resolver: zodResolver(registerUserSchema),
  });


  const onSubmit:SubmitHandler<registerAthlet> = (data: any) => {

    const formattedData = {
        ...data,
        idGym: data.idGym ? Number(data.idGym) : null, // Faz o casting de idGym para number
    };

    try {
        console.log('register success test');
        console.log('data captured ', formattedData);


    } catch(err) {
        console.log('register error test')
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
  };

  return (
    <div className="w-full h-[70vh] pb-1 mb-0 flex flex-col">
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
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="CPF"
                type="text"
                placeholder="Digite seu CPF"
                {...register("cpf")}
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="Telefone"
                type="text"
                placeholder="(XX) XXXX-XXXX"
                {...register("phone")}
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="Data de nascimento"
                type="date"
                {...register("birth")}
                errorMessage={'errors.nome?.message'}
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
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="Rua"
                type="text"
                placeholder="Informe sua rua"
                {...register("street")}
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="Número"
                type="number"
                placeholder="Informe o número"
                {...register("number")}
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="Cidade"
                type="text"
                placeholder="Nome da cidade"
                {...register("city")}
                errorMessage={'errors.nome?.message'}
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
                errorMessage={'errors.nome?.message'}
              />
              <PasswordInput
                label="Senha"
                placeholder="**********"
                {...register("password")}
                errorMessage={'errors.nome?.message'}
              />
              {/*
              <PasswordInput
                label="Repita sua senha"
                placeholder="**********"
                {...register("repetirSenha")}
                errorMessage={'errors.nome?.message'}
              />
              */}
              <Input
                label="Academia"
                type="number"
                placeholder="Informe a academia"
                {...register("idGym")}
                errorMessage={'errors.nome?.message'}
              />
            </div>
          </FormWizard.TabContent>
        </FormWizard>
      </form>
    </div>
  );
}
