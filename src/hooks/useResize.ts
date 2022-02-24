import { RefObject, useEffect, useRef } from 'react';

/**
 * Хук, который добавляет полосу справа от элемента, потянув за которую можно растянуть элемент
 *
 * возможно, расчитано на определенную верстку
 */
const useResize = (): [RefObject<HTMLDivElement>] => {
  const resizableRef = useRef<HTMLDivElement>(null);
  // элемент, за который пользователь тянет, добавляется динамически
  const resizer = document.createElement('div');

  useEffect(() => {
    resizer.id = 'resizer';
    resizer.style.width = '3px';
    resizer.style.height = '100%';
    resizer.style.background = '#A5A5A5';
    resizer.style.position = 'absolute';
    resizer.style.right = '0';
    resizer.style.bottom = '0';
    resizer.style.cursor = 'col-resize';

    resizableRef.current?.appendChild(resizer);
    resizer.addEventListener('mousedown', initResize, false);

    return () => resizer.removeEventListener('mousedown', initResize, false);
  }, []);

  // TODO: беда с типизацией, useCallback
  function initResize(_e: any) {
    resizer.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';

    window.document.addEventListener('mousemove', resize, false);
    window.document.addEventListener('mouseup', stopResize, false);

    // предотвращает случайные выделения текста на документе при растягивании и другие случайные события
    window.document.addEventListener('mousedown', windowMousedown, false);
  }

  function resize(e: { clientX: number }) {
    if (resizableRef.current) {
      resizableRef.current.style.width =
        e.clientX - resizableRef.current.offsetLeft + 'px';
    }
  }

  function stopResize(_e: any) {
    resizer.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';

    window.document.removeEventListener('mousemove', resize, false);
    window.document.removeEventListener('mouseup', stopResize, false);

    window.document.removeEventListener('mousedown', windowMousedown, false);
  }

  function windowMousedown(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return [resizableRef];
};

export default useResize;
