import React from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicConfig from '../../../prismic-config';

export const QuestionAndAnswer = (props) => {
  
  const questions = props.slice.items.map((question, index) => {
    return (
      <div key={index}>
        <p className="hiringQuestions">
          {RichText.asText(question.question)}
        </p>
        <div className="hiringAnswers">
          {RichText.render(question.answer, PrismicConfig.linkResolver)}
        </div>
      </div>
    );
  });
  
  return (
    <section>
      {questions}
    </section>
  );
};

export default QuestionAndAnswer;