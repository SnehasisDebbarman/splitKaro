import { View, ViewProps } from 'react-native';

type CardProps = ViewProps & {
  className?: string;
};

export default function Card({ className, style, ...viewProps }: CardProps) {
  const base = 'border border-border dark:border-border-dark rounded-xl p-4 bg-surface-light dark:bg-surface-dark';
  return <View className={[base, className].filter(Boolean).join(' ')} style={style} {...viewProps} />;
}

