import { useState } from "react";


export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
       const {name, value} = target;
       setFormState({
            ...formState, //lo desestructuro para mantener todos los valores del formulario
            [ name ]: value, //propiedad computada del objeto

       });
    }

    const onResetForm = () => {
         setFormState(initialForm);
     }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm

    }
}
