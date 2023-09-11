
export const Button = (props) => {

  return (
    <button
      className='font-inter600 text-title text-xl py-5 bg-gold uppercase rounded-xl leading-3 px-24'
    >
      {props.children}
    </button>
  )
}
