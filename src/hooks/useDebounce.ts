import { useCallback, useEffect } from 'react';

// 함수가 여러번 호출되면, 일정 시간이 지난 후 마지막에 호출된 함수만 실행
// 이전 함수는 무시
const useDebouncedEffect = (func: any, delay: number, deps: [any]) => {
  const callback = useCallback(func, deps);

  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
};

export default useDebouncedEffect;
