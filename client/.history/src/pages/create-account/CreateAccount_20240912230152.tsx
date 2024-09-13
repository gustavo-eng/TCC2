import { zodResolver } from "@hookform/resolvers/zod";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";
import client from "../../service/client";
import "./custom-styles.css";

// Define o registerUserSchema de validação com Zod
const registerUserSchema = z.object({
    cpf: z.string({message: "Deve ser do tipo string"}),
    rg: z.string({message: "Deve ser do tipo string"}),
    birth: z.string({message: "Deve ser do tipo string"}),
    phone: z.string({message: "Deve ser do tipo string"}),
    name: z.string({message: "Deve ser do tipo string"}),
    email: z.string().email({ message: 'Email invalido' }),
    role: z.enum(['athlet', 'gym', 'fprj']),
    password: z.string({message: "Deve ser do tipo string"}).min(3, {message: 'Minimo 3 caracteres'}).max(25, {message: 'Maximo 25 caracteres'}),
    neighborhood: z.string({message: "Deve ser do tipo string"}),
    street: z.string({message: "Deve ser do tipo string"}),
    number: z.string({message: "Deve ser do tipo string"}),
    city: z.string(),
    idGym: z.any(),
});


export type registerAthlet = z.infer<typeof registerUserSchema>;

export default function CreateAccountManager() {
  // Configura o react-hook-form com zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerAthlet>({
    resolver: zodResolver(registerUserSchema),
  });


  const onSubmit:SubmitHandler<registerAthlet> = async (data: any) => {

    const formattedData = {
        ...data,
        role: 'athlet'
    };
    try {
        const responseRegister = await client.auth.register(formattedData);
        console.log('responseRegister ', responseRegister);
        if(responseRegister.status) {
            toast.success('Solicitação enviada com successo')
        } else {
            toast.error('Erro ao enviar solicitação')
        }
    } catch(err) {
        console.log('register error test, ', err)
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
              <PasswordInput
                label="Repita sua senha"
                placeholder="**********"
                {...register("repetirSenha")}
                errorMessage={'errors.nome?.message'}
              />
              */}
              <Input
                label="Academia"
                type="text"
                placeholder="Informe a academia"
                {...register("idGym")}
                errorMessage={errors?.idGym?.message}
              />
            </div>
          </FormWizard.TabContent>
        </FormWizard>
      </form>
    </div>
  );
}
