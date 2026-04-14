export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5) + 1; // Faster start
      percent = Math.min(percent + rand, 50);
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 95) {
          percent++; // Consistent increment
          setLoading(percent);
        } else {
          clearInterval(interval);
        }
      }, 100); // Much faster interval (100ms)
    }
  }, 50);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent = percent + 5; // Fast finish
          if (percent > 100) percent = 100;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 20);
    });
  }
  return { loaded, percent, clear };
};
