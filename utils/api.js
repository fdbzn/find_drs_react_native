// import {errorMessage} from './apiMessages';
const BASE_API = 'http://api.yiunic.com/';

class Api {
  userAppointment(userToken,sourceId,appointmentId){
    return this.secure_post( `${BASE_API}payments`, {sourceId,appointmentId}, userToken);
  }
  userRelativeAppointment(userToken,sourceId,appointmentId,relativeId){
    return this.secure_post( `${BASE_API}payments`, {
      sourceId,appointmentId,relativeId
    }, userToken);
  }

  addPaymentMethods(token_id, device_session_id, userToken){
    return this.secure_post( `${BASE_API}users/me/paymentMethods`, {token_id, device_session_id}, userToken);  
  }
  getPaymentMethods(userToken){
    return this.secure_get( `${BASE_API}users/me/paymentMethods`, userToken );  
  }

  getMyProfile(token){
    return this.secure_get( `${BASE_API}users/me/`, token );  
  }

  removeRelative(relative_id, token){
    return this.delete(`${BASE_API}users/me/relatives/${relative_id}`, token);
  }

  getMyRelatives(token){
    return this.secure_get( `${BASE_API}users/me/relatives`, token );  
  }

  getIntervalsByDate( workplace_id, date ){
    const params = this.toParams( {date} )
    return this.get( `${BASE_API}workplaces/${workplace_id}/intervals?${params}` );
  }

  createFamily(name,lastName,email,birthDate,gender,phone, token) {
    const data = {
      username:email,
      name,
      lastName,
      email,
      birthDate:`${birthDate}T00:00:00.000Z`,
      gender,
      phone,
    }
    return this.secure_post(`${BASE_API}users/me/relatives`, data, token);
  }

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

  getDoctorsByLocation(lat, lng, limit, page, sort) {
    const params = this.toParams( {lat, lng, limit, page, sort} )
    return this.get(`${BASE_API}doctors?${params}`);
  }

  getDoctorsByName( speciality, name, limit, page, sort){
    const params = this.toParams( {speciality, name, limit, page, sort} );
    return this.get(`${BASE_API}doctors?${params}`);
  }

  async get(url){
      const query = await fetch( url,  {method: 'GET'} );
      return this.handleResponse(query);
  }
  async secure_get(url, token){
      console.log('user_token:', token)
      const query = await fetch( url,  {
        method: 'GET', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token, 
        },
      });
      return this.handleResponse(query);
  }
  async delete(url, token){
      const query = await fetch( url,  {
        method: 'DELETE', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token, 
        },
      });
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

  async secure_post(url, data, token){
    console.log('user_token:', token)
    const query = await fetch(url,  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token, 
      },
      body: JSON.stringify(data)
    });

    return this.handleResponse(query);
}

  async handleResponse(query){
    console.log("apilog-query:",query)
    let response = {};
    if(query.status === 200 || query.status === 201){
      response = await query.json();
      response.success = true;
      
    }else{
      response = await query.json();
      response.success = false;
      //response.error_desc = errorMessage[response.code];
    }
    
    console.log("apilog-response:",response)
    return response;
  }

  toParams(obj_data){
    return Object.entries(obj_data).map(e => e.join('=')).join('&')
  }
 
}

export default new Api();
