
export const Button = (props) => {

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${props.disabled ? 'bg-gray-600' : 'bg-gold'} font-inter600 text-title text-xl py-5 bg-gold uppercase rounded-xl leading-3 px-24`}
    >
      {props.children}
    </button>
  )
}
