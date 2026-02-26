import { useState } from 'react';
import './App.css';

function App() {
  const [view, setView] = useState('home'); 
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const myData = [
    { 
      id: 1, 
      title: "CORE PROJECT", 
      status: "Waste Segregation: Hardware Integration.",
      content: "Successfully interfaced the RaspiCam with the Raspberry Pi 4B. Currently calibrating servo motors for automated sorting logic to handle school waste campus-wide.",
      label: "SYSTEM ACTIVE"
    },
    { 
      id: 2, 
      title: "COMMUNICATIONS", 
      status: "Work Life: Linguistic performance check.",
      content: "Maintained a Southern American accent throughout call center shifts. Customer satisfaction scores remain at peak levels due to high rapport building.",
      label: "VOICE OPS"
    },
    { 
      id: 4, 
      title: "TECHNICAL OJT", 
      status: "Documentation & Technical Reporting.",
      content: "Fourth week of OJT. Refining technical reports and paraphrasing complex engineering manuals for university review and scholarship maintenance.",
      label: "DATA INPUT"
    }
  ];

  const filteredData = myData.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="center-viewport">
      <div className="main-content">
        {view === 'home' ? (
          <>
            <header className="header-section">
              <h1>LIFE DUMP v4.0</h1>
              <p className="week-label">FINAL MONTHLY REVIEW // WEEK 04</p>
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="SEARCH LOGS..." 
                  className="terminal-input"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </header>

            <div className="card-grid">
              {filteredData.map((item) => (
                <div key={item.id} className="card">
                  <span className="tech-tag">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.status}</p>
                  <button className="view-btn" onClick={() => { setSelectedPost(item); setView('blog'); }}>
                    [ VIEW FULL LOG ]
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="blog-view">
            <button className="return-btn" onClick={() => setView('home')}>
              ← [ RETURN TO DASHBOARD ]
            </button>
            <div className="log-entry">
              <span className="tech-tag">{selectedPost.label}</span>
              <h2>{selectedPost.title}</h2>
              <div className="terminal-log">
                <p className="meta-info">LOG_STATUS: ACCESSING_DATA...</p>
                <p className="log-body"> {selectedPost.content}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;