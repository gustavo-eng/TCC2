import { zodResolver } from "@hookform/resolvers/zod";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";
import "./custom-styles.css";

// Define o schema de validação com Zod
const schema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  cpf: z.string().min(11, "CPF deve ter pelo menos 11 caracteres"),
  telefone: z.string().min(10, "Telefone é obrigatório"),
  dataNascimento: z.string(),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  rua: z.string().min(1, "Rua é obrigatória"),
  numero: z.number().min(1, "Número é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  repetirSenha: z.string().min(6, "Repita a senha corretamente"),
  academia: z.string().min(1, "Academia é obrigatória"),
});

export default function CreateAccountManager() {
  // Configura o react-hook-form com zod
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Dados do formulário:", data);
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
          onComplete={() => onSubmit} // Finaliza o cadastro
          onTabChange={tabChanged}
        >
          <FormWizard.TabContent title="Informações Pessoais" icon="ti-user">
            <div className="h-[42vh]">
              <Input
                label="Nome"
                type="text"
                placeholder="Nome completo"
                {...register("nome")}
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
                {...register("telefone")}
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="Data de nascimento"
                type="date"
                {...register("dataNascimento")}
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
                {...register("bairro")}
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="Rua"
                type="text"
                placeholder="Informe sua rua"
                {...register("rua")}
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="Número"
                type="number"
                placeholder="Informe o número"
                {...register("numero")}
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="Cidade"
                type="text"
                placeholder="Nome da cidade"
                {...register("cidade")}
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
                {...register("senha")}
                errorMessage={'errors.nome?.message'}
              />
              <PasswordInput
                label="Repita sua senha"
                placeholder="**********"
                {...register("repetirSenha")}
                errorMessage={'errors.nome?.message'}
              />
              <Input
                label="Academia"
                type="text"
                placeholder="Informe a academia"
                {...register("academia")}
                errorMessage={'errors.nome?.message'}
              />
            </div>
          </FormWizard.TabContent>
        </FormWizard>
      </form>
    </div>
  );
}