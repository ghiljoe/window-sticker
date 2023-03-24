import React from "react";
import CurrencyFormat from 'react-currency-format';
import carLogo from '../images/acura-logo.png'
import qrCode from '../images/qrcode.png'
import barcode from '../images/barcode.png'
import gasIcon from '../icons/gas-pump-solid.svg'
import flagIcon from '../icons/flag-solid.svg'
import neoVinDataSample from '../data/neovin.json'
import '../App.css';

const App = () => {
  
  const { name: exteriorColor } = neoVinDataSample.exterior_color || { name: '-'};
  const { name: interiorColor } = neoVinDataSample.interior_color || { name: '-'};

  const vehicleName = () => {
    return `${neoVinDataSample.year} ${neoVinDataSample.make} ${neoVinDataSample.model} ${neoVinDataSample.engine} ${neoVinDataSample.transmission}`;
  }

  let standardEquips = [];
  let categories = [];
  console.log(neoVinDataSample.features);
  if (neoVinDataSample.features && neoVinDataSample.features.length !== 0) {
    for (let i = 0; i < neoVinDataSample.features.length; i++) {
      const feature = neoVinDataSample.features[i];
      if (feature.type === 'Standard') {
        if (standardEquips.length === 0) {
          standardEquips.push({
              category: feature.category,
              descriptions: [feature.description]});
          categories.push(feature.category);
        } else {
          if (categories.includes(feature.category)) {
            standardEquips.find((e) => e.category === feature.category).descriptions.push(feature.description);
          } else {
            categories.push(feature.category);
            standardEquips.push({
                category: feature.category,
                descriptions: [feature.description]});
          }
        }
      }
    }
  } else {
    standardEquips
        .push({category: 'No Data', descriptions: ['']});
  }

  const middle = Math.floor((standardEquips.length / 2));

  const standardEquips1 = standardEquips.slice(0, middle);
  const standardEquips2 = standardEquips.slice(middle);
  
  const standardEquipWidget = (standardEquipList) => {
    return (
      standardEquipList.map((standardEquip) => {
        const standardEquipDescList = standardEquip.descriptions;
  
        return (
          <div className="justify-start py-2 px-4">
            <p className="font-bold text-xs pb-2">{standardEquip.category}</p>
            <ul>
              {standardEquipDescList.map((description) => (
              <li className="text-xxs  pb-1">• {description}</li>
            ))}
            </ul>
          </div>
        );
      })
    );
  }

  const formatPrice = (value) => {
    return (
      <CurrencyFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    );
  }

  const installedOPtionsMsrpWidget = (optionDetails) => {
    return (
      <div className="pb-2">
        {
          optionDetails && optionDetails.map((optionDetail) => {
            return (
              <div>
                <p className="text-xs  pb-1">- {optionDetail.name.toUpperCase()}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
  

  //combined MPG
  const combinedMpgAvg = (neoVinDataSample.city_mpg + neoVinDataSample.highway_mpg) / 2;

  let combinedMpgInitialValue = { value: combinedMpgAvg.toString() };
  let combinedMpg;

  if (neoVinDataSample.installed_equipment) {
    combinedMpg = neoVinDataSample.installed_equipment.find((element) => element.attribute === 'combined (mpg)');
    if (!combinedMpg) {
      combinedMpg  = combinedMpgInitialValue;
    }
  } else {
    combinedMpg = combinedMpgInitialValue;
  }
  
  // Gallon per 100 miles
  let gallonPer100MilesInitialValue = { value: '0' };
  let gallonPer100Miles;

  if (neoVinDataSample.installed_equipment) {
    gallonPer100Miles = neoVinDataSample.installed_equipment.find((element) => element.attribute === 'combined (l/100km)');
    if (!gallonPer100Miles) {
      gallonPer100Miles  = gallonPer100MilesInitialValue;
    }
  } else {
    gallonPer100Miles = gallonPer100MilesInitialValue;
  }

  //Government overall rating
  let overAllRatingInitialValue = { value: '0' };
  let overAllRating;

  if (neoVinDataSample.installed_equipment) {
    overAllRating = neoVinDataSample.installed_equipment.find((element) => element.attribute === 'overall' && element.location === 'NHTSA');
    if (!overAllRating) {
      overAllRating  = overAllRatingInitialValue;
    }
  } else {
    overAllRating = overAllRatingInitialValue;
  }

  //Government frontal crash rating
  let frontalCrashRatingInitialValue = { value: '0' };
  let frontalCrashRating;

  if (neoVinDataSample.installed_equipment) {
    frontalCrashRating = neoVinDataSample.installed_equipment.find((element) => element.attribute === 'frontal crash rating' && element.location === 'NHTSA');
    if (!frontalCrashRating) {
      frontalCrashRating  = frontalCrashRatingInitialValue;
    }
  } else {
    frontalCrashRating = frontalCrashRatingInitialValue;
  }
  // Government rollover rating
  let rollOverRatingInitialValue = { value: '0' };
  let rollOverRating;

  if (neoVinDataSample.installed_equipment) {
    rollOverRating = neoVinDataSample.installed_equipment.find((element) => element.attribute === 'rollover rating' && element.location === 'NHTSA');
    if (!rollOverRating) {
      rollOverRating  = rollOverRatingInitialValue;
    }
  } else {
    rollOverRating = rollOverRatingInitialValue;
  }

  //Government rollover rating
  let sideCrashRatingInitialValue = { value: '0' };
  let sideCrashRating;

  if (neoVinDataSample.installed_equipment) {
    sideCrashRating = neoVinDataSample.installed_equipment.find((element) => element.attribute === 'side impact' && element.location === 'NHTSA');
    if (!sideCrashRating) {
      sideCrashRating  = sideCrashRatingInitialValue;
    }
  } else {
    sideCrashRating = sideCrashRatingInitialValue;
  }
  //EMISSION
  let emissionInitialValue = { name: '' };
  let emission;

  if (neoVinDataSample.installed_equipment) {
    emission = neoVinDataSample.installed_equipment.find((element) => element.code === 'FE');
    if (!emission) {
      emission  = emissionInitialValue;
    }
  } else {
    emission = emissionInitialValue;
  }

  const annualMileage = 15000;
  const pricePerGallon = 3.55;
  const totalOver5Years = 11500;

  const annualFuelCost = annualMileage / parseFloat(combinedMpg.value) * pricePerGallon ;

  const youSaveOrSpend = () => {
  const youSaveOrSpendValue = (Math.round(annualFuelCost) * 5) - totalOver5Years;
  const youSaveText = 'You SAVE';
  const youSpendText = 'You SPEND';

  const youSaveSubText = 'in fuel costs over 5 years compared to average new vehicle.';
  const youSpendSubText = 'more in fuel costs over 5 years compared to the average new vehicle.';

  return (
    <div className="flex-1 justify-start">
      <div className="flex h-8 items-center">
        <img className="w-4 h-4" src={flagIcon} alt=""/>
        <p className="text-lg pl-2 font-medium">{youSaveOrSpendValue > 0 ? youSpendText : youSaveText}</p>
      </div>
      <p className="text-4xl font-bold pb-2">{formatPrice(parseInt(Math.abs(youSaveOrSpendValue)))}</p>
      <p className="text-xxs ">{youSaveOrSpendValue > 0 ? youSpendSubText : youSaveSubText}</p>
    </div>
    );
  }

  const linearRatingBar =()=> {
    return (
      <div className="flex">
        <div className="flex h-3.5 bg-gray-700  items-center">
          <p className="text-xxs text-white p-2 font-bold">1</p>
        </div>
        <div className="w-full h-3.5 mb-3  bg-gray-200">
          <div className="bg-blue-200 h-3.5 " style={{ width: '80%' }}></div>
        </div>
        <div className="flex h-3.5 bg-gray-700  items-center">
          <p className="text-xxs text-white p-1 font-bold">10</p>
        </div>
      </div>
    );
  }

  const ratingWidget = (ratingValue) => {
    const elements = [];

    const itemsCount = (ratingValue === '0' || !ratingValue) ? 0 :  parseInt(parseFloat(ratingValue.toString()).toString());
    
    for (let i = 1; i <= 5; i++) {
      if (i <= itemsCount) {
        elements.push(<span>★</span>);
      } else {
        elements.push(<span>☆</span>);
      }
    }
    return (
      <div className="flex">{elements}</div>
    );
  }
  return (
      <div className="flex justify-between px-1">
        <div className="flex-auto pr-4 right-section">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img className="w-30 h-24" src={carLogo} alt=""/>
                    <div className="px-2">
                    <h1 className="text-lg font-bold ">{vehicleName()}</h1>
                    <p className="text-sm font-semibold">VIN: {neoVinDataSample.vin}</p>
                      <div className="flex justify-between pt-3">
                        <div className="pr-8">
                            <div className="flex justify-start">
                                <p className="text-xxs w-20">EXTERIOR: </p>
                                <p className="text-xxs">{exteriorColor}</p>
                            </div>
                            <div className="flex justify-start">
                                <p className="text-xxs w-20">INTERIOR: </p>
                                <p className="text-xxs">{interiorColor}</p>
                            </div>
                            <div className="flex justify-start">
                                <p className="text-xxs w-20">ENGINE: </p>
                                <p className="text-xxs">{neoVinDataSample.engine}</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-start">
                                <p className="text-xxs w-28">TRANSMISSION: </p>
                                <p className="text-xxs">{neoVinDataSample.transmission}</p>
                            </div>
                            <div className="flex justify-start">
                                <p className="text-xxs w-28">DRIVE TRAIN: </p>
                                <p className="text-xxs">{neoVinDataSample.drivetrain}</p>
                            </div>
                            <div className="flex justify-start">
                                <p className="text-xxs w-28">STYLE: </p>
                                <p className="text-xxs">{neoVinDataSample.body_type}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="py-2 w-40">
                    <div className="flex justify-center pb-2">
                        <img className="h-16 object-center" src={qrCode} alt="" />
                    </div>
                    <p className="text-center" style={{ fontSize: '8px'}}>Scan QR code for general model information & options</p>
                </div>
            </div>
            <div className="pt-1"></div>
            <div className="border-2 border-black rounded px-4 py-2">
                <h1 className="text-md font-bold">Standard Equipment Included at No Extra Charge</h1>
                <div className="flex pt-2">
                  <div className="flex-1 ">
                    {standardEquipWidget(standardEquips1)}
                  </div>
                  <div className="border-l-2 my-2 border-gray-800 w-1"/>
                  <div className="flex-1  ">
                    {standardEquipWidget(standardEquips2)}
                    <div className="border-t mx-2 border-gray-800 "/>
                    <div className="mx-2 mt-6">
                      <p className="text-xxs italic pb-2">+For more information, see dealer, owner's manual</p>
                      <p className="text-xxs italic">++Optional Equipment Replaces Standard Features</p>
                    </div>
                  </div>
                  <div className="border-l-2 my-2 border-gray-800 w-1"/>
                  <div className="flex-1 pl-4">
                    <div className="flex justify-between pt-2">
                      <p className="text-xs font-bold w-40">Manufacturer's Suggested Retail Price:</p>
                      <p className="text-xs font-bold">{formatPrice(neoVinDataSample.msrp)}</p>
                    </div>
                    <div className="flex justify-between py-4">
                      <p className="text-xs font-bold w-40">Options Included by Manufacturer:</p>
                      <p className="text-xs font-bold">{formatPrice(neoVinDataSample.installed_options_msrp)}</p>
                    </div>
                    {installedOPtionsMsrpWidget(neoVinDataSample.installed_options_details)}
                    <div className="border-t-2 my-2 border-gray-800 w-full "/>
                    <div className="flex justify-between">
                      <p className="text-xs font-bold">DESTINATION CHARGES</p>
                      <p className="text-xs font-bold">{formatPrice(neoVinDataSample.delivery_charges)}</p>
                    </div>
                    <div className="border-t-2 my-2  border-gray-800 w-full "/>
                    <div className="flex justify-between pt-2">
                      <p className="text-xs font-bold">TOTAL:</p>
                      <p className="text-xs font-bold">{formatPrice(neoVinDataSample.combined_msrp)}</p>
                    </div>
                  </div>
                  
                </div>
                <div>
                  <p className="text-xxs italic pt-4">
                    * Does not include dealer installed options and accessories, local taxes, or license fees. This label has been applied pursuant to federal law. Do not remove prior to
  delivery to the ultimate purchaser
                  </p>
                  <p className="text-xxs italic pt-4">
                  ** Not actual Monroney Label. Provided for informational purposes only. Vehicle features, pricing and other information subject to change, many vary from actual
  vehicle content and/or Monroney label description. While {neoVinDataSample.make} makes reasonable efforts to ensure accuracy of information, {neoVinDataSample.make} is not responsible for changes,
  errors or omissions. See actual vehicle and/or verify information in question with your {neoVinDataSample.make} dealer.
                  </p>
                </div>
            </div>
        </div>
        <div className="left-section pt-3">
          <div className="flex justify-between bg-stone-800 rounded px-3 py-2">
            <div className="flex justify-start items-center ">
              <div className="">
                <p className="text-xs font-bold text-white" style={{ paddingBottom: '1px' }}>EPA</p>
                <div className="border-t  border-white-800 w-full " />
                <p className="text-xs font-bold text-white" style={{ paddingTop: '1px' }}>DOT</p>
              </div>
              <p className="text-md font-bold text-white pl-3">Fuel Economy and Environment</p>
            </div>
            <div className="flex bg-stone-50 rounded p-2 items-center">
              <img className="w-4 h-4" src={gasIcon} alt=""/>
              <p className="text-xs pl-2"> Gasoline Vehicle</p>
            </div>
          </div>
          <div className="flex border-2 items-center border-black rounded px-4 py-2 mt-2 flex-auto">
            <div className="flex-1">
              <div className="flex h-8 items-center">
                <img className="w-4 h-4" src={gasIcon} alt=""/>
                <p className="text-md pl-3 font-semibold"> Fuel Company</p>
              </div>
              <div className="flex justify-start items-center">
                <h1 className="text-6xl font-bold">{Math.round(combinedMpg.value)}</h1>
                <div className="justify-start pl-3">
                  <h1 className="font-bold text-md">MPG</h1>
                  <div className="flex ">
                    <div className="pr-4">
                      <p className="text-xs">{Math.round(neoVinDataSample.city_mpg)}</p>
                      <p className="text-xs">City</p>
                    </div>
                    <div>
                      <p className="text-xs">{Math.round(neoVinDataSample.highway_mpg)}</p>
                      <p className="text-xs">Highway</p>
                    </div>
                  </div>

                </div>
              </div>
              {gallonPer100Miles.value !== '0' ? (<div className="flex h-8 items-center">
                <p className="text-lg font-bold" src={gasIcon} alt="">{(parseFloat(gallonPer100Miles.value) * 0.4251).toFixed(1)}</p>
                <p className="text-xs pl-2">Gallons per 100 miles</p>
              </div>) : <div className="h-8"></div>}
            </div>
            <div className="flex-1 h-20 bg-gray-100 rounded p-2 items-center mx-8">
              <p className="text-xs pl-2 text-left">MID SIZE CARS range from 14 to 136 MPG. The best vehicle rates 136 MPGe.</p>
            </div>
            {youSaveOrSpend()}
          </div>
          <div className="flex">
            <div className="flex-none w-42 border-2 items-center border-black rounded px-2 py-3 mt-2 mr-2">
              <p className="text-md font-medium text-center">Annual Fuel COST</p>
              <p className="text-4xl font-bold text-center">{formatPrice(Math.round(annualFuelCost))}</p>
            </div>
            <div className="flex-auto w-full border-2 items-center border-black rounded px-2 py-2 mt-2">
              <div className="flex">
                <div className="mr-2 flex-none pr-2">
                  <p className="font-bold text-xxs pb-2">Fuel Economy & Greenhouse Gas Rating <span className="font-normal text-xxs">(Tailpipe only)</span></p>
                  {linearRatingBar()}
                </div>
                <div className="mr-2 flex-auto">
                  <p className="font-bold text-xxs pb-2">Smog Rating  <span className="font-normal text-xxs">(Tailpipe only)</span></p>
                  {linearRatingBar()}
                </div>
              </div>
              <div>
                <p className="font-medium" style={{ fontSize: '9px'}}>This vehicle emits 278 grams CO, per mile. The best emits 0 grams per mile (tailpipe only). Producing and distributing fuel also create emissions; learn more at fueleconomy.gov</p>
              </div>
            </div>
          </div>
          <div className="flex bg-stone-800 rounded py-4 px-4 mt-2">
            <div className="flex-1 justify-start items-center pr-4">
              <p className="text-xxs font-semibold text-white pb-3">Actual results will vary from many reasons, including driving conditions and how you drive and maintain your vehicle. The average new vehicle gets 27 MPG and costs $7,000 to fuel over 5 years. Cost estimates are based on 15,000 miles per year at $2.55 per gallon. MPGe is miles per gasoline gallon equivalent.</p>
              <p className="text-sm font-bold text-white ">fueleconomy.gov</p>
              <p className="text-xxs font-bold text-white ">Calculate personalized estimates and compare vehicles</p>
            </div>
            <div className="bg-stone-50 rounded py-2 w-32">
              <div className="flex justify-center pb-2">
                  <img className="h-16 object-center" src={qrCode} alt="" />
              </div>
              <p className="text-center text-xxs" >Smartphone QR code</p>
            </div>
          </div>
          <div className="border-2 border-black rounded mt-2">
            <div className="flex bg-stone-800  px-3 py-2 ">
              <div className="flex-1 justify-start items-center pr-2">
                <p className="text-sm font-semibold text-white ">GOVERNMENT 5-STAR SAFETY RATINGS</p>
              </div>
              <div className="flex justify-start w-48 pl-1">
                <p className="text-sm text-white font-medium" >DELIVERY</p>
              </div>
            </div>
            <div className="flex ">
                <div className="flex-1">
                    <div className="py-2 px-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 mr-4">
                        <p className="text-xs font-bold pb-2">Overall Vehicle Score</p>
                        <p className="text-xxs">Based on the combined ratings of frontal, side and rollover, Should ONLY be compared to the vehicles of similar size and weight</p>
                      </div>
                      <div className="w-30 mt-1">
                        {ratingWidget(overAllRating.value)}
                      </div>
                    </div>
                    <div className="border-t-2 my-2  border-gray-800 w-full "/>
                    <div className="flex justify-between">
                      <div className="flex-1 mr-4">
                        <p className="text-xs font-bold pb-2">Frontal Crash</p>
                        <p className="text-xxs">Based on the risk of injury in a frontal impact. Should ONLY be compared to the vehicles of similar size and weight.</p>
                      </div>
                      <div className="w-30 mt-1">
                        {ratingWidget(frontalCrashRating.value)}
                      </div>
                    </div>
                    <div className="border-t-2 my-2  border-gray-800 w-full "/>
                    <div className="flex justify-between">
                      <div className="flex-1 mr-4">
                        <p className="text-xs font-bold pb-2">Side Crash</p>
                        <p className="text-xxs">Based on the risk of injury in a side impact.</p>
                      </div>
                      <div className="w-30 mt-1">
                        {ratingWidget(sideCrashRating.value)}
                      </div>
                    </div>
                    <div className="border-t-2 my-2  border-gray-800 w-full "/>
                    <div className="flex justify-between">
                      <div className="flex-1 mr-4">
                        <p className="text-xs font-bold pb-2">Rollover</p>
                        <p className="text-xxs">Based on the risk of rollover in a single-vehicle crash.</p>
                      </div>
                      <div className="w-30 mt-1">
                        {ratingWidget(rollOverRating.value)}
                      </div>
                    </div>
                    </div>
                    <div className="flex bg-stone-800 mt-2">
                      <div className="flex-1 justify-start items-center p-4">
                        <p className="text-xxs font-semibold text-white">Star ratings range from 1 to 5 stars (★★★★★) with 5 being the highest.</p>
                        <p className="text-xxs font-bold text-white ">Source: National Highway Traffic Safety Administration (NHTSA)</p>
                        <p className="text-xxs font-bold text-white ">www.safercar.gov or 1-888-327-4236</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className=" text-xxs pb-3" >This Vehicle qualifies for {neoVinDataSample.make}'s</p>
                      <p className="font-bold text-sm pb-2">Security + Plus Extended Protection Plan</p>
                      <p className=" text-xxs" > The only service agreement backed by {neoVinDataSample.make} Extended Services North America! Ask your dealer for details, or call 1-800-{neoVinDataSample.make}-1 for more information</p>
                    </div>

                </div>
              
                 
               

              <div className="border-l-2  border-gray-800 w-1"/>
              <div className=" justify-start  mx-4 my-2">
                <p className="font-bold text-xxs pb-2">VEHICLE COLORS:</p>
                
                <p className="font-semibold text-xxs">EXT: <span className="font-normal text-xxs">{exteriorColor}</span></p>
                <p className="font-semibold text-xxs">INT: <span className="font-normal text-xxs">{interiorColor}</span></p>

                <p className="font-bold text-xxs pt-4">FINAL ASSEMBLY POINT:</p>
                <p className="text-xxs">AGUAS(ABV.)MEX</p>

                <p className="font-bold text-xxs pt-4">TRANSPORT METHOD:</p>
                <p className="text-xxs">TRUCK</p>

                <p className="font-bold text-xxs pt-4">DEALER:</p>
                <p className="text-xxs">WOODBURY CHEVROLET, INC</p>
                <p className="text-xxs">439 MANTUA AVE.</p>
                <p className="text-xxs">WOODBURY NJ</p>
                <p className="text-xxs">08096</p>

                <p className="font-semibold text-xxs pt-4">VIN: <span className="font-normal text-xxs">{neoVinDataSample.vin}</span></p>
                <p className="font-semibold text-xxs">EMS: <span className="font-normal text-xxs">{emission.name.toUpperCase()}</span></p>
                <p className="font-semibold text-xxs">MDL: <span className="font-normal text-xxs">12119-274958</span></p>
                <p className="font-semibold text-xxs">OPT: <span className="font-normal text-xxs">D-0O3L92H11</span></p>

                <div className="mt-10">
                  <img className="h-16 " src={barcode} alt=""/>
                </div>

                <p className="text-xxs pt-6">20181119225154AS08074</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
