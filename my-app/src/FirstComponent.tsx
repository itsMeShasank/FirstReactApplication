
interface FirstComponentProps {
    count: number;
    onClick: () => void;
}

function FirstComponent({ count, onClick }: FirstComponentProps) {
    return (
      <>
      <button className="button" onClick={onClick}>click</button>
      <p>Button Clicked: {count}</p>
      </>
    )
  }

  export default FirstComponent;