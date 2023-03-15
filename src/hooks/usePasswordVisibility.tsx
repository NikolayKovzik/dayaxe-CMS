import { useState } from 'react';

const usePasswordVisibility = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggle = () => setIsVisible(!isVisible);
  return {
    isVisible,
    toggle,
  };
};

export default usePasswordVisibility;
