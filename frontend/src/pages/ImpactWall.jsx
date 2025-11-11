import React, { useState, useRef } from "react";
import { FaDonate, FaHandsHelping, FaGlobe, FaBook, FaStar } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ImpactWall = () => {
  const [stats, setStats] = useState({
    donations: 5000000,
    volunteers: 1000,
    reach: 120,
    stories: 250,
  });

  const [donationName, setDonationName] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [points, setPoints] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [triviaMsg, setTriviaMsg] = useState("");

  const carouselRef = useRef();
  const [selectedStory, setSelectedStory] = useState(null);
  const [showStoryModal, setShowStoryModal] = useState(false);

  const triviaQuestion = {
    question: "Which is the main goal of our foundation?",
    options: ["Education", "Crisis Relief", "Animal Welfare", "Space Research"],
    answer: "Crisis Relief",
  };

const stories = [
  {
    id: 1,
    title: "Story 1: Rebuilding Hope in Kerala",
    beforeImg: "https://i.pinimg.com/1200x/da/a9/93/daa993d245e6ccf4cd2c5420433bbd05.jpg",
    afterImg: "https://i.pinimg.com/1200x/35/c3/0b/35c30b07f39d77aa7d5f74ac02a68a3e.jpg",

    description:
      "After the devastating floods in Kerala, our foundation helped rebuild homes and provided essential kits to over 200 families, restoring their hope and dignity.",
  },
  {
    id: 2,
    title: "Story 2: Empowering Women in Rajasthan",
    beforeImg: "https://i.pinimg.com/1200x/ad/05/f6/ad05f6d194e635fdee5f8849d5119d4d.jpg",
    afterImg: "https://i.pinimg.com/1200x/12/21/0f/12210ffd04d138553185686c7fefc042.jpg",
    description:
      "We launched self-help groups for women artisans in rural Rajasthan, providing them with tools and training to start sustainable businesses.",
  },
  {
    id: 3,
    title: "Story 3: Rebuilding Lives in Palestine",
    beforeImg: "https://i.pinimg.com/736x/b6/91/38/b691382fe88bdce4e10ec7f434e8bd7d.jpg",
    afterImg: "https://i.pinimg.com/736x/ec/26/3d/ec263d4203aa7b73bd29dea474a2289b.jpg",
    description:
      "In war-torn Palestine, our foundation joined local relief teams to rebuild homes, provide clean water, and deliver medical aid — bringing hope back amid the ruins.",

  },
  {
    id: 4,
    title: "Story 4: Feeding the Hungry During COVID-19",
    beforeImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPue112T1cZSX5iF9eJt7mH7awLKEBedkvrw&s",
    afterImg: "https://i.pinimg.com/1200x/e9/8a/cc/e98acc79ba39a0dd08ae709027182602.jpg",
    description:
      "During the pandemic lockdown, we distributed over 1 million meals to daily wage workers and homeless individuals across major cities.",
  },
  {
    id: 5,
    title: "Story 5: Clean Water Initiative in Odisha",
    beforeImg: "https://i.pinimg.com/1200x/03/14/39/0314395201f3c3bbb395320049b73eb6.jpg",
    afterImg: "https://i.pinimg.com/1200x/5f/68/87/5f688736483a11fb24cb44d74c3bc67e.jpg",
    description:
      "Our team installed solar-powered water filters in 15 drought-prone villages, providing clean drinking water to thousands of residents.",
  },
  {
    id: 6,
    title: "Story 6: Healing the Earth in Himachal",
    beforeImg: "https://i.pinimg.com/736x/ba/e2/11/bae211cd22d9d659bae95688a98b85c9.jpg",
    afterImg: "https://i.pinimg.com/1200x/06/74/1f/06741f4e29fa189f63ac64caff70e5df.jpg",
    description:
      "Volunteers planted over 50,000 trees in the deforested slopes of Himachal Pradesh, restoring the ecosystem and improving local climate conditions.",
  },
  {
    id: 7,
    title: "Story 7: Disaster Relief in Turkey",
    beforeImg: "https://i.pinimg.com/1200x/9b/32/85/9b328531cc4053489fed3d1f1726ee48.jpg",
    afterImg: "https://i.pinimg.com/1200x/18/ed/47/18ed4799aa9d6ba64466873b01ae607b.jpg",
    description:
      "After the earthquake in Turkey, we partnered with global NGOs to deliver medical aid, temporary shelters, and psychological support to survivors.",
  },
  {
    id: 8,
    title: "Story 8: Reuniting Families in Ukraine",
    beforeImg: "https://picsum.photos/600/400?random=8",
    afterImg: "https://picsum.photos/600/400?random=22",
    description:
      "Our volunteers worked tirelessly in refugee camps to reunite families separated by the war and provide them with essential medical and legal aid.",
  },
  {
    id: 9,
    title: "Story 9: Supporting Farmers in Maharashtra",
    beforeImg: "https://picsum.photos/600/400?random=9",
    afterImg: "https://picsum.photos/600/400?random=23",
    description:
      "We helped struggling farmers adopt organic practices, offered debt-relief guidance, and connected them to direct-to-market opportunities.",
  },
  {
    id: 10,
    title: "Story 10: Restoring Lives After Cyclone Fani",
    beforeImg: "https://picsum.photos/600/400?random=10",
    afterImg: "https://picsum.photos/600/400?random=24",
    description:
      "Following Cyclone Fani’s destruction in coastal Odisha, we rebuilt schools, distributed emergency supplies, and restored local livelihood programs.",
  },
];

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    if (!donationName || !donationAmount) return;
    setStats((prev) => ({ ...prev, donations: prev.donations + Number(donationAmount) }));
    setPoints((prev) => prev + Number(donationAmount));
    setDonationName("");
    setDonationAmount("");
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    if (!volunteerName || !volunteerEmail) return;
    setStats((prev) => ({ ...prev, volunteers: prev.volunteers + 1 }));
    setPoints((prev) => prev + 10);
    setVolunteerName("");
    setVolunteerEmail("");
  };

  const handleTrivia = () => {
    if (selectedOption === triviaQuestion.answer) {
      setPoints((prev) => prev + 50);
      setTriviaMsg("Correct! +50 points added.");
    } else {
      setTriviaMsg("Incorrect. Try again!");
    }
    setTimeout(() => setTriviaMsg(""), 3000);
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
return (
  <div className="container my-5">

    {/* Impact Wall Title */}
    <p className="text-center fs-2 fw-bold mb-5 text-light">Impact Wall</p>

    {/* Stats Cards */}
    <div className="row text-center g-3 mb-5">
      {[{icon: <FaDonate />, label:"Donations", value:`$${stats.donations.toLocaleString()}`},
        {icon:<FaHandsHelping />, label:"Volunteers", value:stats.volunteers},
        {icon:<FaGlobe />, label:"Countries Reached", value:stats.reach},
        {icon:<FaBook />, label:"Stories", value:stats.stories}].map((stat, idx)=>(
        <div key={idx} className="col-6 col-md-3">
          <div className="glass-card p-3 h-100 text-center shadow-sm">
            <div className="mb-2">{stat.icon}</div>
            <p className="stats-value mb-1">{stat.value}</p>
            <p className="stats-label mb-0">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Forms */}
    <div className="row g-4 mb-5">
      <div className="col-md-6">
        <div className="glass-card p-4 h-100 shadow-sm">
          <p className="fw-bold mb-3 stats-value">Make a Donation</p>
          <form onSubmit={handleDonationSubmit}>
            <input type="text" className="glass-input mb-3 w-100" placeholder="Your Name" value={donationName} onChange={e=>setDonationName(e.target.value)} required/>
            <input type="number" className="glass-input mb-3 w-100" placeholder="Amount" value={donationAmount} onChange={e=>setDonationAmount(e.target.value)} required/>
            <button type="submit" className="glass-btn w-100">Donate</button>
          </form>
        </div>
      </div>

      <div className="col-md-6">
        <div className="glass-card p-4 h-100 shadow-sm">
          <p className="fw-bold mb-3 stats-value">Join as Volunteer</p>
          <form onSubmit={handleVolunteerSubmit}>
            <input type="text" className="glass-input mb-3 w-100" placeholder="Your Name" value={volunteerName} onChange={e=>setVolunteerName(e.target.value)} required/>
            <input type="email" className="glass-input mb-3 w-100" placeholder="Email" value={volunteerEmail} onChange={e=>setVolunteerEmail(e.target.value)} required/>
            <button type="submit" className="glass-btn w-100">Join</button>
          </form>
        </div>
      </div>
    </div>

    {/* Trivia Challenge */}
    <div className="glass-card p-4 mb-5 shadow-sm">
      <p className="fw-bold mb-2 stats-value">Trivia Challenge</p>
      <p className="small stats-label mb-3">{triviaQuestion.question}</p>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {triviaQuestion.options.map((opt, idx)=>(
          <button key={idx} className={`glass-btn btn-sm ${selectedOption===opt?'active':''}`} onClick={()=>setSelectedOption(opt)}>{opt}</button>
        ))}
      </div>
      <div className="d-flex align-items-center gap-2">
        <button className="glass-btn btn-sm" onClick={handleTrivia}>Submit</button>
        {triviaMsg && <span className="text-success small fw-bold">{triviaMsg}</span>}
        <span className="ms-auto small stats-value">Points: {points} <FaStar className="text-warning"/></span>
      </div>
    </div>

    {/* Stories Carousel */}
    <section className="stories-carousel my-5">
      <h2 className="text-center fw-bold stats-value mb-4">Global Impact Stories</h2>
      <div className="position-relative">
        <button className="carousel-btn-left" onClick={()=>scrollCarousel("left")}>&lt;</button>
        <div className="d-flex overflow-auto px-2 stories-container">
          {stories.map(story=>(
            <div key={story.id} className="glass-card story-card flex-shrink-0 me-3" style={{minWidth:"250px", maxWidth:"250px", height:"320px"}} onClick={()=>{setSelectedStory(story); setShowStoryModal(true);}}>
              <img src={story.afterImg} alt={story.title} style={{height:"150px", objectFit:"cover", borderRadius:"6px 6px 0 0"}}/>
              <div className="card-body p-2">
                <h4 className="story-title mb-2">{story.title}</h4>
                <p className="story-description">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn-right" onClick={()=>scrollCarousel("right")}>&gt;</button>
      </div>
    </section>

    {/* Milestones */}
    <div className="glass-card shadow-sm text-center p-4 mb-5">
      <p className="fw-bold stats-value mb-2">Milestones & Achievements</p>
      <p className="stats-label small mb-3">Complete challenges, earn points & badges, and contribute to impactful missions globally.</p>
      <button className="glass-btn">Get Involved</button>
    </div>
  </div>
);
}


export default ImpactWall;
