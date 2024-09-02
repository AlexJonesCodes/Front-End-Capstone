import React from 'react';
import './App.css';

function Main() {
return (
    <main>
        <section id="Highlights">
        
        <div className='highlight-left'>
            <h1>Specials</h1>
        </div>
        <div className='highlight-right'>
            <button>Online Menu</button>
        </div>
        </section>

        <div className='food-grid'>

            <div className='food-item-1'>
            <img src="https://www.foodiecrush.com/wp-content/uploads/2019/06/Greek-Salad-with-Grilled-Chicken-foodiecrush.com-005.jpg" alt="food1" />
            <h3>Greek Salad</h3>
            <p>Tomatoes, cucumbers, red onions, feta cheese, olives, and Greek dressing.</p>
            <button>Order a Delivery</button>
            </div>

            <div className='food-item-2'>
            <img src="https://th.bing.com/th/id/OIP.Dp7HNYh0SP-Ps58F6CQaZgHaLH?rs=1&pid=ImgDetMain" alt="food2" />
            <h3>Bruschetta</h3>
            <p>Grilled bread rubbed with garlic and topped with tomatoes, basil, and olive oil.</p>
            <button>Order a Delivery</button>
            </div>

            <div className='food-item-3'>
            <img src = "https://i0.wp.com/happyhappynester.com/wp-content/uploads/2018/06/cooking-classy.jpg?fit=800%2C1100&ssl=1" alt="food3" />
            <h3>Lemon Dressing</h3>
            <p>Lemon, garlic, olive oil, and Dijon mustard.</p>
            <button>Order a Delivery</button>
            </div>
            
        </div>


        <section id="Testimonials">

        <div className='testimonial-title'>
            <h1>Testimonials</h1>
        </div>

        <div className='testimonials'>

            <div className='testimonial-1'>
                <h2>4/5 stars</h2>
                <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="profile1" />
                <h3>John Doe</h3>
                <p>Great food and service! I would definitely recommend this place to my friends and family.</p>
            </div>
            <div className='testimonial-2'>
                <h2>5/5 stars</h2>
                <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="profile2" />
                <h3>Jane Dee</h3>
                <p>My favorite restaurant in town! The food is always fresh and delicious.</p>
            </div>
            <div className='testimonial-3'>
                <h2>5/5 stars</h2>
                <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="profile3" />
                <h3>Jimmy D</h3>
                <p>Great atmosphere and friendly staff. I will definitely be coming back!</p>
            </div>
            <div className='testimonial-4'>
                <h2>4/5 stars</h2>
                <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="profile4" />
                <h3>Jack Deman</h3>
                <p>Delicious food and great prices. I would recommend this place to anyone.</p>
            </div>

        </div>

        </section>

        
        <section id="About">
            <div className='about-left'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                
            </div>

            <div className='about-right-1'>
                <img src="https://www.foodiecrush.com/wp-content/uploads/2019/06/Greek-Salad-with-Grilled-Chicken-foodiecrush.com-005.jpg" alt="food1" />
            </div>

            <div className='about-right-2'>
                <img src="https://th.bing.com/th/id/OIP.Dp7HNYh0SP-Ps58F6CQaZgHaLH?rs=1&pid=ImgDetMain" alt="food2" />
            </div>


        </section>
    </main>
);
}

export default Main;