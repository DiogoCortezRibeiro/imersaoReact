import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import Footer from '../src/components/Footer/index';
import QuizBackground from '../src/components/QuizBackground/index';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>teste titulo</Widget.Header>
          <Widget.Content>testando</Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>teste titulo</Widget.Header>
          <Widget.Content>testando</Widget.Content>
        </Widget>

        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="https://google.com.br" />
    </QuizBackground>
  )
}
