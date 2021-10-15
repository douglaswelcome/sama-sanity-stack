import { useState, useEffect } from 'react'

const useIntersection = (ref, rootMargin, repeat) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
          setIntersecting(entry.isIntersecting);
      }, { rootMargin }
    );

    observer.observe(ref.current);

    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
};

export default useIntersection;