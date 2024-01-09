import { Link } from "react-router-dom";
import { Container, Form } from "./styles.js";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input/index.jsx";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button/index.jsx";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem $isnew placeholder="Novo link" />
          </Section>
          <Section>
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem $isnew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
