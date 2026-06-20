// Chunky neubrutalist button. Base look + :active press live in .btn-brutal.
// Pass `className` to override the background color, etc.
export default function Button({ children, className = '', ...props }) {
  return (
    <button className={`btn-brutal ${className}`} {...props}>
      {children}
    </button>
  )
}
