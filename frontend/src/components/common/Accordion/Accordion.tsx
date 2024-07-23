import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import AccordionHeader from '@/components/common/Accordion/AccodionHeader';
import AccordionBody from '@/components/common/Accordion/AccordionBody';
import { AccordionProvider } from '@/components/common/Accordion/AccordionContext';
import { flexColumn } from '@/styles/common';

const Accordion = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <AccordionProvider count={7}>
      <S.Container>{children}</S.Container>
    </AccordionProvider>
  );
};

Accordion.header = AccordionHeader;
Accordion.body = AccordionBody;

const Container = styled.div`
  ${flexColumn};
  gap: 15px;
`;

const S = {
  Container,
};
export default Accordion;
