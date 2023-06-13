import { classNames } from '@/utils/classNames';
import { SpinnerIcon } from '../icons/spinner';

type LoadingProps = {
  className?: string;
  iconClassName?: string;
};

export function Loading({
  className,
  iconClassName
}: LoadingProps): JSX.Element {
  return (
    <i className={classNames('flex justify-center z-[100]', className ?? 'p-4')}>
      <SpinnerIcon
        className={classNames('text-primary-main', iconClassName ?? 'h-8 w-8')}
      />
    </i>
  );
}
