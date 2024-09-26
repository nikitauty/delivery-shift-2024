import Spinner from '@icons/spinner.svg?react';

interface LoaderProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Loader = ({ className, height = 150, width = 150 }: LoaderProps) => (
  <div className={className}>
    <Spinner width={width} height={height} />
  </div>
);
