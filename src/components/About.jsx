import React from 'react'

const About = () => {
    return (

        <div name="about" className='w-full h-screen bg-gradient-to-b 
        from-gray-800 to-black text-white'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col
            justify-center w-full h-full">
                <div className="pb-8">
                  <p className="text-4xl font-bold inline border-b-4 border-gray-500"> About</p> 
                </div>
                    <p className='text-xl mt-8'>
                    I am an experienced developer with a passion for creating innovative and user-friendly web applications.
                     With 4+ years of experience with Accenture and a post-graduation in Information Technology Solutions from Humber 
                     College, I have a strong foundation in a wide range of technologies and methodologies. My focus is on web application 
                     development, front-end development, RESTful API development, and cloud-based development. I have extensive experience 
                     with Java, Spring, Node, React, HTML, CSS, JavaScript, jQuery, Bootstrap, and databases such as Oracle, MySQL, DynamoDB
                      and MongoDB.</p>
                    <br />
                    <p className='text-xl'>
                    In addition, I am a proactive and efficient learner who is known for delivering high-quality outcomes
                    and exceeding expectations. I am a team player who enjoys collaboration and taking ownership. My goal 
                    is to continue growing my skills and experience as a Full Stack Application Developer and contribute
                    to creating dynamic, user-friendly web applications that meet the needs of users
                    and businesses alike.</p>
                
            </div>
        </div>
    )
}

export default About