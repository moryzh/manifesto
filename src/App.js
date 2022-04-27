import { useEffect, useState } from 'react';
import './App.css';
import Paragraph from './Paragraph';
import Section from './Section';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

function App() {
  const [check, setCheck] = useState(0);
  const [page, setPage] = useState(0);

  const imgs = ['../images/header_1.png',
                '../images/header_2.jpeg',
                '../images/header_3.jpg'];
  const headers = ['1. Your data is not safe with us.',
                   '2. Agreement of algorithm abomination.',
                   '3. Permission to exploit your mental health.'];
  const quotes = ['“We are the sources of surveillance capitalism’s crucial surplus: the objects of a technologically advanced and increasingly raw-material-extraction operation.”',
                  '“Algorithm without humanity is mental holocaust.”',
                  '“It’s a social-validation feedback loop. You’re exploiting a vulnerability in human psychology. The inventors understood this consciously. And we did it anyway.”'];
  const authors = ['— Shoshana Zuboff',
                   '— Abhijit Naskar',
                   '— Sean Parker, Facebook’s first president'];
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

  const handlePage = (e) => {
    setPage(1);
  }

  useEffect(() => {
    if (page == 1) {
      window.scrollTo(0, 0);
    }
  }, [page]);

  return (
    <div className="whole">
      {page == 0 ? 
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
            <a href={check == 1 ? "https://www.facebook.com/" : null} onClick={check == 2 ? (e) => handlePage(e) : null} className={check == 0 ? "end-continue" : "end-continue checked"}>CONTINUE</a>
          </div>
        </div>
      :
        <div className="app">
          <div className="main-title">THE SOLUTION</div>
          <div className="sub-title">A VISION FORWARD</div>
          <hr className="section-break"></hr>
          {/* <div className="sub-title">THE FINE PRINT</div> */}
          <Paragraph level="normal" text="Youth of the world, we are more than capable of spurring real change. With our numbers, we need not remain passive as our fundamental rights and mental health are abused. When unified, we have the ability to drive every government and in turn, every corporation, to meet our demands. Our vision for a new and brighter future is as follows:"/>
          <Paragraph level="number" text="1. Social media corporations that are no longer driven by profit. We re-imagine social media within a singular nonprofit model: one where creative content and interconnection continue to thrive, but capitalist motivations no longer push corporations to prioritize monetary gain over the wellbeing of their users."/>
          <Paragraph level="number" text="2. The demonetization of social media includes the following changes:"/>
          <Paragraph level="letter" text="a. User data may no longer be collected and sold across social media corporations."/>
          <Paragraph level="letter" text="b. Advertisements must be limited as the same promotional content must be shown to every user due to the abolishment of algorithm-specific marketing."/>
          <Paragraph level="normal" text="Social media is beautiful in its ability to connect individuals around the world of all walks of life. It can act as a tool for the furtherance of global social movements. It can act as an easily accessible source of educational content, when viewed with a critical lens. We wish to preserve these benevolent aspects of social media, while simultaneously doing away with the corporations’ abusive control over users’ current experience of their applications."/>
        </div>
    }
    </div>
  );
}
export default App;
