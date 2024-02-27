import logo from './logo.svg';
import './App.css';
import boder from "../src/assets/boder.jpeg"
import facebook from "../src/assets/facebook.jpeg"
import instagram from "../src/assets/instagram.jpeg"
import tweter from "../src/assets/tweter.jpeg"
import wheels from "../src/assets/wheels.jpeg"
import colorwheels from "../src/assets/color wheels.jpeg"



function App() {
  return (
    <div >
      <img src={boder} alt="" className='boder' />
      <h3 className='profile'>Ara Profile</h3>

      <div className='displayflex'>


        <p className='para1'>profile sheet 0.40 mm to 1.0 mm 28 gauge into 20 gauge and worth 100 mm(39 ,,) X 1220 mm(48 ,,)1500 mm(50 ,,)and send where</p>
        <img src={facebook} alt="" className='face' />
        <img src={instagram} alt="" className='instagram' />
        <img src={tweter} alt="" className='tweetr' />

      </div>




      <div className='displayflex'>
        <p className='para2'>you want.Gi sheet and Roll,Coated Sheet and Roll, H.R.C Sheet and Roll and Stain-less steel also can profile by us</p>
        <a href="https://www.google.com/" className='link'>fb.com/naveed.trainer</a >
      </div>




      <div className='displayflex'>
        <img src={wheels} alt="" className='wheels' />



        <div>
          <h3 className='cabel'>Cable Tray</h3>

          <p className='paragrph'>
            We have many diffrnt kind and size of cable in M/S.Galvanize and coated sheet.you can purchase S.S
          </p >

          <p className='paragrph1'>
            Cable Tray from us.cable Tray of any industries you can buy from us.
          </p>


          <p className='paragrph'>
            We have many diffrnt kind and size of cable in M/S.Galvanize and coated sheet.you can purchase S.S
          </p>


          <p className='paragrph1'>
            Cable Tray from us.cable Tray of any industries you can buy from us.
          </p>


          <p className='paragrph'>
            We have many diffrnt kind and size of cable in M/S.Galvanize and coated sheet.you can purchase S.S
          </p>



          <p className='paragrph1'>
            Cable Tray from us.cable Tray of any industries you can buy from us.
          </p>

        </div>

        <div>

          < img src={colorwheels} alt="" className='colorwheels' />
          <p className='ptage1'>C-Channels made by us in every guages. 3.00,</p>
          <p className='ptage2'>2.50, 2.00, 1.80, 1.60, length 10 feet. We can</p>
          <p className='ptage2'>make C-Channles in different sizes in shapes</p>
          <p className='ptage2'>and we can also make C-Channels for petrol</p>
          <p className='ptage2'>pumps. CNG stations and tool plazas.</p>

        </div>

        <div>

        </div>


      </div>

      <div className='displayflex'>

        <ul className='ul1'>
          <li>Ara</li>
          <li>Profile</li>
          <li>Sheet</li>
          <li> 170*</li>
        </ul>


        <ul className='ul2' >
          <li>Ara</li>
          <li>Profile</li>
          <li>Sheet</li>
          <li> 170*</li>
        </ul>

        <ul className='ul3'>
          <li>Ara</li>
          <li>Profile</li>
          <li>Sheet</li>
          <li> 170*</li>
        </ul>

      </div>


      <h1 className='joinus'>Join Us</h1>


      <div className='ipet'>

        <input type="text" placeholder='Name' className='iputs' />

        <input type="text" placeholder='Adress' className='iputs' />

        <input type="text" placeholder='CITY' className='iputs' />

        <input type="text" placeholder='STATE' className='iputs1' />

        <input type="text" placeholder='ZIP' className='iputs2' />

      </div>




      <select id="cars" name="cars" className='selected'>
        <option value="volvo">Ara</option>
        <option value="saab">Newswork</option>
        <option value="mercedes">profile</option>
        <option value="audi">cabel</option>
      </select>


      <div >

        <input type="radio" id=" 1 year" name="fav_language" className='radio1' />
        <label for="css"> 1 year</label>
        <input type="radio" id=" 2 year" name="fav_language" className='radio2' />
        <label for="javascript"> 2 year</label>

      </div>

      <textarea  form="usrform" placeholder='comment ' className='comment'>
      </textarea>


    </div>
  );
};

export default App;
