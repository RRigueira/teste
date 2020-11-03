import { Wrapper, Container, Field, Message, Toggle } from "./Newsletter.styles"
import { blue } from "~theme/colors"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Axios from "axios"
import { Button } from "../common/Buttons"

const Newsletter = ({ data }) => {
  const { register, errors, handleSubmit } = useForm()
  const [contact, setContact] = useState({
    email: "",
    name: "",
    message: "",
  })

  const [response, setResponse] = useState({
    type: "",
    message: "Um momento ...",
  })

  const [isOpen, setisOpen] = useState({ open: false })

  const handleClick = () => {
    setisOpen({ open: !isOpen.open })
  }

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value })

  const clearForm = () => {
    document.getElementById("form").reset()
  }

  const onSubmit = async e => {
    handleClick()
    sendMessage()
  }

  const sendMessage = () => {
    var data2 = JSON.stringify({
      youremail: contact.email,
      confirm: "sapo",
    })
    var config = {
      method: "post",
      url: `http://wp-gatsby.dev.others.pt/wp-json/contact-form-7/v1/contact-forms/560/feedback`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data2,
    }

    Axios(config)
      .then(function (response) {
        setResponse({
          type: "success",
          message:
            "Obrigado pela tua mensagem. Vamos tentar responder assim que possível.",
        })
        console.log(response)
        clearForm()
      })
      .catch(function (error) {
        console.log(error)
        setResponse({
          type: "error",
          message:
            "Algo de errado aconteceu. Tenta outra vez por favor. Senão manda-nos diretamente um email.",
        })
      })
  }

  return (
    <Wrapper id="form" onSubmit={handleSubmit(onSubmit)}>
      <Message isOpen={isOpen.open}>
        <div>
          <Toggle onClick={handleClick} type="button">
            x
          </Toggle>
          <p>{response.message}</p>
        </div>
      </Message>

      <Container>
        <Field>
          <input
            id="twu_email"
            name="email"
            type="email"
            placeholder="E-mail *"
            onChange={handleChange}
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>Precisamos do teu email.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p>Tens a certeza que é um email válido?</p>
          )}
        </Field>
      </Container>
      <Button blue={true} type="submit">
        Enviar
      </Button>
    </Wrapper>
  )
}

export default Newsletter
