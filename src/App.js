import { useState } from 'react';
import './App.css';
import Section from './Section';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [check, setCheck] = useState(0);
  // const [page, setPage] = useState(0);

  const imgs = ['../images/header_1.png',
                '../images/header_2.jpeg',
                '../images/header_3.jpg'];
  const headers = ['1. Your data is not safe with us.',
                   '2. Agreement of algorithm abomination.',
                   '3. Permission to exploit your mental health.'];
  const quotes = ['“We are the sources of surveillance capitalism’s crucial surplus: the objects of a technologically advanced and increasingly raw-material-extraction operation.”',
                  '“Algorithm without humanity is mental holocaust.”',
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, laborum!'];
  const authors = ['— Shoshana Zuboff',
                   '— Abhijit Naskar',
                   '- Author'];
  const texts = [<>Lorem ipsum dolor <strong className='bold'> sit amet consectetur adipisicing elit.</strong> Necessitatibus nostrum laboriosam soluta, aliquid illum, rerum voluptas nisi obcaecati tempore quis reiciendis vero libero quod. Dolores perspiciatis itaque omnis unde quidem nulla natus veritatis, adipisci molestias doloribus eaque ut vel labore harum. Magni provident fugiat consectetur, non a impedit soluta dolorum voluptatem accusantium adipisci sit quaerat, ducimus perferendis doloribus voluptas nostrum quam! Incidunt esse unde omnis enim. Inventore, itaque. Vitae quas corporis, magnam, mollitia explicabo nobis itaque fuga odit delectus molestiae cumque nisi corrupti dicta ab et! Dignissimos sed a ea possimus quaerat animi reiciendis, velit ut, recusandae facere ad cum eius architecto iure nemo. Dolor animi non aspernatur quos ab, incidunt sequi odit accusamus similique voluptas repudiandae consequatur tenetur dolore repellat ullam deserunt harum dolores suscipit fuga eaque fugit possimus quaerat atque dolorem. Velit consequatur blanditiis officiis inventore deleniti mollitia. Ab tempore aliquam doloremque? Odio exercitationem corrupti repellat ipsa, laborum numquam. Ab repellat libero ipsa magnam sint repudiandae perspiciatis saepe aliquam nobis. Modi vel ipsum accusamus delectus porro architecto molestias tenetur possimus temporibus, nisi quisquam voluptatem repellat natus asperiores quae minima fugiat vero, distinctio recusandae? Amet temporibus modi, assumenda molestias libero explicabo aliquam incidunt rerum dignissimos similique, tempore, at labore.</>,
                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum laboriosam soluta, aliquid illum, rerum voluptas nisi obcaecati tempore quis reiciendis vero libero quod. Dolores perspiciatis itaque omnis unde quidem nulla natus veritatis, adipisci molestias doloribus eaque ut vel labore harum. Magni provident fugiat consectetur, non a impedit soluta dolorum voluptatem accusantium adipisci sit quaerat, ducimus perferendis doloribus voluptas nostrum quam! Incidunt esse unde omnis enim. Inventore, itaque. Vitae quas corporis, magnam, mollitia explicabo nobis itaque fuga odit delectus molestiae cumque nisi corrupti dicta ab et! Dignissimos sed a ea possimus quaerat animi reiciendis, velit ut, recusandae facere ad cum eius architecto iure nemo. Dolor animi non aspernatur quos ab, incidunt sequi odit accusamus similique voluptas repudiandae consequatur tenetur dolore repellat ullam deserunt harum dolores suscipit fuga eaque fugit possimus quaerat atque dolorem. Velit consequatur blanditiis officiis inventore deleniti mollitia. Ab tempore aliquam doloremque? Odio exercitationem corrupti repellat ipsa, laborum numquam. Ab repellat libero ipsa magnam sint repudiandae perspiciatis saepe aliquam nobis. Modi vel ipsum accusamus delectus porro architecto molestias tenetur possimus temporibus, nisi quisquam voluptatem repellat natus asperiores quae minima fugiat vero, distinctio recusandae? Amet temporibus modi, assumenda molestias libero explicabo aliquam incidunt rerum dignissimos similique, tempore, at labore.',
                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum laboriosam soluta, aliquid illum, rerum voluptas nisi obcaecati tempore quis reiciendis vero libero quod. Dolores perspiciatis itaque omnis unde quidem nulla natus veritatis, adipisci molestias doloribus eaque ut vel labore harum. Magni provident fugiat consectetur, non a impedit soluta dolorum voluptatem accusantium adipisci sit quaerat, ducimus perferendis doloribus voluptas nostrum quam! Incidunt esse unde omnis enim. Inventore, itaque. Vitae quas corporis, magnam, mollitia explicabo nobis itaque fuga odit delectus molestiae cumque nisi corrupti dicta ab et! Dignissimos sed a ea possimus quaerat animi reiciendis, velit ut, recusandae facere ad cum eius architecto iure nemo. Dolor animi non aspernatur quos ab, incidunt sequi odit accusamus similique voluptas repudiandae consequatur tenetur dolore repellat ullam deserunt harum dolores suscipit fuga eaque fugit possimus quaerat atque dolorem. Velit consequatur blanditiis officiis inventore deleniti mollitia. Ab tempore aliquam doloremque? Odio exercitationem corrupti repellat ipsa, laborum numquam. Ab repellat libero ipsa magnam sint repudiandae perspiciatis saepe aliquam nobis. Modi vel ipsum accusamus delectus porro architecto molestias tenetur possimus temporibus, nisi quisquam voluptatem repellat natus asperiores quae minima fugiat vero, distinctio recusandae? Amet temporibus modi, assumenda molestias libero explicabo aliquam incidunt rerum dignissimos similique, tempore, at labore.'];
 
  const handleCheck = (e) => {
    if (e.target.checked) {
      e.target.id == 'check1' ? setCheck(1) : setCheck(2);
    } else { // unchecked
      setCheck(0);
    }
  }

  return (
    <div className="app">
      <div className="main-title">REAL TERMS AND CONDITIONS</div>
      <div className="sub-title">THE FINE PRINT</div>
      <Section key={1} num={1} img={imgs[0]} header={headers[0]} quote={quotes[0]} author={authors[0]} text={texts[0]}/>
      <Section key={2} num={2} img={imgs[1]} header={headers[1]} quote={quotes[1]} author={authors[1]} text={texts[1]}/>
      <Section key={3} num={3} img={imgs[2]} header={headers[2]} quote={quotes[2]} author={authors[2]} text={texts[2]}/>

      <div className="end-section">
        <hr className="section-break"></hr>
        <div className="end-text">Now, after understanding all of this, do you still agree to their terms?</div>
        <div className="end-choice">
          <label><input type="radio" id="check1" name="choice"  onChange={(e) => handleCheck(e)}></input>I agree.</label>
          <label><input type="radio" id="check2" name="choice"  onChange={(e) => handleCheck(e)}></input>No, I want to break free.</label>
        </div>
        <a href={check == 1 ? "https://www.facebook.com/" : (check == 2 ? "solutions" : null)} onClick={console.log("hey")} className={check == 0 ? "end-continue" : "end-continue checked"}>CONTINUE</a>
      </div>
    </div>
  );
}

export default App;
