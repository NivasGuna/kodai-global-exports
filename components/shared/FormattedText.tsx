import React from 'react';

interface FormattedTextProps {
  text: string;
  highlightClassName?: string;
}

/**
 * Shared component to render text with {highlighted} sections in theme green/italic colors.
 * Example: "The Essence of {Purity}" renders "Purity" with special styling.
 */
export const FormattedText = ({ text, highlightClassName }: FormattedTextProps) => {
  if (!text) return null;

  const parts = text.split(/(\{.*?\})/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('{') && part.endsWith('}')) {
          return (
            <span key={i} className={highlightClassName || 'text-kodai-green italic'}>
              {part.slice(1, -1)}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};
