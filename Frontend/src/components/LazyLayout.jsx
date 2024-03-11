import { Suspense } from "react";
import PropTypes from 'prop-types'

const LazyLayout = ({ component:Component, ...rest}) => {
    return (
       <Suspense fallback="Loading...">
            <Component {...rest}/>
       </Suspense> 
    )
}

LazyLayout.proptypes = {
    component: PropTypes.elementType.isRequired
}

export default LazyLayout