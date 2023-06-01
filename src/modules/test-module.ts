import clsx from 'clsx';

export const TestModule = () => {
  const isTrue = true;
  return clsx('test-module', isTrue && 'test-module--active');
};

TestModule();
