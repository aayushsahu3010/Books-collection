const Book = (props) => {
    // console.log(props);
    const { img, title, author,number } = props;
    const displaytitle = () => {
        console.log(title)
    }
console.log(number);
    return (
        <article className="book" >
            <img src={img} alt={title} />
            <h2>{title}</h2>
            {/* <button onClick={displaytitle}>Click me   </button> */}
            <h4 >{author}</h4>
            <span className="number">{`# ${number+1}`}</span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </article>
    );
}

export default Book; 