import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Emoticon from './Emoticon';
import emojiList from '../../../constants/EmojiList';

export default function EmoticonDetail({ isVisible }) {
  return (
    <ContainerDiv $isVisible={isVisible}>
      <EmoticonsDiv>
        {emojiList.map((emoji) => (
          <Emoticon
            key={emoji.emoji}
            emoticon={emoji.emoji}
            count={emoji.cnt}
          />
        ))}
      </EmoticonsDiv>
    </ContainerDiv>
  );
}

EmoticonDetail.propTypes = {
  isVisible: PropTypes.bool,
};

EmoticonDetail.defaultProps = {
  isVisible: false,
};

const ContainerDiv = styled.div`
  width: auto;
  height: auto;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  padding: 24px;
  background-color: var(--white);
  border: 1px solid #b6b6b6;
  border-radius: 8px;
  position: absolute;
  top: 42px;
`;

const EmoticonsDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(4, auto);
  gap: 10px 8px;

  @media (max-width: 368px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(3, auto);
  }
`;