import React from 'react';
import TrueFalseQuiz from '@site/src/components/TrueFalseQuiz/TrueFalseQuiz';
import Layout from '@theme/Layout';

const questionsBerlin = [
  { id: 1, text: 'Berlin hat ungefähr 3,7 Millionen Einwohner.', answer: true },
  { id: 2, text: 'Die Berliner Mauer teilt die Stadt heute noch.', answer: false },
  { id: 3, text: 'Im Sommer gehen viele Menschen an die Spree spazieren.', answer: true },
];

export default function BerlinQuizPage() {
  return (
    <TrueFalseQuiz
      title="Berlin Quiz 🇩🇪"
      questions={questionsBerlin}
    />
  );
}
