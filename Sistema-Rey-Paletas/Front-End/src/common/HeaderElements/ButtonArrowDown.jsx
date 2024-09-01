import { ArrowDown } from '../../images/icons/Icons';
import ContentButtonArrow from './ContentButtonArrow'
import PropTypes from 'prop-types';

export default function ButtonArrowDown({state}) {






  return (
    <div className='flex w-full relative flex-col dark:text-white'>
      <ArrowDown/>
      <ContentButtonArrow seeOptions={state} />
    </div>
  )
}

ButtonArrowDown.propTypes = {
  state: PropTypes.bool.isRequired,
};
