import { useState } from 'react'
import ButtonApp from '../../_contact/components/ButtonApp';
import { FormProvider, useForm } from 'react-hook-form';
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { question } from '../utils/inputValidations'
import Input from './InputApp';
import CheckApp from './CheckApp';


const FormApp = () => {

  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = methods.handleSubmit(data => {
    const values = methods.getValues()
    console.log(question);
    console.log(values)
    methods.reset();
  });

  return (
    <>
      <FormProvider {...methods}>
        <form
          className=" max-w-[90%] mx-auto "
          onSubmit={e => e.preventDefault()}
          noValidate
        >

          {question.map((element, index) =>
            <Input key={index} {...element} />
          )}



          {success && (
            <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
              <BsFillCheckSquareFill />Tu mensaje ha sido enviado de manera exitosa.
            </p>
          )}

        </form>
      </FormProvider>

      <ButtonApp
        title="Enviar"
        id="buttonContact"
        type="button"
        onClick={onSubmit}
      />
    </>
  )
}

export default FormApp;