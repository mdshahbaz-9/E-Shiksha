

import React from 'react'
import { HomePageExplore } from "../../../data/homepage-explore"
import HighlightText from './HighlightText';
import { useState } from 'react';
import CourseCard from './CourseCard';

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)
    
    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
        console.log(result[0].courses);
    }
    
    return (
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>
            
            {/* Header Section */}
            <div className='relative z-10 text-center mb-12'>
                <div className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white'>
                    Unlock the 
                    <HighlightText text={"Power of Code"} />
                </div>
                <p className='text-center text-gray-600 dark:text-richblack-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed'>
                    Learn to build anything you can imagine
                </p>
            </div>
            
            {/* Enhanced Tab Navigation */}
            <div className='relative z-10 mb-16'>
                <div className='flex justify-center'>
                    <div className='inline-flex bg-gray-100 dark:bg-richblack-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-richblack-700 backdrop-blur-sm'>
                        {tabsName.map((element, index) => {
                            const isActive = currentTab === element;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setMyCards(element)}
                                    className={`
                                        relative px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-xl
                                        transition-all duration-300 ease-in-out transform
                                        ${isActive 
                                            ? "bg-white dark:bg-richblack-900 text-gray-900 dark:text-richblack-5 shadow-md scale-105" 
                                            : "text-gray-600 dark:text-richblack-200 hover:text-gray-900 dark:hover:text-richblack-5 hover:bg-white/50 dark:hover:bg-richblack-900/50"
                                        }
                                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                        active:scale-95
                                    `}
                                >
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"></div>
                                    )}
                                    <span className="relative z-10">{element}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            
            {/* Course Cards Section */}
            <div className='relative z-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto'>
                    {courses.map((element, index) => {
                        return (
                            <div 
                                key={index}
                                className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                            >
                                <CourseCard 
                                    cardData={element}
                                    currentCard={currentCard}
                                    setCurrentCard={setCurrentCard}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full opacity-20"></div>
        </div>
    )
}

export default ExploreMore

