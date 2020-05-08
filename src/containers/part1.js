import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { serviceRead, activateService } from '../actions/service';
import { providerRead, filterProviderByService } from '../actions/provider';

let Part1 = (props) => {
    useEffect(() => {
        props.dispathFetchServices();
        props.dispatchFetchProviders();
    }, [])
const Part1Result = ({providers}) => (<ul className="list-group">
{providers.map(provider => <li key={provider.id}
  className="list-group-item">
  {provider.attributes.name}
</li>)}
</ul>)
const Part2Result = ({providers}) => (<div className="container">
{providers.map(provider => <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
            <img src={provider.attributes["profile-image"]} alt=""/>
        </div>
        <div class="card-block px-2">
            <h4 class="card-title">{provider.attributes.name}</h4>
            {/* <p class="card-text" dangerouslySetInnerHTML={{__html: provider.attributes.bio}}>{}</p> */}
            <p class="card-text">{provider.attributes.subspecialties.
                map(speciality => <span class="badge badge-pill badge-primary">{speciality}</span>)}</p>
        </div>
    </div>)}
</div>)
return (
<>
<div class="row">
  <div class="col-sm-6"><fieldset>
      <legend>control</legend>
      <ul className="list-group">
      {props.services.map(service => <li key={service.id} 
                onClick={() => {
                    props.dispatchFilterProvders(service.attributes.name);
                    props.dispatchActivateService(service.id);
                }} 
                className={`list-group-item ${service.isActive ? 'active' : ''}`}>
        {service.attributes.name}
    </li>)}
    </ul>
      </fieldset></div>
  <div class="col-sm-6"><fieldset>
      <legend>results</legend>
      {props.providers.length === 0 && "No providers found for selected service"}
      {props.isPart2 ? <Part2Result providers={props.providers}/>:
      <Part1Result providers={props.providers}/>}
      </fieldset></div>
</div>
</>
);}
const mapStateToProps = (state, ownProps) => {
    return {
        services: state.serviceReducer.filteredServices,
        providers: state.providerReducer.filteredProviders
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
   return {
       dispathFetchServices: () => {
           dispatch(serviceRead());
       },
       dispatchFetchProviders: () => {
           dispatch(providerRead());
       },
       dispatchFilterProvders: serviceName => {
           dispatch(filterProviderByService(serviceName))
       },
       dispatchActivateService: serviceId => {
           dispatch(activateService(serviceId))
       }
   };
};
Part1 = connect(mapStateToProps, mapDispatchToProps)(Part1);
export default Part1;