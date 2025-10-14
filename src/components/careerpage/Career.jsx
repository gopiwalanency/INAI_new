import React from 'react';
import RealWorldTraining from '../../pages/RealWorldTraining';
import Hero from '../Hero';
import '../teampage/Team.css';
import background from '../../assets/background.jpg';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';



import user1 from '../../assets/emp-photos/user1.jpg';
import jayCoFounder from '../../assets/emp-photos/jaySIr.jpg';



const founders = [
    {
        name: 'Krushnarajsinh Parmar',
        role: 'Chairman',
        image: user1,
        align: 'left',
        description: `Krushnarajsinh is the visionary leader who founded our company with a passion for innovation. He drives our strategic direction and inspires the team to achieve greatness. His expertise has been instrumental in shaping our success. He believes in creating technology that makes a difference.`
    },
    {
        name: 'Jay Gelani',
        role: 'Managing Director',
        image: jayCoFounder,
        align: 'right',
        description: `Jay is the strategic mind who helps steer our company toward its goals. With a keen eye for market trends, he identifies new opportunities for growth. He is dedicated to building a culture of excellence and collaboration. His leadership is key to our operational success.`
    }
];

const Career = () => {
    const homeHeroData = {

    };

    return (
        <>
            <div className="team-page">
                <Hero
                    title="Our Awesome Master Minds"
                    subtitle=""
                    backgroundImage={background}
                    isShort={true}
                />

                <div className="founders-section">
                    {/* <h2 className="founders-title">Meet Our Founders</h2> */}
                    {founders.map((founder, index) => (
                        <div className={`founder-card ${founder.align}`} key={index}>
                            <div className="founder-image-container">
                                <div className="founder-image-clone top" style={{ backgroundImage: `url(${founder.image})` }}></div>
                                <div className="founder-image-clone bottom" style={{ backgroundImage: `url(${founder.image})` }}></div>
                                <img src={founder.image} alt={founder.name} className="founder-image" />
                            </div>
                            <div className="founder-info">
                                <h3 className="founder-name">{founder.name}</h3>
                                <p className="founder-role">{founder.role}</p>
                                <p className="founder-description">{founder.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <RealWorldTraining />

        </>
    );
};

export default Career; 