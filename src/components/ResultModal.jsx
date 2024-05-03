import { forwardRef, useImperativeHandle, useRef } from 'react'; // forward ref from one component to another

const ResultModal = forwardRef(function ResultModal({ result, targetTime}, ref) {
  const dialog = useRef(); // decouple dialog component from external components

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // standard browser feature
      }
    }
  }); // to define properties and methods that should be accessible on this component from the outside

  return (
      // cannot use open attr here as we want to fade background behind dialog
    <dialog ref={dialog} className="result-modal"> 
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>X seconds</strong> left</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResultModal;
