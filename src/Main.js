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


        <section id="Testimonials"></section>
        <section id="About"></section>
    </main>
);
}

export default Main;