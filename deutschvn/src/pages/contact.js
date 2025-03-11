import React from "react";
import Layout from "@theme/Layout";
import TrueFalseQuiz from "@site/src/components/TrueFalseQuiz/TrueFalseQuiz";

const questions = [
  { text: "The guest in the studio is a teacher.", answer: false },
  { text: "Some people can sleep well with a television on.", answer: true },
  { text: "It is bad to drink a lot of water before going to bed.", answer: true },
  { text: "It is good to play video games before bed.", answer: false },
  { text: "It is good to turn your mobile off when you go to bed.", answer: true },
  { text: "It is bad to play loud music while you sleep.", answer: true },
];

const TrueFalseQuizPage = () => {
  return (
    <Layout>
      <TrueFalseQuiz questions={questions} />
    </Layout>
  );
};

export default TrueFalseQuizPage;
