/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import React from 'react';

const TypingText = ({
  text,
  delay = 0.05,
}: {
  text: React.ReactNode;
  delay?: number;
}) => {
  let charIndex = 0;

  const renderWithTyping = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      return node.split('').map((char) => {
        const currentIndex = charIndex;
        charIndex++;
        return (
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: currentIndex * delay }}
          >
            {char}
          </motion.span>
        );
      });
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => <React.Fragment key={i}>{renderWithTyping(child)}</React.Fragment>);
    }

    if (typeof node === 'object' && node && 'type' in node) {
      // It's a React element like <span>
      const children = renderWithTyping((node as any).props.children);
      return React.cloneElement(node as React.ReactElement, { key: charIndex }, children);
    }

    return node;
  };

  return <span>{renderWithTyping(text)}</span>;
};

export default TypingText;
