import React, { useState } from 'react';
import Event from './Event';

const Search = ({ events }) => {
  const [itemVisible, setItemVisible] = useState(false)
    const [search, setSearch] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const[ filteredData, setFilteredData] = useState([])
    
    const handleFilter = (e) => {
      const filteredData = events.filter(event => event?.type === e || event?.title.toLowerCase().includes(e.toLowerCase()))
      console.log(filteredData)
      setFilteredData(filteredData)
      }

    // Handle form submission to prevent default behavior
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="p-2  scroll-m-36 bg-blue-100 scroll-smooth">
            <div className="md:w-5/6 py-3 mx-auto"></div>
            <form onSubmit={handleSubmit} className="p-2 md:mx-5 flex items-center justify-evenly">
                <label htmlFor="search" className="absolute left-[-1000000px]">Search</label>
                <input
                    type="search"
                    name="search"
                    id="search"
                    className="text-blue-500 border bg-transparent rounded-xl h-full w-full border-blue-400 outline-none capitalize p-3"
                    placeholder="Search event"
                    value={search}
                    onChange={
                      (e) => {
                        setSearch(e.target.value)
                        setItemVisible(true)
                        handleFilter(e.target.value)
                        }
                    }
                />

                <div className="md:w-4/12 h-20 mx-2 p-2">
                    <label htmlFor="search" className="absolute left-[-1000000px]">Search</label>
                </div>

                <select
                    name="type"
                    id="type"
                    className="border text-blue-600 border-blue-500 bg-transparent w-full h-full p-2 rounded-xl text-xl font-bold capitalize outline-none"
                    value={selectedType}
                    onChange={
                      (e) => {
                        setSelectedType(e.target.value)
                        setItemVisible(true)
                        handleFilter(e.target.value)
                        }
                      }
                >
                    <option value="">All Types</option>
                    <option value="concert">Concert</option>
                    <option value="cinema">Cinema</option>
                    <option value="comedy">Comedy Show</option>
                    <option value="tv-show">TV Show</option>
                </select>
            </form>

            {itemVisible  && (
        <div className="p-2 my-4">
          <div className="flex flex-wrap md:mx-auto flex-row items-center justify-center w-full md:w-5/6 mx-auto my-5 p-4">
            {filteredData.length > 0 ? (
              filteredData.map(event => (
                <Event key={event.id} event={event} />
              ))
            ) : (
              <p>No events found</p>
            )}
          </div>
        </div>
      )}

        </section>
    );
};

export default Search;