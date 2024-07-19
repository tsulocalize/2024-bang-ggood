import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import mockCategories from '@/_mock/checklist.json';
import { postChecklist } from '@/apis/checklist';
import Accordion from '@/components/accordion/Accordion';
import ChecklistCategory from '@/components/checklist/ChecklistCategory';
import Header from '@/components/Header';
import { ChecklistCategoryQuestions } from '@/types/checklist';

export interface Answer {
  questionId: number;
  answer: number;
}

export interface addAnswerProps {
  questionId: number;
  newAnswer: number;
}

const ChecklistPage = () => {
  const [checklistQuestions, setChecklistQuestions] = useState<ChecklistCategoryQuestions[]>([]);

  useEffect(() => {
    const fetchChecklist = () => {
      const checklist = mockCategories;
      // const checklist = await getChecklistQuestions();
      setChecklistQuestions(checklist);
    };
    fetchChecklist();
  }, []);

  const [answers, setAnswers] = useState<Answer[]>([]);

  const addAnswer = useCallback(
    ({ questionId, newAnswer }: addAnswerProps) => {
      const target = [...answers].find(answer => answer.questionId === questionId);
      if (target) {
        const newAnswers = [...answers].map(answer =>
          answer.questionId === questionId ? { questionId, answer: newAnswer } : answer,
        );
        setAnswers(newAnswers);
        return;
      }
      setAnswers(prev => [...prev, { questionId, answer: newAnswer }]);
    },
    [answers],
  );

  const deleteAnswer = (questionId: number) => {
    setAnswers(prevAnswers => {
      return prevAnswers.filter(answer => answer.questionId !== questionId);
    });
  };
  const useNavigator = useNavigate();
  const submitAnswer = async () => {
    await postChecklist(answers);
    useNavigator('/saved');
  };

  return (
    <>
      <Header Button={<S.TextButton onClick={submitAnswer}>저장</S.TextButton>} />
      <Accordion>
        {checklistQuestions?.map(category => (
          <>
            <Accordion.header text={'청결도'} id={category.categoryId} />
            <Accordion.body id={category.categoryId}>
              <ChecklistCategory
                key={category.categoryId}
                category={category}
                addAnswer={addAnswer}
                deleteAnswer={deleteAnswer}
              />
            </Accordion.body>
          </>
        ))}
      </Accordion>
    </>
  );
};

const S = {
  TextButton: styled.button`
    width: 60px;
    height: 40px;

    background-color: ${({ theme }) => theme.palette.green500};

    color: ${({ theme }) => theme.palette.white};
    font-weight: ${({ theme }) => theme.text.weight.bold};
    font-size: ${({ theme }) => theme.text.size.medium};
    border-radius: 5px;
  `,
};

export default ChecklistPage;
