import React from 'react'
import EducationCart from './EducationCart'

const Education = () => {
  return (
    
    <div className='min-h-screen bg-gray-800 pb-10 '>
         <h5 className='text-white text-center text-5xl pt-10'>Education Journey!</h5>
         <div className='flex justify-between text-white mt-20 px-20'>
          <div className='space-y-10'> 
            <EducationCart img=" https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png"
                            collegeName="LNCTE Bhopal"
                             degree="B.Tech in Computer Science and Engineering"
                             year="2022-2025"
                             decript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                             skils={["Data Structures", "Algorithms", "Web Development", "Databases"]}
                             collegelink="https://lnct.ac.in/"
                            />

                              <EducationCart img=" https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png"
                            collegeName="LNCTE Bhopal"
                             degree="B.Tech in Computer Science and Engineering"
                             year="2022-2025"
                             decript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                             skils={["Data Structures", "Algorithms", "Web Development", "Databases"]}
                             collegelink="https://lnct.ac.in/"
                            />
           
            

          </div>
          <div>middle</div>
          <div>right</div>
         </div>
    </div>
  )
}

export default Education
