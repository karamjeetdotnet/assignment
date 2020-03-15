import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { serviceRead } from '../actions/service';

let Services = (props) => {
    useEffect(() => {
        props.dispathFetchServices();
    }, [])
return (<div>
    {props.services.map(service => <div>
        {service.id}
    </div>)}
</div>);}
const mapStateToProps = (state, ownProps) => {
    return {
        services: state.serviceReducer.services
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
   return {
       dispathFetchServices: () => {
           dispatch(serviceRead());
       }
   };
};
Services = connect(mapStateToProps, mapDispatchToProps)(Services);
export default Services;