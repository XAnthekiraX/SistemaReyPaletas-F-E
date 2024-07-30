import ContentButtonArrow from './ContentButtonArrow'
import PropTypes from 'prop-types';

export default function ButtonArrowDown({state}) {



  const ArrowDown = () => {
    return (
      <svg className='w-2.5 h-2.5 ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z" /></svg>
    )
  }


  return (
    <div className='flex w-full relative flex-col dark:text-white'>
      <ArrowDown />
      <ContentButtonArrow seeOptions={state} />
    </div>
  )
}

ButtonArrowDown.propTypes = {
  state: PropTypes.bool.isRequired,
};
