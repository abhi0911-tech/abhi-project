import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { MdOutlineFavorite } from "react-icons/md";
import { addToWishlist } from './wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TbBackground } from 'react-icons/tb';

const Hotellist = () => {
  const [selected, setSelected] = useState('IN');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 5;

  const dispatch = useDispatch();
  const handleWishlist = (hotel) => {
    dispatch(addToWishlist(hotel));
  };

  const handleSearch = async (countryCode) => {
    try {
      const url = `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${countryCode}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-API-Key': 'sand_b02a0c0c-9ad6-4586-8efb-9584a34344e8',
          Accept: 'application/json'
        }
      });

      const data = await response.json();

      const filteredData = data.data.map(hotel => ({
        name: hotel.name,
        city: hotel.city,
        image: hotel.main_photo,
        id :hotel.id
      }));
      

      setResults(filteredData);
      setCurrentPage(1); // Reset page on new country
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    handleSearch(selected);
  }, [selected]);

  // Pagination logic
  const totalPages = Math.ceil(results.length / hotelsPerPage);
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = results.slice(indexOfFirstHotel, indexOfLastHotel);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPaginationRange = () => {
    const totalPageNumbersToShow = 4;
    const range = [];

    if (totalPages <= totalPageNumbersToShow + 2) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, 4, '...');
      } else if (currentPage >= totalPages - 2) {
        range.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        range.push('...', currentPage - 1, currentPage, currentPage + 1, '...');
      }
    }

    return range;
  };

  const paginationRange = getPaginationRange();

  const navigate=useNavigate();

  function detail(hotel) {
    navigate("/detail",{state:{id:hotel.id}});

  }

  return (
    
    <div className="min-h-screen bg-gray-100 p-6">
      <Header/>
      <div className="max-w-4xl mx-auto bg-white p-4 shadow rounded mt-6">
        <div className="flex justify-center mb-4">
          <select
            className="border px-4 py-2 rounded"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="IN">India</option>
            <option value="US">US</option>
            <option value="AU">Australia</option>
            <option value="PK">Pakistan</option>
            <option value="JP">Japan</option>
            <option value="GE" >Germany</option>
            <option value="IL" >Israel</option>
            <option value="MR" >Mauritania</option>
            <option value="NP" >Nepal</option>
            <option value="RU" >Russia</option>
        
          </select>
        </div>

        <p className="text-center mb-6 text-lg text-blue-700">Selected Country: {selected}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
          {currentHotels.length > 0 ? (
            currentHotels.map((hotel, index) => (
              <div key={index} className="border p-4 rounded bg-white shadow "   >
               <div onClick={()=>{detail(hotel)}}>
                 <h3 className="font-bold text-lg">{hotel.name}</h3>
                <p className="text-gray-600">{hotel.city}</p>
                {hotel.image && (
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="mt-2 w-full h-40 object-cover rounded"
                    
                  />
                  
                )}
               </div>
                <div className=' w-10 h-10' onClick={() => { handleWishlist(hotel) () }}>
                  <button className='mt-4 cursor-pointer'  ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BB271A">
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81
                 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86
                  158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100
                   40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">Loading or no data available.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {paginationRange.map((item, index) =>
              item === '...' ? (
                <span key={index} className="px-3 py-1 text-gray-500">...</span>
              ) : (
                <button
                  key={index}
                  onClick={() => paginate(item)}
                  className={`px-3 py-1 border rounded ${
                    item === currentPage
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-blue-500 hover:bg-blue-100'
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        )}
      </div>
      <Footer className='mt-6'/>

    </div>
  );
};

export default Hotellist;
