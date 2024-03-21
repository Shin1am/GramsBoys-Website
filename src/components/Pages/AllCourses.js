import React, { useState } from 'react'
import Navbar from '../util/Navbar'
import '../css/Courses.css'
import Rectangle from '../svg/Rectangle'
import { AllCoursesData } from '../util/CoursesData'
import CardItem from '../util/CardItem'

function AllCourses() {

    const [query, setQuery] = useState('')

  return (
    <>
    <Navbar />
    <div className='home-ac-container'>
        <div className='home-container-text'>
            <p>คอร์สเรียนทั้งหมด</p>
        </div>
        <div className='home-text-rectangle'>
            <Rectangle width={120} height={6} color='#358CC8' />
        </div>
        <div className='searchbar'>
                <input type='text' placeholder='search...' className='searchingbar' onChange={e=> setQuery(e.target.value)}/>
        </div>
        <div className='courses-section-container'>
            <div className='filter-section'>
                <p>filter</p>
            </div>
            <div className='courses-section'>
                {AllCoursesData.filter((item) => item.text.toLowerCase().includes(query)).map((item) => (
                        <CardItem
                            key={item.index} // Add a unique key for each card (recommended)
                            src={item.src}
                            label={item.label}
                            path={item.path}
                            text={item.text}
                            textSize={item.textSize}
                            description={item.description}
                            descriptionSize={item.descriptionSize}
                            price={item.price}
                            priceSize={item.priceSize}
                            style={item.style}
                            picWrapSize={item.picWrapSize}
                            
                         />
                          ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default AllCourses