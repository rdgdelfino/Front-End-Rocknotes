import "./styles.js";
import { Container, Links, Content } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao H1</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            reiciendis aperiam facere autem, tempora enim quis perspiciatis!
            Veritatis facere, nisi, doloremque numquam laudantium fugiat
            distinctio adipisci ex vel quos iure!
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://fb.com/rdgdelfino">Facebook</a>
              </li>
              <li>
                <a href="https://fb.com/rdgdelfino">Facebook</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
