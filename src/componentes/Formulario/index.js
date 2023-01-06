import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const procedimento = [
    "Podologia",
    "Unhas artificiais",
    "Manicure e pedicure",
    "Blidagem",
  ];
  const aoSalvar = (event) => {
    event.preventDefault();
    console.log("form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do procedimento.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa
          obrigatorio={true}
          label="Procedimento"
          items={procedimento}
        ></ListaSuspensa>
        <Botao texto="Criar card"></Botao>
      </form>
    </section>
  );
};
export default Formulario;
