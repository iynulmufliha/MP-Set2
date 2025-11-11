import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const storiesData = [
  { id: 1, name: "Jinna", thumbnail: "https://i.pinimg.com/736x/00/9f/c0/009fc09a302e18d5cb0c1ecc75d728e5.jpg", content: "https://www.youtube.com/embed/hiujzFNgHcE?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 2, name: "Mufliha", thumbnail: "https://i.pinimg.com/736x/46/52/84/465284e0a57de0053b9df87994424256.jpg", content: "https://www.youtube.com/embed/2iz2tNiRpeY?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 3, name: "Meenakshi", thumbnail: "https://i.pinimg.com/736x/6f/23/95/6f2395c22cd97a6fc526174ee211b876.jpg", content: "https://www.youtube.com/embed/7l-98HVKzJQ?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 4, name: "Azeem", thumbnail: "https://i.pinimg.com/736x/72/88/c8/7288c8e9433cbb951108da55f15fa2fd.jpg", content: "https://www.youtube.com/embed/F3ReQ-NCNoA?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 5, name: "Shaista", thumbnail: "https://i.pinimg.com/736x/28/72/d4/2872d49851d67d9d8241145e080fda6d.jpg", content: "https://www.youtube.com/embed/mSS51ZVhcA0?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 6, name: "Alisha", thumbnail: "https://i.pinimg.com/736x/06/a7/83/06a783c3cd2c914ded02a13074a64a28.jpg", content: "https://www.youtube.com/embed/iYL-UuNE_9w?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 7, name: "Mehak", thumbnail: "https://i.pinimg.com/1200x/31/11/74/3111741149ce1ffaf5c0bb6209c9890a.jpg", content: "https://www.youtube.com/embed/K-C8TMrFun0?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 8, name: "Iynul", thumbnail: "https://i.pinimg.com/1200x/5b/c7/13/5bc7130580a64a649b6ebb8d20ab5341.jpg", content: "https://www.youtube.com/embed/LCYtGdMQPMo?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 9, name: "Ali", thumbnail: "https://i.pinimg.com/736x/28/72/d4/2872d49851d67d9d8241145e080fda6d.jpg", content: "https://www.youtube.com/embed/Pgom8LRF8hQ?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 10, name: "Mohamed", thumbnail: "https://i.pinimg.com/736x/28/72/d4/2872d49851d67d9d8241145e080fda6d.jpg", content: "https://www.youtube.com/embed/AnRngtkOKLI?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 11, name: "Sophiya", thumbnail: "https://i.pinimg.com/736x/28/72/d4/2872d49851d67d9d8241145e080fda6d.jpg", content: "https://www.youtube.com/embed/hiujzFNgHcE?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 12, name: "Jenani", thumbnail: "https://i.pinimg.com/736x/28/72/d4/2872d49851d67d9d8241145e080fda6d.jpg", content: "https://www.youtube.com/embed/2iz2tNiRpeY?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 13, name: "Aesha", thumbnail: "https://i.pinimg.com/736x/0f/31/7b/0f317bb8e8ea993e22fffbe50ca84c3c.jpg", content: "https://www.youtube.com/embed/7l-98HVKzJQ?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 14, name: "Mahima", thumbnail: "https://i.pinimg.com/736x/0f/31/7b/0f317bb8e8ea993e22fffbe50ca84c3c.jpg", content: "https://www.youtube.com/embed/F3ReQ-NCNoA?autoplay=1&controls=0&modestbranding=1&rel=0" },
  { id: 15, name: "Afreen", thumbnail: "https://i.pinimg.com/736x/72/88/c8/7288c8e9433cbb951108da55f15fa2fd.jpg", content: "https://www.youtube.com/embed/mSS51ZVhcA0?autoplay=1&controls=0&modestbranding=1&rel=0" },
];

const StoryList = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleClose = () => setSelectedStory(null);
  const handleClick = (story) => setSelectedStory(story);

  return (
    <div className="mt-5">
      <div className="d-flex" style={{ gap: "20px", overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {storiesData.map((story) => (
          <div key={story.id} className="text-center" style={{ cursor: "pointer", flex: "0 0 calc(12.5% - 10px)" }} onClick={() => handleClick(story)}>
            <img
              src={story.thumbnail}
              alt={story.name}
              style={{ width: "90px", height: "90px", borderRadius: "50%", border: "3px solid #1DA1F2", padding: "2px", objectFit: "cover", transition: "transform 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <p style={{ fontSize: "0.85rem", color: "#ffffffff" }}>{story.name}</p>
          </div>
        ))}
      </div>

      {selectedStory && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgba(0,0,0,0.7)", zIndex: 9999 }} onClick={handleClose}>
          <div className="position-relative bg-black p-3 rounded" style={{ maxWidth: "600px", width: "90%", height: "auto" }} onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              className="btn btn-danger position-absolute"
              style={{ top: "10px", right: "10px", zIndex: 10 }}
              onClick={handleClose}
            >
              ✕
            </button>

            <iframe
              width="100%"
              height="350px"
              src={selectedStory.content}
              title={selectedStory.name}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default StoryList;
