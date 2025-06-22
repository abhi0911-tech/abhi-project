import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';

const Detailpage = () => {
  let [list, setlist] = useState([]);
  let id = "lp1897";
  const fetchdata = async () => {
    try {
      const url = `https://api.liteapi.travel/v3.0/data/hotel?hotelId=${id}&timeout=4`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-API-Key': 'sand_b02a0c0c-9ad6-4586-8efb-9584a34344e8',
          Accept: 'application/json'
        }
      });
      const data = await response.json();
      setlist(data.data);


    } catch (err) {
      console.error(err);
    }
  }
  
  useEffect(() => {
    fetchdata();
  }, [id])

  const hotelImages = list?.hotelImages || []; // This ensures hotelImages is always an array — even before the data is loaded. 
  const rooms = list?.rooms || [];
  const hotelFacilities = list?.hotelFacilities || [];
  return (
    <div className='bg-slate-100'>
      <Header/>
      <div className='flex justify-center'>
        <div className='w-280 h-300 border-2  mt-5  '>
          <div className='ml-2 mt-2 font-semibold'><h1>{list.name} Rating:{list.starRating}</h1></div>
          <div className='flex'>
            <div className='ml-2 mt-2 shadow-xl shadow-slate-400 rounded-2xl'><img src={hotelImages[0]?.url} className='w-100 h-80 rounded-2xl border-0' /></div>
            <div className='border-0 h-80 ml-5 gap-y-2  mt-1 '>
              <div className=''><img src={hotelImages[1]?.url} className='w-70 h-40 rounded-2xl mb-4 shadow-xl shadow-slate-400' /></div>
              <div className=''><img src={hotelImages[2]?.url} className='w-70 h-40 rounded-2xl shadow-xl shadow-slate-400' /></div>
            </div>
            <div className='flex-wrap'>
              <div className='w-80 h-60 border-1 border-slate-300 rounded-2xl ml-4 shadow-xl shadow-slate-400'>
                <h1 className='font-semibold ml-4 text-lg'>{rooms[1]?.roomName}</h1>{/*optional chaining */}
                <div> <p className='text-[12px] ml-2 text-blue-500 font-semibold'>•<span className='ml-1'>{rooms[1]?.description}</span></p></div>
                <div className='ml-2 text-black mt-2'>
                  <li>Room size - <span className='ml-1 text-green-600'>{rooms[1]?.roomSizeSquare} sq.ft</span> </li>
                  <li>Maximum Adult -<span className='ml-1 text-green-600'>{rooms[1]?.maxAdults}</span></li>
                  <li>Maximum Children -<span className='ml-1 text-green-600'>{rooms[1]?.maxChildren}</span></li>
                </div>
                <div className=' flex justify-center w-[90%] h-9 rounded-2xl mt-3 ml-4 bg-blue-700 hover:bg-blue-500 cursor-pointer'>
                  <button className='text-white'>Book Now</button></div>
                <div className='border-1 rounded-2xl border-slate-300 shadow-2xl shadow-slate-500 w-80 h-40 mt-8'>
                  <div className='border-0 w-12 h-11 mt-4 ml-5 rounded-xl bg-blue-800 flex justify-center'>
                    <span className='text-white mt-1 text-2xl'>{list.starRating}</span></div>
                  <hr className='mt-4 text-5xl' />
                  <div className='flex'>
                    <div className='w-10 h-10 border-0 rounded-2xl ml-5 mt-3 flex justify-center bg-green-600'><svg className='mt-1 text-white' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#1f1f1f">
                      <path d="M480.21-480Q510-480 531-501.21t21-51Q552-582 530.79-603t-51-21Q450-624 429-602.79t-21 
                  51Q408-522 429.21-501t51 21ZM480-191q119-107 179.5-197T720-549q0-105-68.5-174T480-792q-103 0-171.5 
                  69T240-549q0 71 60.5 161T480-191Zm0 95Q323.03-227.11 245.51-339.55 168-452 168-549q0-134 89-224.5T479.5-864q133.5 0 
                  223 90.5T792-549q0 97-77 209T480-96Zm0-456Z"/></svg>
                    </div>
                    <div className='mt-3 ml-7'>
                      <h1 className='font-bold'>{list.city}</h1>
                      <p className='text-sm font-medium'>{list.address}<a className='ml-15 underline text-blue-900 
                      cursor-pointer text-[10px]' href={`https://www.google.com/maps`} target='blank'> See on Map </a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' border-slate-400 shadow-xl shadow-slate-400 w-175 h-60 mt-10 ml-3'>
            <span className='ml-2 text-sm font-semibold'>{list.hotelDescription?.slice(50, 208)}</span>
            <div className=' flex'>
              <div className='border-0 border-slate-300 w-50 mt-4 ml-4 h-8 shadow-xl shadow-slate-500 flex
             bg-blue-300 text-gray-700'><svg className='mt-1 mr-3 ml-2' xmlns="http://www.w3.org/2000/svg"
                  height="20px" viewBox="0 -960 960 960" width="20px" fill="#0000F5">
                  <path d="M204-144v-370q-26-4-43-23.39T144-584v-208q0-10.29 6.8-17.14 6.8-6.86 17-6.86t17.2 6.86q7 6.85 7
               17.14v168h24v-168q0-10.29 6.8-17.14 6.8-6.86 17-6.86t17.2 6.86q7 6.85 7 17.14v168h24v-168q0-10.29
                6.8-17.14 6.8-6.86 17-6.86t17.2 6.86q7 6.85 7 17.14v208q0 27.22-17 46.61T276-513v369h-72Zm264
                 0v-368q-36-15-60-55t-24-93q0-65 35-110.5t85-45.5q50 0 85 45.5T624-660q0 53-24 93t-60 55v368h-72Zm204
                  0v-672q60 0 102 42t42 102v240h-72v288h-72Z"/></svg>Food and Dining</div>
              <div className='border-0 border-slate-300 w-54 mt-4 ml-4 h-8 shadow-xl shadow-slate-500 flex
             bg-blue-300 text-gray-700'><svg className='mt-1 mr-2 ml-2' xmlns="http://www.w3.org/2000/svg"
                  height="20px" viewBox="0 -960 960 960" width="20px" fill="#0000F5">
                  <path d="M480.21-480Q510-480 531-501.21t21-51Q552-582 530.79-603t-51-21Q450-624
                 429-602.79t-21 51Q408-522 429.21-501t51 21ZM480-191q119-107
                  179.5-197T720-549q0-105-68.5-174T480-792q-103 
                  0-171.5 69T240-549q0 71 60.5 161T480-191Zm0 95Q323.03-227.11
                   245.51-339.55 168-452 168-549q0-134 89-224.5T479.5-864q133.5 0 
                   223 90.5T792-549q0 97-77 209T480-96Zm0-456Z"/></svg>Location & Surrounding</div>
            </div>
            <div className=' mt-4 ml-2'>
              <h1 className='text-[18px] font-semibold ml-3'>Amenities</h1>
              <div className='flex mt-4 mb-2 '>
                <div className='shadow-xl shadow-slate-400 ml-3 flex'><svg className='ml-1 mt-1' xmlns="http://www.w3.org/2000/svg"
                  height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FB4C">
                  <path d="m347-72-75-124-141-32 13-144-96-108 96-108-13-144 141-32 75-124 133 57
                   133-57 75 124 141 32-13 144 96 108-96 108 13 144-141 32-75 124-133-57-133
                    57Zm29-91 104-44 104 44 58-97 110-25-10-111 74-84-74-84 10-111-110-25-58-97-104 
                    44-104-44-58 97-110 24 10 112-74 84 75 84-11 112 110 25 58 96Zm104-317Zm-51 144
                     238-237-51-51-187 186-85-84-51 51 136 135Z"/></svg>
                  <span className='ml-1 mr-2 '>{hotelFacilities[1]}</span></div>
                <div className='shadow-xl shadow-slate-400 ml-3'><span className=' mr-2 flex'><svg className='ml-1 mr-1 mt-1' xmlns="http://www.w3.org/2000/svg"
                  height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FB4C">
                  <path d="m347-72-75-124-141-32 13-144-96-108 96-108-13-144 141-32 75-124 133 57
                   133-57 75 124 141 32-13 144 96 108-96 108 13 144-141 32-75 124-133-57-133
                    57Zm29-91 104-44 104 44 58-97 110-25-10-111 74-84-74-84 10-111-110-25-58-97-104 
                    44-104-44-58 97-110 24 10 112-74 84 75 84-11 112 110 25 58 96Zm104-317Zm-51 144
                     238-237-51-51-187 186-85-84-51 51 136 135Z"/></svg>{hotelFacilities[2]}</span></div>
                <div className='shadow-xl shadow-slate-400 ml-3 flex '><svg className='ml-1  mt-1' xmlns="http://www.w3.org/2000/svg"
                  height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FB4C">
                  <path d="m347-72-75-124-141-32 13-144-96-108 96-108-13-144 141-32 75-124 133 57
                   133-57 75 124 141 32-13 144 96 108-96 108 13 144-141 32-75 124-133-57-133
                    57Zm29-91 104-44 104 44 58-97 110-25-10-111 74-84-74-84 10-111-110-25-58-97-104 
                    44-104-44-58 97-110 24 10 112-74 84 75 84-11 112 110 25 58 96Zm104-317Zm-51 144
                     238-237-51-51-187 186-85-84-51 51 136 135Z"/></svg><span className='ml-1 mr-2' >{hotelFacilities[3]}</span></div>
                <div className='shadow-xl shadow-slate-400 ml-3 flex'><svg className='ml-1  mt-1' xmlns="http://www.w3.org/2000/svg"
                  height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FB4C">
                  <path d="m347-72-75-124-141-32 13-144-96-108 96-108-13-144 141-32 75-124 133 57
                   133-57 75 124 141 32-13 144 96 108-96 108 13 144-141 32-75 124-133-57-133
                    57Zm29-91 104-44 104 44 58-97 110-25-10-111 74-84-74-84 10-111-110-25-58-97-104 
                    44-104-44-58 97-110 24 10 112-74 84 75 84-11 112 110 25 58 96Zm104-317Zm-51 144
                     238-237-51-51-187 186-85-84-51 51 136 135Z"/></svg><span className='ml-1 mr-2' >{hotelFacilities[4]}</span></div>

              </div>
            </div>
          </div>
          <div className='mt-6 ml-6  w-30' > <span className='ml-3 text-[18px] font-semibold '>ROOM TYPE</span></div>
          <div className='border-1 border-red-400 ml-8 mt-2 w-35 mb-4 shadow-lg shadow-slate-400'>
            <span className='ml-2 mr-2 text-red-400'> Free Cancellation</span></div>
          <div className='w-240 h-100 border-2 ml-4 mt-6 mr-4 flex'>
            <div>
              <div className='mt-2 ml-2'>
                <img src={rooms[0]?.photos[0]?.url} className='w-70 h-50 rounded-xl  shadow-lg shadow-slate-400' /></div>
              <div className=' ml-6 mt-2 '><h1 className='text-[16px] font-bold'>{rooms[0]?.roomName}</h1></div>
              <div className='mt-0 ml-6'>
                <span className='text-[12px]  font-medium'>
                  {rooms[0]?.roomSizeSquare}sq.ft | ({rooms[0]?.roomSizeUnit} size.unit) | {rooms[0]?.bedTypes}</span></div>
              <div className='flex mt-2 '>
                <div className='ml-4 mr-2 text-sm'>
                  <li>{rooms[0]?.roomAmenities[0]?.name}</li>
                  <li>{rooms[0]?.roomAmenities[1]?.name}</li>
                  <li>{rooms[0]?.roomAmenities[2]?.name}</li>
                   <li>{rooms[0]?.roomAmenities[8]?.name}</li>
                    <li>{rooms[0]?.roomAmenities[11]?.name}</li>
                  
                </div>
                <div className='text-sm ml-2'>
                  <li>{rooms[0]?.roomAmenities[3]?.name}</li>
                  <li>{rooms[0]?.roomAmenities[4]?.name}</li>
                  <li>{rooms[0]?.roomAmenities[5]?.name}</li>
                   <li>{rooms[0]?.roomAmenities[7]?.name}</li>
                    <li>{rooms[0]?.roomAmenities[18]?.name}</li>
                </div>
              </div>
            </div>
            <div className='border-l-1 w-163 ml-6 h-[398px] '>
              <div>
                <div className='mt-6 ml-8 w-38 h-8 border-1 border-purple-900 rounded-xl'><span className='text-xl text-purple-900 ml-2' >Recommended</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Detailpage

