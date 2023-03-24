import React, { useEffect, useState } from "react";
import qs from 'qs';
import axios from "axios";

const Carfax = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        // declare the data fetching function
        setIsLoading(true);

        const fetchData = async () => {
            const accessToken = await getCarfaxAccessToken();
            localStorage.setItem('carfax-auth', JSON.stringify(accessToken));
            setData(accessToken);
            setIsLoading(false);
        }
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);

      setIsLoading(false);
      }, [])

    const getCarfaxAccessToken = async () => {
        const queryParameters = new URLSearchParams(window.location.search)
        const code = queryParameters.get("code")

        const data = qs.stringify({
            'client_id': '6hdILq7oxHKkVcsnPiitW1doVvLhRxXT',
            'client_secret': 'dVO_bfEnMJdCtQm0-54BZhQ8S4nCzHJQIRyZ5fEdz4w0KLSdeEtuO8MG8-vC3ZMy',
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': 'http://localhost:3001/carfax-auth/callback' 
          });
    
        const config = {
            method: 'post',
            url: 'https://auth.carfax.com/oauth/token',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded', 
            },
            data : data
          };
        const response = await axios(config);

        return response.data;
    }
    
  return (
    <div className="my-8">
      {data ? <h1 className="text-center">Sucessfully authenticated! Thank you.</h1> : <h1 className="text-center">Loading...</h1>}
    </div>
  );
};
  
export default Carfax;