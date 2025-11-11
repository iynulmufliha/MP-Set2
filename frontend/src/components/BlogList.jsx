import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container, Modal, Button } from 'react-bootstrap';

const blogsData = [
  {
    id: 1,
    title: "Gaza Crisis: Ceasefire Violations Amid Aid Blockades",
    description: "Despite a fragile ceasefire, clashes continue in Gaza, with severe restrictions on humanitarian aid affecting thousands.",
    image: "https://i.pinimg.com/736x/1f/85/ec/1f85ec1b2a03aed94b6a9729bad5eeba.jpg",
    link: "https://www.theguardian.com/world/live/2025/oct/16/gaza-ceasefire-israel-hamas-palestine-rafah-hostages-live-news-updates"
  },
  {
    id: 2,
    title: "Sudan's Darfur: Escalating Violence and Displacement",
    description: "Ongoing conflict in Darfur has forced millions to flee, creating urgent humanitarian needs across the region.",
    image: "https://i.pinimg.com/1200x/d0/b0/2c/d0b02c3a1724f9a09e8f7e117964fc04.jpg",
    link: "https://reliefweb.int/report/sudan/surviving-siege-voices-el-fasher-sudan-october-15-2025"
  },
  {
    id: 3,
    title: "Yemen: Houthi Attacks on UN Aid Facilities",
    description: "Houthi raids on UN facilities in Sanaa have disrupted aid delivery and endangered humanitarian workers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sanaa_2010.jpg/800px-Sanaa_2010.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Houthi_raids_on_UN_buildings_in_Sanaa"
  },
  {
    id: 4,
    title: "South Sudan: Fangak Hospital Bombing",
    description: "A bombing at a Médecins Sans Frontières hospital in Fangak caused multiple casualties, highlighting the dangers to healthcare facilities.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fangak%2C_South_Sudan.jpg/800px-Fangak%2C_South_Sudan.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Fangak_bombing"
  },
  {
    id: 5,
    title: "Sudan: Cholera Epidemic Amid Conflict",
    description: "Sudan faces a severe cholera outbreak, worsened by ongoing conflict and displacement across affected areas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cholera_bacteria.jpg/800px-Cholera_bacteria.jpg",
    link: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Sudanese_cholera_epidemic"
  },
  {
    id: 6,
    title: "Haiti: Record Displacement Due to Violence",
    description: "Widespread violence in Haiti has displaced over 1.4 million people, creating urgent humanitarian challenges.",
    image: "https://www.iom.int/sites/default/files/styles/large/public/2025-10/Haiti%20Displacement%20October%202025.jpg",
    link: "https://www.iom.int/news/displacement-haiti-reaches-record-high-14-million-people-flee-violence"
  },
  {
    id: 7,
    title: "Ethiopia: Refugee Crisis and Aid Shortages",
    description: "Cuts in aid and resources have pushed Ethiopian refugee camps to the brink of humanitarian collapse.",
    image: "https://x.com/clashreport/status/1977819084768039195/photo/1",
    link: "https://x.com/clashreport/status/1977819084768039195"
  },
  {
    id: 8,
    title: "Gaza: Aid Distribution Killings",
    description: "Aid distribution in Gaza has resulted in tragic civilian casualties, intensifying the humanitarian crisis.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gaza_2018.jpg/800px-Gaza_2018.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Gaza_Strip_aid_distribution_killings"
  },
  {
    id: 9,
    title: "Democratic Republic of Congo: Escalating Attacks",
    description: "Violence in eastern DRC has displaced over 700,000 people, worsening the ongoing humanitarian emergency.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Goma%2C_Democratic_Republic_of_the_Congo.jpg/800px-Goma%2C_Democratic_Republic_of_the_Congo.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Democratic_Republic_of_the_Congo_attacks"
  },
  {
    id: 10,
    title: "Sudan: Hospital Attack in El Fasher",
    description: "A drone strike on a hospital in El Fasher caused numerous casualties, emphasizing risks to healthcare in conflict zones.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/El_Fasher%2C_Sudan.jpg/800px-El_Fasher%2C_Sudan.jpg",
    link: "https://en.wikipedia.org/wiki/2025_Saudi_Hospital_Attack"
  },
  {
    id: 11,
    title: "Gaza: Humanitarian Situation Update",
    description: "Access to aid in Gaza remains limited, leaving civilians with severe shortages amid ongoing conflict.",
    image: "https://www.unocha.org/sites/unocha/files/styles/large/public/2025-10/Gaza%20Humanitarian%20Update%20October%202025.jpg",
    link: "https://reliefweb.int/report/occupied-palestinian-territory/humanitarian-situation-update-329-gaza-strip"
  },
  {
    id: 12,
    title: "Sudan: Cholera Outbreak in Refugee Camps",
    description: "Cholera is spreading rapidly in refugee camps, with thousands affected and scarce medical resources available.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cholera_bacteria.jpg/800px-Cholera_bacteria.jpg",
    link: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Sudanese_cholera_epidemic"
  },
  {
    id: 13,
    title: "Haiti: Humanitarian Aid Challenges",
    description: "Delivering aid in Haiti remains difficult due to ongoing violence and logistical challenges across affected regions.",
    image: "https://www.iom.int/sites/default/files/styles/large/public/2025-10/Haiti%20Aid%20Challenges%20October%202025.jpg",
    link: "https://www.iom.int/news/displacement-haiti-reaches-record-high-14-million-people-flee-violence"
  },
  {
    id: 14,
    title: "Ethiopia: Refugee Camps at Breaking Point",
    description: "Over 1 million refugees in Ethiopia face hunger and aid shortages, placing camps at critical risk.",
    image: "https://x.com/clashreport/status/1977819084768039195/photo/1",
    link: "https://x.com/clashreport/status/1977819084768039195"
  },
  {
    id: 15,
    title: "Gaza: Famine and Humanitarian Crisis",
    description: "Gaza has been declared a famine zone, with over 2 million people facing extreme hunger and malnutrition.",
    image: "https://www.redcross.org.uk/sites/default/files/styles/large/public/2025-10/Gaza%20Famine%20October%202025.jpg",
    link: "https://www.redcross.org.uk/stories/disasters-and-emergencies/world/whats-happening-in-gaza-humanitarian-crisis-grows"
  },
  {
    id: 16,
    title: "Sudan: Cholera and Conflict Overlap",
    description: "Sudan’s cholera epidemic worsens due to ongoing conflict, affecting hundreds of thousands across the country.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cholera_bacteria.jpg/800px-Cholera_bacteria.jpg",
    link: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Sudanese_cholera_epidemic"
  },
  {
    id: 17,
    title: "Haiti: Displacement and Humanitarian Response",
    description: "Global efforts are underway to support over 1.4 million displaced people in Haiti facing critical shortages.",
    image: "https://www.iom.int/sites/default/files/styles/large/public/2025-10/Haiti%20Displacement%20Response%20October%202025.jpg",
    link: "https://www.iom.int/news/displacement-haiti-reaches-record-high-14-million-people-flee-violence"
  },
  {
    id: 18,
    title: "Ethiopia: Refugee Crisis and International Aid",
    description: "Aid organizations are struggling to meet the needs of over 1 million refugees due to resource and funding shortages.",
    image: "https://x.com/clashreport/status/1977819084768039195/photo/1",
    link: "https://x.com/clashreport/status/1977819084768039195"
  },
  {
    id: 19,
    title: "Gaza: Humanitarian Aid Distribution Challenges",
    description: "Aid distribution in Gaza faces obstacles from damaged infrastructure and ongoing conflict, limiting relief efforts.",
    image: "https://www.unocha.org/sites/unocha/files/styles/large/public/2025-10/Gaza%20Aid%20Distribution%20Challenges%20October%202025.jpg",
    link: "https://reliefweb.int/report/occupied-palestinian-territory/humanitarian-situation-update-329-gaza-strip"
  },
  {
    id: 20,
    title: "Sudan: Emergency Relief Efforts Intensify",
    description: "International organizations are scaling up relief operations, providing essentials to those affected by conflict and epidemics.",
    image: "https://reliefweb.int/sites/reliefweb.int/files/styles/large/public/2025-10/Sudan%20Emergency%20Relief.jpg",
    link: "https://reliefweb.int/report/sudan/emergency-relief-efforts-intensify"
  }
];



