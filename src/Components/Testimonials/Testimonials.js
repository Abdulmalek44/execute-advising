import React from 'react'
import './Testimonials..css'
import Card from '../Card/Card'
import user1 from '../../Images/user1.jpeg'
import user2 from '../../Images/user2.jpeg'
import user3 from '../../Images/user3.jpeg'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <Card
                        img={user1}
                        pargraph={"It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!"}
                        name={"Johnson.M.J."}
                        director={"Director of Financial Times"}
                    />
                    <Card
                        img={user2}
                        pargraph={"In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable"}
                        name={"Carol Harper"}
                        director={"Director at Risktec Solutions Ltd"}
                    />
                    <Card
                        img={user3}
                        pargraph={"A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns."}
                        name={"Snow.J.R."}
                        director={"Managing Director of BPW Global"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
