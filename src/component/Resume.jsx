import React from 'react'

const Resume = () => {

    const myEducation = [
        {
            year_range : '2014 - 2017',
            Ed_name :  'Electronics Engineering',
            institute_name : 'Al_Kabir Polytechnic',
            description : 'Diploma in ECE with 70% marks from sbtej Jharknand INDIA , session 2014-2017  batch '
        },
        {
            year_range : '2021 - 2023',
            Ed_name :  'Full Stack Web-Development',
            institute_name : 'EDYODA Digital University',
            description : 'This is my sort term course in Edyoda here i learn full stack development passed with good marks.'
        },
        {
            year_range : '--------',
            Ed_name :  'Bachelor Degree',
            institute_name : 'UnKnown',
            description : 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
        }
    ]

    const myExprience = [
        {
            year : '2022 - 2023',
            Ex_name : 'Work as a Freelancer',
            Ex_at : 'Fivver',
            description : 'I work as freelancer from one year I completed many project and client has satisfied with my work.'
        },
        // {
        //     year : '2021 - 2023',
        //     Ex_name : 'Work as a Freelancer',
        //     Ex_at : 'Fivver',
        //     description : 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
        // },
        // {
        //     year : '2021 - 2023',
        //     Ex_name : 'Work as a Freelancer',
        //     Ex_at : 'Fivver',
        //     description : 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
        // }
    ]

    window.onload = function() {
        var value_web = 65;
        let id_web = 'colorFill';
        let id_html = 'colorFill2';
        let value_html = 95;
        let value_js = 85;
        let id_js ='colorFill3';
        let value_react = 75;
        let id_react ='colorFill4';
        let value_jquery = 60;
        let id_jquery ='colorFill5';
        let value_next = 35;
        let id_next ='colorFill6';

        showPercentageColor(value_web, id_web);
        showPercentageColor(value_html ,  id_html);
        showPercentageColor(value_js ,id_js);
        showPercentageColor(value_react , id_react)
        showPercentageColor(value_jquery , id_jquery);
        showPercentageColor(value_next , id_next)
    };
    
    function showPercentageColor(value, id) {
        var min_value = 0;
        var max_value = 100;
        var percentage = (value - min_value) / (max_value - min_value) * 100;
        var colorFill= document.getElementById(id);
        colorFill.style.width = percentage + '%'
      }
      



  return (
    <section className="resume_container" id='resume'>
         <div className="heading">
            <div className="blur_text resume_color">
                <h1>SUMMARY</h1>
            </div>
            <div className="highlighted_text">
                <p>Resume</p>
            </div>
       </div>

       <div className="resume_wrraper grid">
            <div className="education">
                <h2>My Education</h2>
                {myEducation.map((curElem) => {
                    return (
                        <div className="re_box" key={curElem.Ed_name}>
                            <p className="year">{curElem.year_range}</p>
                            <h2>{curElem.Ed_name}</h2>
                            <p className="institute">{curElem.institute_name}</p>
                            <p className="des">{curElem.description}</p>
                        </div>

                    )
                })}
            </div>
            <div className="exprience">
                <h2>My Exprience</h2>
                {myExprience.map((curElem)=>{
                    return (
                        <div className="re_box" key={curElem.Ex_name}>
                            <p className="year">{curElem.year}</p>
                            <h2>{curElem.Ex_name}</h2>
                            <p className="institute">{curElem.Ex_at}</p>
                            <p className="des">{curElem.description}</p>
                        </div>
                    )
                })}
            </div>
       </div>

       <h2 className='my_skill_title'>My Skills</h2>
       <div className="skills_container grid">

            <div className='skill_box' >
                <div className="skill_title">
                    <p>Web Design</p>
                    <p>65%</p>
                </div>
                <div className="color-bar">
                    <div className="color-fill" id="colorFill"></div>
                </div>
            </div>

            <div className='skill_box' >
                <div className="skill_title">
                    <p>HTML/CSS</p>
                    <p>95%</p>
                </div>
                <div className="color-bar">
                    <div className="color-fill" id="colorFill2"></div>
                </div>
            </div>


            <div className='skill_box' >
                <div className="skill_title">
                    <p>JavaScript</p>
                    <p>85%</p>
                </div>
                <div className="color-bar">
                    <div className="color-fill" id="colorFill3"></div>
                </div>
            </div>

            <div className='skill_box' >
                <div className="skill_title">
                    <p>React Js</p>
                    <p>75%</p>
                </div>
                <div className="color-bar">
                    <div className="color-fill" id="colorFill4"></div>
                </div>
            </div>


            <div className='skill_box' >
                <div className="skill_title">
                    <p>Jquery</p>
                    <p>60%</p>
                </div>
                <div className="color-bar">
                    <div className="color-fill" id="colorFill5"></div>
                </div>
            </div>

            <div className='skill_box' >
                <div className="skill_title">
                    <p>Next Js</p>
                    <p>35%</p>
                </div>
                <div className="color-bar">
                    <div className="color-fill" id="colorFill6"></div>
                </div>
            </div>

       </div>
           
    </section>
  )
}

export default Resume