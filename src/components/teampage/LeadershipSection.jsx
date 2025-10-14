import React from 'react';
import './LeadershipSection.css';

import maulik from '../../assets/maulik.jpg';
import darshak from '../../assets/darshak.jpg';
import bhranti from '../../assets/bhranti.jpg';
import charmi from '../../assets/charmi.jpg';
import ani from '../../assets/ani.png';
import prachi from '../../assets/prachi.jpg';
import akshay from '../../assets/akshay.jpg';
import isha from '../../assets/isha.jpg';
import ishita from '../../assets/ishita.jpg';
import mahek from '../../assets/mahek.jpg';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';

const leaders = [
  {
    name: 'Krushnarajsinh Parmar',
    role: 'Co-Founder & CEO',
    image: user1,
    message: 'Lorem ipsum dolor sit amet, usu utinam inermis voluptua eu. Usu esse solet scripserit eu. Modo expetendis no usu, ex has tota conceptam efficiendi. No ius amet alterum.',
    align: 'left',
  },
  {
    name: 'Jay Gelani',
    role: 'Co-Founder & CFO',
    image: user2,
    message: 'Lorem ipsum dolor sit amet, usu utinam inermis voluptua eu. Usu esse solet scripserit eu. Modo expetendis no usu, ex has tota conceptam efficiendi. No ius amet alterum.',
    align: 'right',
  },
];

const otherMembers = [
    { name: 'Drashti Vaghani', role: 'HRO', image: bhranti },
    { name: 'Charmi Patel', role: 'UI/UX Designer', image: charmi },
    { name: 'Ani Patel', role: 'AI Specialist', image: ani },
    { name: 'Prachi Patel', role: 'Lead Developer', image: prachi },
    { name: 'Akshay Kumar', role: 'Sr. Developer', image: akshay },
    { name: 'Isha Sharma', role: 'Project Manager', image: isha },
    { name: 'Ishita Mehta', role: 'Jr. Developer', image: ishita },
    { name: 'Mahek Shah', role: 'Marketing Head', image: mahek },
    { name: 'Arjun Reddy', role: 'Cloud Engineer', image: user3 },
    { name: 'Maulik Parmar', role: 'Tech Lead', image: maulik },
    { name: 'Darshak Mehta', role: 'Product Manager', image: darshak },
];

const LeadershipSection = () => {
  return (
    <div className="leadership-section">
        <div className="leaders">
            {leaders.map((leader, index) => (
                <div className={`leader-card ${leader.align}`} key={index}>
                    <div className="leader-image">
                        <img src={leader.image} alt={leader.name} />
                        <div className="leader-shape"></div>
                    </div>
                    <div className="leader-info">
                        <h2 className="leader-title">CEO Message</h2>
                        <div className="wavy-line"></div>
                        <p className="leader-message">{leader.message}</p>
                        <h3 className="leader-name">{leader.name}</h3>
                        <p className="leader-role">{leader.role}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="other-team-members">
            <h2 className="other-members-title">Our Awesome Team</h2>
            <div className="team-grid">
                {otherMembers.map((member, index) => (
                    <div className="team-member-card" key={index}>
                        <div className="team-member-image-container">
                            <img src={member.image} alt={member.name} className="team-member-image" />
                        </div>
                        <h3 className="team-member-name">{member.name}</h3>
                        <p className="team-member-role">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default LeadershipSection; 