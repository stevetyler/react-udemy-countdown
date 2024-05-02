import { forwardRef } from 'react'; // forward ref from one component to another

const ResultModal = forwardRef(function ResultModal({ result, targetTime}, ref) {
  return (
      // cannot use open attr here as we want to fade background behind dialog
    <dialog ref={ref} className="result-modal"> 
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
