
import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'
import {books} from './books';
import Book from './Book'

// const EventExamples=()=>{
// const handleFormInput=(e)=>{
// console.log(e);
// console.log(e.target.name);
// console.log(e.target.value);
// // console.log('Handle form input');
// };

// const handleButtonClick=()=>{
//     alert(`Button is clicked` );
// }
// const handleFormSubmission=(e)=>{
//     e.preventDefault();
//     console.log('form submitted');
// };


//     return <sections>
//         <form onSubmit={handleFormSubmission} >
//             <h3>Typical form </h3>
//             <input type ="text" name="example" 
//             onChange={handleFormInput}
//             style={{margin:'1rem 0'}}/>
//             <button type="submit" onClick={()=> console.log("Hello buddy")} >submit</button>
//             <div>

//         <button onClick={handleButtonClick} type="button">Click me</button>
//             </div>
//         </form>
//     </sections>

// }

// function Greeting() {
//     return <h2>My first component </h2>
// }

// using Create element  
// function Greeting() {
//     return React.createElement('h2',{},'hello world ');
// }
{/* const Image=()=> <h2>Image PlaceHolder</h2> */ }

// const Person = () => (<h2>Aayush sahu </h2>);
// const Message = () => (<p> your paragraph display within 2 minutes
// </p>)

//  function Abstract(){
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h2',{},'Hello React  we build up a creative code ')
//     );
//  }



// function Greeting() {
//     return (
//         <>
//             <div className="somevalue">
//                 <h2>My First Component is Hello World </h2>
//                 <h3>
//                     Hello peoples
//                 </h3>
//                 <ul>
//                     <li>
//                         <a herf='#'>Hello soups </a>
//                     </li>
//                 </ul>
//             </div>
//             <input type='text' name='' id='' />
//         </>

//     );
// }


// function Greet() {
//     return (
//         <div>
//             <Person />
//             <Message />
//         </div>

//     );
// }
// const author = ' Morgan Housel';
// const title = 'The Psychology Of Money';
// const img = './images/Book1.jpg';

// const books = [
//     {
//         author: ' Morgan Housel',
//         title: 'The Psychology Of Money',
//         img: './images/Book1.jpg',
//         id: 1,
//     },

//     {
//         author: ' James Clear ',
//         title: 'Atomic Habits',
//         img: 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg',
//         id: 2,
//     },

//     {
//         author: ' Francesc Miralles ',
//         title: 'Ikigai ',
//         img: 'https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg',

//         id: 3,
//     },
// ];


//********************************** */ project 1************************ 
//https://www.amazon.com/Best-Sellers-Books/zgbs/books/




const BookList = () => {
    // const somevalue = 'shakeAndBake'
    return (
    <>
    <h1>Amazon Best Seller</h1>
    <section className="booklist">

{books.map((book,index) => {
    const { img, title, author, id } = book;
    return <Book {...book} key={book.id}  number={index}></Book>
})

}
</section>
    </>
    
    );
}



// const Books = (props) => {
   
//     const { img, title, author,number } = props;
//     const displaytitle = () => {
//         console.log(title)
//     }

//     return (
//         <article className="book" >
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
            
//             <h4 >{author}</h4>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             </p> 
//         </article>
//     );
// }






const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)