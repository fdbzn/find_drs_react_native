import {errorMessage} from './apiMessages';
const BASE_API = 'http://api.yiunic.com/';

class Api {
  createUser(name,lastName,email,birthDate,gender,phone,password) {
    const data = {
      username:email,
      name,
      lastName,
      email,
      birthDate:`${birthDate}T00:00:00.000Z`,
      gender,
      phone,
      password
    }
    return this.post(`${BASE_API}users`, data);
  }
  
  login( username, password ) {
    const data = {username, password}
    return this.post(`${BASE_API}login`, data);
  }

  getSpecialties() {
    return this.get(`${BASE_API}specialities`);
  }
  
  getPopularSpecialties(sort, limit){
    const params = this.toParams( {sort, limit} )
    return this.get(`${BASE_API}specialities?${params}`);
  }

  getDoctorsByLocation(speciality, lat, lng, sort) {
    const params = this.toParams( {speciality, lat, lng, sort} )
    return this.get(`${BASE_API}doctors?${params}`);
  }

  async get(url){
      const query = await fetch( url,  {method: 'GET'} );
      return this.handleResponse(query);
  }

  async post(url, data){
      const query = await fetch(url,  {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      return this.handleResponse(query);
  }

  async handleResponse(query){
    let response = {};
    if(query.status === 200 || query.status === 201){
      response = await query.json();
      response.success = true;
      
    }else{
      response = await query.json();
      response.success = false;
      response.error_desc = errorMessage[response.code];
    }
    console.log("apilog:",query)
    console.log("apilog:",response)
    return response;
  }

  toParams(obj_data){
    return Object.entries(obj_data).map(e => e.join('=')).join('&')
  }
 
}

export default new Api();
