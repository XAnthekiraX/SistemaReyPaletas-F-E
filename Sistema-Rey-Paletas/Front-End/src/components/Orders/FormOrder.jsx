import SearchOrder from "../../common/Order/SearchOrder"; 
import PropTypes from 'prop-types';

export default function FormOrder({onCLickClose}) {



    return (
        <form className="border w-96 h-auto flex p-2 rounded-lg justify-center items-start bg-white dark:bg-big-stone-900 ">
            <SearchOrder onClose={onCLickClose}/>
        </form>
    )
}

FormOrder.propTypes={
    onCLickClose:PropTypes.func.isRequired,
}