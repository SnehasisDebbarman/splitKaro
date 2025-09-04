import { Pressable, PressableProps, Text } from 'react-native';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = PressableProps & {
  label: string;
  variant?: ButtonVariant;
  className?: string;
  textClassName?: string;
};

export default function Button({
  label,
  variant = 'primary',
  className,
  textClassName,
  ...pressableProps
}: ButtonProps) {
  const baseClasses = 'px-5 py-3 rounded-full items-center justify-center';
  const variantClasses =
    variant === 'primary'
      ? 'bg-primary-600 active:bg-primary-700 dark:bg-primary-500 dark:active:bg-primary-600'
      : 'bg-transparent border border-border active:bg-primary-50 dark:border-border-dark dark:active:bg-primary-900/10';

  const textBase = 'font-bold text-white';
  const textVariant = variant === 'primary' ? 'text-white' : 'text-primary-700 dark:text-primary-300';

  return (
    <Pressable
      accessibilityRole="button"
      className={[baseClasses, variantClasses, className].filter(Boolean).join(' ')}
      {...pressableProps}
    >
      <Text className={[textBase, textVariant, textClassName].filter(Boolean).join(' ')}>{label}</Text>
    </Pressable>
  );
}

