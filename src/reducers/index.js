import { combineReducers } from 'redux';
import products from './products.reducer';
import services from './services.reducer';
import jobs from './jobs.reducer';



export default combineReducers({
  products,
  services,
  jobs
});
