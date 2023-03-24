
import React, { useEffect, useState } from "react";
import axios from "axios";
import carfaxLogo from '../images/carfax_logo.png'

const endpoint = "https://connect.carfax.com/v1/graphql";

const clientId = '6hdILq7oxHKkVcsnPiitW1doVvLhRxXT';

const redirectUri = 'http://localhost:3001/carfax-auth/callback';

const carfaxAuthUri = `https://auth.carfax.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&audience=https://connect.carfax.com&scope=offline_access`;

const Home = () => {
    const [accidentReport, setAccidentReport] = useState(null);
    const [carfaxReportUrl, setCarfaxReportUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingFullCarFaxReport, setIsLoadingFullCarFaxReport] = useState(false);

    useEffect(() => {
        window.addEventListener('storage', () => {
            const data = JSON.parse(localStorage.getItem('carfax-auth'));

            const fetchData = async () => {
                const report = await getAccidentReportData(data);
                const carfaxReportUrl = await getCarfaxFullReportUrl(data);
                console.log('carfaxReportUrl=>>', carfaxReportUrl);
                setAccidentReport(report);
                setCarfaxReportUrl(carfaxReportUrl);
            }

            if (data) {
                fetchData()
                .catch(console.error);
            }
        });

        const data = JSON.parse(localStorage.getItem('carfax-auth'));

            const fetchData = async () => {
                const report = await getAccidentReportData(data);
                const carfaxReportUrl = await getCarfaxFullReportUrl(data);
                setAccidentReport(report);
                setCarfaxReportUrl(carfaxReportUrl);
            }
        if (data) {
            fetchData()
            // make sure to catch any error
            .catch(console.error);
        }
      }, [])

    const getAccidentReportData = async (carfaxData) => {
        const data = JSON.stringify({
            query: `{
              dealerReport(vin: "2T3H1RFV3MW150368") {
                  fourPillars {
                      accident {
                          iconUrl
                          iconText
                          position
                          hasAccidents
                          
                      }
                      
                      owner {
                          iconUrl
                          iconText
                          position
                          isOneOwner
                      }
                      
                      useType {
                          iconUrl
                          iconText
                          position
                          isPersonalUse
                      }
                      
                      serviceRecord {
                          iconUrl
                          iconText
                          position
                          recordCount
                      }
                  }
              }
            }`,
            variables: {}
          });
    
          var config = {
            method: 'post',
            url: endpoint,
            headers: { 
              'Authorization': `Bearer ${carfaxData?.access_token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
        setIsLoading(true);
        const response = await axios(config);
        setIsLoading(false);
        return response.data;
    }

    const authUrl = `${carfaxAuthUri}&state=NONCE`;

    const onClickCarfaxButton = () => {
        window.open(authUrl, "_blank")
    }
    
    const getCarfaxFullReportUrl = async (carfaxData) => {
        const data = JSON.stringify({
            query: `{
                dealerReport(vin: "2T3H1RFV3MW150368") { carfaxLink { url } snapshotKey }
            }`,
            variables: {}
          });
    
          var config = {
            method: 'post',
            url: endpoint,
            headers: { 
              'Authorization': `Bearer ${carfaxData?.access_token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
        setIsLoadingFullCarFaxReport(true);

        const response = await axios(config);

        setIsLoadingFullCarFaxReport(false);
        return response.data;
    }

    if (isLoading) {
        return (
            <h1 className="text-center my-2">Loading...</h1>
        );
    }

    if (!accidentReport) {
        return (
            <div className="flex justify-center my-8 mx-8  sm:mx-2  ">
                <div>
                    <div>
                        <img className=" h-8" src={carfaxLogo} alt=""/>
                    </div>
                    <div className="flex pt-4 justify-between">
                        <div className="w-64">
                            <p className="text-sm">CARFAX™ periodically requires users to re-authorize their accounts. Please click the button below to do so.</p>
                        </div>
                        <div className="ml-20">
                            <button onClick={onClickCarfaxButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Link Carfax
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const { dealerReport: { fourPillars } } = accidentReport?.data || null;

    const { dealerReport: { carfaxLink } } = carfaxReportUrl.data || null;
    return (
        <div className="flex justify-center my-8 mx-8  sm:mx-2  ">
            <div className="">
                <div>
                    <img className=" h-8" src={carfaxLogo} alt=""/>
                </div>
                <div className="flex pt-4">
                    <div className="py-2 w-40 sm:w-24 ">
                        <div className="flex justify-center pb-2">
                            <img className="h-12 sm:h-6" src={fourPillars.accident.iconUrl} alt="" />
                        </div>
                        <p className="text-center text-sm sm:text-xs">{fourPillars.accident.iconText}</p>
                    </div>

                    <div className="py-2 w-40 sm:w-24">
                        <div className="flex justify-center pb-2">
                            <img className="h-12 sm:h-6" src={fourPillars.owner.iconUrl} alt="" />
                        </div>
                        <p className="text-center text-sm sm:text-xs">{fourPillars.owner.iconText}</p>
                    </div>

                    <div className="py-2 w-40 sm:w-24">
                        <div className="flex justify-center pb-2">
                            <img className="h-12 sm:h-6" src={fourPillars.useType.iconUrl} alt="" />
                        </div>
                        <p className="text-center text-sm sm:text-xs">{fourPillars.useType.iconText}</p>
                    </div>

                    <div className="py-2 w-40 sm:w-24">
                        <div className="flex justify-center pb-2">
                            <img className="h-12 sm:h-6" src={fourPillars.serviceRecord.iconUrl} alt="" />
                        </div>
                        <p className="text-center text-sm sm:text-xs">{fourPillars.serviceRecord.iconText}</p>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <a className="text-center text-green-500 font-bold  text-sm sm:text-xs" rel="noreferrer" href={carfaxLink?.url} target="_blank">View Full Carfax Report</a>
                </div>
            </div>
        </div>
    );
};
  
export default Home;