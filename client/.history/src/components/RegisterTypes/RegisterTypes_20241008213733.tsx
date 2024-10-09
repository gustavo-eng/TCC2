import { zodResolver } from '@hookform/resolvers/zod';
import { Fragment, useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import client from '../../service/client';
import Button from "../buttons/button";
import GlobalTile from "../GlobalTitle/GlobalTitle";
import Input from "../input/Input";
import TableTypeEvents from "./tableTypeEvents/TableTypeEvents";
import { registerType, typeRegisterScheema } from './typeRegisterTypes';


let mockdata = {
	"status": true,
	"msg": "Event types listed successfully",
	"payload": [
		{
			"idTypeEvent": 1,
			"type": "Brasileiro",
			"createdAt": "2024-09-14T18:34:37.000Z",
			"updatedAt": "2024-09-14T18:34:37.000Z"
		},
		{
			"idTypeEvent": 2,
			"type": "Mundial",
			"createdAt": "2024-09-14T20:16:27.000Z",
			"updatedAt": "2024-09-14T20:16:27.000Z"
		},
		{
			"idTypeEvent": 3,
			"type": "Regional",
			"createdAt": "2024-09-29T22:35:15.000Z",
			"updatedAt": "2024-09-29T22:35:15.000Z"
		},
		{
			"idTypeEvent": 3,
			"type": "Regional",
			"createdAt": "2024-09-29T22:35:15.000Z",
			"updatedAt": "2024-09-29T22:35:15.000Z"
		},

	]
}

function RegisterTypes() {

	const [output, setOutput] = useState<any>();
	const [nameTypeEvent, setNameTypeEvent] = useState<string>("");

	const {
		register,
		handleSubmit,
		control,
		formState: {errors}
	} = useForm<registerType>({
		resolver: zodResolver(typeRegisterScheema),
		reValidateMode: "onBlur"
	});

	const {fields, append, remove} = useFieldArray({
		control,
		name: 'weight',
	})



	const submitCategory = async (data: any) => {

		try {

			let objResult = {
				...data,
				weight: `[${data.weight.flatMap((el: any)  => el.valueText).join(',')}]`
			  };

			const response = await client.category.post(objResult)
			console.log('response', response)
			if(response.status) {
				toast.success('Categoria cadastrada com sucesso!')
			} else {
				toast.error('Erro ao cadastrar academia')
			}

		}catch(err) {
			toast.error('Erro ao cadastrar academia')
		}

		//setOutput(objResult)
	}


	const addNewWeight  = () => {
		append({ valueText: '' });
	};

	const removeWeight = () => {
		remove(1)
	}


	const submitTypeEvent = async () => {
		try {
			const response = await client.event.post({type: nameTypeEvent});
			if(response.status) {
				toast.success('Tipo de evento adicionado com successo')
			} else {
				toast.error('Erro ao adicionar tipo de evento')
			}
		}catch(err) {
			console.log(err)
			toast.error('Erro ao adicionar tipo de evento')
		}
	}

	useEffect(() => {

	}, [submitTypeEvent])

    return (
        <div className="w-screen flex flex-col gap-2 p-2">
		   <Toaster position='top-right'/>
          <GlobalTile  title="Registro de tipos de eventos e categoria" />
		  {JSON.stringify(nameTypeEvent)}
          <div className="w-full flex flex-col items-center gap-3">
            <h1  className="text-green-600 font-bold text-2xl">Tipos de eventos </h1>
            <div className="flex flex-row gap-2">
                <Input
                    isOptional
                    className=" w-fit min-w-[520px]"
                    inputClassName="border-[1px] border-green-600 hover:border-green-700 "
					onChange={(e) => setNameTypeEvent(e.target.value)}
                />
                <Button
                    label="Adicionar"
					type='button'
					onClick={() => submitTypeEvent()}
                    className="p-2 rounded-md bg-green-500/90 hover:bg-green-600"
                />
            </div>
            <div className="w-full bg-red-30 p-5">
               { mockdata.payload && <TableTypeEvents tableJSON={mockdata.payload ||  []} />  }
               { !mockdata.payload && <TableTypeEvents tableJSON={[]} />  }
            </div>
          </div>
		  {/* Formulario */}
          <div className="">
			 <h1 className="w-full text-green-600 font-bold flex flex-col items-center">Cadastro de categoria</h1>
			 <main className="w-full">
				<form className="flex  flex-col gap-3" onSubmit={handleSubmit(submitCategory)}>
					<Input
						label="Sexo"
						errorMessage={errors?.gender?.message || ""}
						{...register('gender')}
					 />
					<Input
						label="Categoria"
						errorMessage={errors?.classCategory?.message || ""}
						{...register('classCategory')}
					/>
					{fields.map((_, idx) => {
						return (
							<Fragment key={idx}>
								<Input
									label={`Peso ${idx} (Kg)`}
									type='number'
									{...register(`weight.${idx}.valueText`)}
									errorMessage={errors.weight?.[idx]?.valueText?.message || ""}
								/>
							</Fragment>
						)
					})}
					<div className='flex justify-between'>
						<a onClick={addNewWeight} className='text-green-500 cursor-pointer'> Adicionar novo peso </a>
						<a onClick={removeWeight} className='text-red-500/70 cursor-pointer'> Remover </a>
					</div>

					<Button
					  label="Adicionar"
					  className="bg-green-500 hover:bg-green-600 rounded-md h-8"
					/>

				</form>
			 </main>
          </div>

        </div>
    )
}

export default RegisterTypes;