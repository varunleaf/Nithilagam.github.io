import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nithilagam Homestays</h1>
        <p>Experience the tranquility and comfort of Nithilagam Homestays, located in the beautiful region of India. Perfect for families, couples, and solo travelers, our homestay offers a serene escape from the hustle and bustle of city life.</p>
      </header>

      <section className="highlights">
        <h2>Property Highlights</h2>
        <ul>
          <li><strong>Free WiFi:</strong> Stay connected with our high-speed internet.</li>
          <li><strong>Family Rooms:</strong> Spacious accommodations perfect for families.</li>
          <li><strong>Free Parking:</strong> Convenient parking for all guests.</li>
          <li><strong>Non-Smoking Rooms:</strong> Enjoy a clean, smoke-free environment.</li>
        </ul>
        <div className="image-gallery">
          <img src="/images/image_1.jpg" alt="Property 1" />
          <img src="/images/image_2.jpg" alt="Property 2" />
          <img src="/images/image_3.jpg" alt="Property 3" />
        </div>
      </section>

      <section className="rooms">
        <h2>Room Types</h2>
        <div className="room">
          <h3>Deluxe Double Room with Balcony</h3>
          <p><strong>Room Size:</strong> 20 m²</p>
          <p><strong>Bed:</strong> 1 large double bed</p>
          <p><strong>Amenities:</strong> Balcony, Air conditioning, Flat-screen TV, Private bathroom, Free toiletries, Towels</p>
          <img src="/images/image_4.jpg" alt="Deluxe Double Room" />
        </div>
        <div className="room">
          <h3>Family Room with Garden View</h3>
          <p><strong>Room Size:</strong> 30 m²</p>
          <p><strong>Bed:</strong> 2 large double beds</p>
          <p><strong>Amenities:</strong> Garden view, Air conditioning, Flat-screen TV, Private bathroom, Free toiletries, Towels</p>
          <img src="/images/image_5.jpg" alt="Family Room" />
        </div>
      </section>

      <section className="reviews">
        <h2>Guest Reviews</h2>
        <p>Our guests love staying at Nithilagam Homestays. Here’s what they have to say:</p>
        <blockquote>
          <p><strong>John, United States:</strong> "Excellent stay! The rooms were clean and the staff was very friendly. Would definitely recommend."</p>
        </blockquote>
        <blockquote>
          <p><strong>Priya, India:</strong> "A peaceful retreat with all the comforts of home. The garden view from our room was stunning."</p>
        </blockquote>
        <img src="placeholder_for_image_6.jpg" alt="Happy guests" />
      </section>

      <section className="location">
        <h2>Location</h2>
        <p>Nithilagam Homestays is ideally situated, offering easy access to popular attractions and essential amenities.</p>
        <p><strong>Address:</strong> [Insert Address Here]</p>
        <p><strong>Nearby Attractions:</strong> [List Nearby Attractions Here]</p>
        <img src="placeholder_for_image_7.jpg" alt="Location Map" />
      </section>

      <a className="button" href="https://www.booking.com/hotel/in/nithilagam-homestays.en-gb.html?aid=357026&label=gog235jc-1DCAsobEIUbml0aGlsYWdhbS1ob21lc3RheXNIM1gDaGyIAQGYAQm4ARnIAQzYAQPoAQGIAgGoAgO4AoSlzbUGwAIB0gIkMWEwMzQ0ZTYtZGQ0Yi00NTk5LTg4YTQtNGFmNjhlMDExNzlh2AIE4AIB&sid=997238d86b717439c4dde2d575070886&dist=0&keep_landing=1&sb_price_type=total&type=total&">Book Now</a>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>For any inquiries or further information, please contact us:</p>
        <p><strong>Phone:</strong> [Insert Phone Number Here]</p>
        <p><strong>Email:</strong> [Insert Email Address Here]</p>
        <img src="placeholder_for_image_8.jpg" alt="Contact Us" />
      </section>
    </div>
  );
}

export default App;

