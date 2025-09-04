import { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  className?: string;
};

const Input = forwardRef<TextInput, InputProps>(({ className, ...props }, ref) => {
  const base = 'border border-border dark:border-border-dark rounded-xl px-3 py-3 text-base';
  const bg = 'bg-surface-light dark:bg-surface-dark';
  const text = 'text-black dark:text-white';

  return (
    <TextInput
      ref={ref}
      className={[base, bg, text, className].filter(Boolean).join(' ')}
      placeholderTextColor={props.placeholderTextColor ?? '#9ca3af'}
      {...props}
    />
  );
});

export default Input;