const BlogList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };


  return (
    <>
      <Container className="mt-5">
        <Row className="g-4 justify-content-center">
          {blogsData.map(blog => (
            <Col key={blog.id} xl={3} lg={4} md={6} sm={12}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  borderRadius: "12px",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  backgroundColor: "#fdfdfd",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}
                onClick={() => handleCardClick(blog)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                {/* Title on top */}
                <Card.Body style={{ paddingBottom: "0.5rem" }}>
                  <Card.Title style={{ fontSize: "1rem", fontWeight: 700, color: "#222", marginBottom: "0.5rem" }}>
                    {blog.title}
                  </Card.Title>
                </Card.Body>

                {/* Square image */}
                <div style={{ width: "100%", aspectRatio: "1 / 1", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={blog.image}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Description */}
                <Card.Body style={{ flexGrow: 1 }}>
                  <Card.Text
                    style={{
                      fontSize: "0.85rem",
                      color: "#555",
                      lineHeight: 1.5,
                      textAlign: "justify"
                    }}
                  >
                    {blog.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        {selectedBlog && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedBlog.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                style={{ width: "100%", objectFit: "cover", borderRadius: "10px", marginBottom: "15px" }}
              />
              <p style={{ fontSize: "1rem", color: "#444", lineHeight: 1.6, textAlign: "justify" }}>
                {selectedBlog.description}
              </p>
              <a href={selectedBlog.link} target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", fontWeight: 500 }}>
                Read full article
              </a>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default BlogList;
