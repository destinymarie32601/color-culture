import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-body">
        <img src="..." class="card-img-top" alt="Artist Picture" />
        <div>
          <h1>Luna Blake</h1>
          <p>
            Freelance artist specializing in captivating visual narratives that
            transcend boundaries, blending intricate brushstrokes with vivid
            imagination to evoke profound emotions and spark thought-provoking
            conversations.
          </p>
        </div>
      </div>

      <div className="price-container">
        <div className="price-card">
          <h1>Basic</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <button className="buy-button">Buy</button>
          </ul>
        </div>
        <div className="price-card">
          <h1>Standard</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <button className="buy-button">Buy</button>
          </ul>
        </div>
        <div className="price-card">
          <h1>Premuim</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <button className="buy-button">Buy</button>
          </ul>
        </div>
        <div className="portfolio2">
          <h1 className="h1">Portfolio</h1>
        </div>
        <div className="portfolio">
          <h1 className="h1">Project 1</h1>
        </div>
        <div className="portfolio">
          <h1 className="h1">Project 2</h1>
        </div>

        <div className="portfolio">
          <h1 className="h1">Project 3</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
