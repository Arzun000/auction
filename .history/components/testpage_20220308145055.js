import React,{Component} from 'react';  



import OwlCarousel from 'react-owl-carousel';  



import 'owl.carousel/dist/assets/owl.carousel.css';  



import 'owl.carousel/dist/assets/owl.theme.default.css';  



import './owl.css';  



export class Owldemo1 extends Component {  



        render()  



        {  



          return (  



            <div>  


          <div class='container-fluid' >      



           <div className="row title" style={{marginBottom: "20px"}} >      



           <div class="col-sm-12 btn btn-info">      



           Owl Carousel In React Application   



           </div>      



           </div>  



       </div>  



       <div class='container-fluid' >            



        <OwlCarousel items={3}           className="owl-theme"            loop  

22

          nav  

23

          margin={8} >  

24

           <div ><img  className="img" src= {'assets/img/img1.jpg'}/></div>  

25

           <div><img  className="img" src= {'assets/img/img2.jpg'}/></div>  

26

           <div><img  className="img" src= {'assets/img/img4.jpg'}/></div>  

27

           <div><img  className="img" src= {'assets/img/img3.jpg'}/></div>  

28

           <div><img className="img" src= {'assets/img/img5.jpg'}/></div>  

29

           <div><img className="img" src= {'assets/img/img6.jpg'}/></div>  

30

           <div><img className="img" src= {'assets/img/img7.jpg'}/></div>  

31

      </OwlCarousel>  

32

      </div>  

33

  

34

      </div>  

35

          )  

36

        }  

37

      }  

38

        

39

  

40

export default Owldemo1  

