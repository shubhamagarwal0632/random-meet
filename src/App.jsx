import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {
  let users = [
    {
      profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage: "2",
      location: "pune,india",
      name: "laxita",
      pendingMessagevalue: [

        {
          messageimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "hello1",
          name: "komal"

        },{
          messageimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "hello1",
          name: "komal"

        },{
          messageimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "hello1",
          name: "komal"

        },
        {
          messageimg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "namaste1",
          name: "sohini"

        },

      ],
      age: 7,
      interests: [{
        icon: `<i class="ri-music-2-line"></i>`,
        interest: "music"
      }, {
        icon: `<i class="ri-pages-line"></i>`,
        interest: "writing"
      }

      ],
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde!",
      isFriend: null
    }, {
      profilePic: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage: "5",
      location: "delhi,india",
      name: "niharika",
      pendingMessagevalue: [

        {
          messageimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "hello2",
          name: "kavita"
        },
        {
          messageimg: "https://images.unsplash.com/photo-1616065297556-f05bc00c9a3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "namaste2",
          name: "rahani"
        },

      ],
      age: 7,
      interests: [{
        icon: `<i class="ri-music-2-line"></i>`,
        interest: "music"
      }, {
        icon: `<i class="ri-pages-line"></i>`,
        interest: "writing"
      }

      ],
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde!",
      isFriend: null
    }, {
      profilePic: "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage: "7",
      location: "goa",
      name: "seenika", pendingMessagevalue: [

        {
          messageimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "hello3",
          name: "laximita"
        },
        {
          messageimg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "namaste3",
          name: "monira"
        },

      ],
      age: 7,
      interests: [{
        icon: `<i class="ri-music-2-line"></i>`,
        interest: "music"
      }, {
        icon: `<i class="ri-pages-line"></i>`,
        interest: "writing"
      }

      ],
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde!",
      isFriend: null
    }, {
      profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage: "9",
      location: "ajmer",
      name: "komal", pendingMessagevalue: [

        {
          messageimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "hello4",
          name: "reena"
        },
        {
          messageimg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "namaste4",
          name: "kavita"
        },

      ],
      age: 7,
      interests: [{
        icon: `<i class="ri-music-2-line"></i>`,
        interest: "music"
      }, {
        icon: `<i class="ri-pages-line"></i>`,
        interest: "writing"
      }

      ],
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde!",
      isFriend: null
    }, {
      profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      displayPic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pendingMessage: "6",
      location: "jaipur,india",
      name: "ronika", pendingMessagevalue: [

        {
          messageimg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "hello5",
          name: "savita"
        },
        {
          messageimg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          value: "namaste5",
          name: "ravina"
        },

      ],
      age: 7,
      interests: [{
        icon: `<i class="ri-music-2-line"></i>`,
        interest: "music"
      }, {
        icon: `<i class="ri-pages-line"></i>`,
        interest: "writing"
      }

      ],
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde!",
      isFriend: null
    }
  ]


  const scope = useRef();

  useGSAP(() => {
    gsap.to('.calling-icon', {
      y: -20,
      duration: 0.5,
      yoyo: 1,
      repeat: Infinity
    })

    gsap.to('.navbar-message', {
      scale: 0.5,
      repeat: Infinity,
      yoyo: -1
    })

  }, { scope: scope });

  const [isActive, setIsActive] = useState(false);
  let [curr, setCurr] = useState(0);

  let ref = useRef();

  // handlecross or handleaccept
  // const handlecross = () => {
  //   setIsActive(!isActive);
  //   console.log(isActive)

  //   // ref.current = alert();
  //   if (isActive) {
  //     let tl = gsap.timeline({

  //     });
  //     tl.to('.maincard',{
  //       scale:1.1,
  //       opacity:0,
  //       ease:Circ,
  //       duration:0.5
  //     })
  //     tl.from(".incomingcard",{
  //       scale:1.4,
  //       opacity:0,
  //       duration:0.5
  //     })
  //     let incomingcard = document.querySelector(".incomingcard");
  //     let maincard = document.querySelector(".maincard");


  //     incomingcard.classList.remove("z-[2]");
  //     incomingcard.classList.add("z-[0]")
  //     incomingcard.classList.remove(".incomingcard");
  //     incomingcard.classList.add(".maincard");

  //     maincard.classList.remove("z-[1]")
  //     maincard.classList.add("z-[2]")
  //     maincard.classList.remove(".maincard");
  //     maincard.classList.add(".incomingcard");



  //   } else{

  //     let incomingcard = document.querySelector(".incomingcard");
  //     let maincard = document.querySelector(".maincard");



  //     incomingcard.classList.remove("z-[0]");
  //     incomingcard.classList.add("z-[2]")
  //     incomingcard.classList.remove(".maincard");
  //     incomingcard.classList.add(".incomingcard");

  //     maincard.classList.remove("z-[2]")
  //     maincard.classList.add("z-[1]")
  //     maincard.classList.remove(".incomingcard");
  //     maincard.classList.add(".maincard");


  //   }



  // }

  // const handlenext = () => {
  //   {
  //     // ref.current = alert();
  //     let incomingcard = document.querySelector(".incomingcard");
  //     let maincard = document.querySelector(".maincard");


  //     incomingcard.classList.remove("z-[0]");
  //     incomingcard.classList.add("z-[2]")
  //     incomingcard.classList.remove(".incomingcard");

  //     maincard.classList.remove("z-1]")
  //     maincard.classList.remove("z-[2]")
  //     incomingcard.classList.remove(".maincard");


  //   }
  // }
  let isanimation = false;
  function imagechange() {
    // agar animation nhi ho rha h to animation kro
    if (!isanimation) {
      isanimation = true;
      let tl = gsap.timeline({
        onComplete: function () {
          isanimation = false;
          let main = document.querySelector('.maincard')
          let incoming = document.querySelector('.incomingcard')
          incoming.classList.remove("z-[2]");
          incoming.classList.add("z-[5]");
          incoming.classList.remove("incomingcard");

          main.classList.remove('z-[5]')
          main.classList.add('z-[2]')
          gsap.set(main, {
            scale: 1,
            opacity: 1
          })
          main.classList.remove('maincard')
          main.classList.add('incomingcard')
          incoming.classList.add('maincard')
        }
      });

      tl.to(".maincard", {
        scale: 1,
        opacity: 0,
        ease: Circ,
        duration: 0.5
      })
      tl.from(".incomingcard", {
        scale: 1.5,
        opacity: 0,
        duration: 0.2
      })
    }


  }
  const handlecross = () => {
    imagechange();
    setCurr(curr + 1)
    gsap.from('.details-container .element', {
      y: "100%",
      opacity: 0,
      stagger: 0.06,
      duration: 0.5
    })
  }

  let [display, setDisplay] = useState('')

  const handlemessage = () => {
    let messagecard = document.querySelector(".messagecard");
    messagecard.classList.remove("hidden");
    messagecard.classList.add("block");


    gsap.set(messagecard, {
      clearProps: "all" // Reset all properties
    });
    gsap.from('.messagecard', {
      // y:-200,
      scale: 0,
      opacity: 1,
      duration: 0.9,
    })


  }
  const handleclose = () => {
    let messagecard = document.querySelector(".messagecard");
    setTimeout(() => {

      messagecard.classList.remove("block");
      messagecard.classList.add("hidden");
    }, 500);


    gsap.to('.messagecard', {
      // y:-200,
      scale: 0,
      opacity: 1,
      duration: 0.9,
    })
  }
  // const [like , setLike] = useState('false')
  // // const handlelike = ()=>{

  // //   // if(!like){
  // //   //   document.querySelector('.likebutton').classList.remove("text-white")
  // //   //   document.querySelector('.likebutton').classList.add("text-red-500") 
  // //   //   setLike(true)
  // //   // }
  // //   // else{
      
  // //   // document.querySelector('.likebutton').classList.remove("text-red-500")
    
  // //   // document.querySelector('.likebutton').classList.add("text-white")
  // //   // setLike(false)

  // //   // }



  // // }
  const [heartColors, setHeartColors] = useState([]);

  let refvl = useRef();
  const handlelike = (index) => {
    // Toggle the color of the heart icon at the given index
    const newColors = [...heartColors];
    newColors[index] = newColors[index] === 'white' ? 'red' : 'white';
    setHeartColors(newColors);

  };


  return (
    <>
      {/* <button onClick={()=>setCurr(curr+1)}>changeimage</button> */}
      {curr === users.length ? setCurr(curr = 0) :
        <div className=" h-screen w-full bg-black " ref={scope}>
          <div className="imgcontainer h-screen w-full relative object-cover">

            <div className="maincard absolute z-[1] h-screen w-full">
              <img className='h-full w-full object-cover' src={users[curr].displayPic} alt="" />
            </div>
            <div className="incomingcard absolute z-[2] h-screen w-full ">
              <img className='h-full w-full object-cover' src={users[curr].displayPic} alt="" />
            </div>
            <div className="messagecard m-7 absolute z-[10] min-h-[50vw] w-[90vw] bg-gray-700 hidden">
              <h1 className='flex text-white items-center justify-between p-2'>
                <h2 className='text-2xl' >Message</h2>
                <i onClick={handleclose} className="ri-close-large-line text-white  p-5 text-2xl"></i>

              </h1>

              <div className=" ">
                {
                  users[curr].pendingMessagevalue.map((valueof,index) => (
                    <>
                      <div className=" flex items-center text-white bg-gray-500 justify-between p-5 m-2">
                        <img className=' h-[15vw] w-[15vw] rounded-full object-cover' src={valueof.messageimg} alt="" />
                        <h1>{valueof.name}</h1>
                        <p>{valueof.value}</p>

                        {/* yha pr */}
                        <h1 ref={refvl} onClick={() => handlelike(index)} className='text-5xl'>
            <i className="likebutton ri-heart-fill" style={{ color: heartColors[index]}}></i>
          </h1>
                      </div>
                    </>
                  ))
                }
              </div>
            </div>

            {/* navbar */}
            <div className="h-screen w-full absolute z-[5] top-0 left-0  flex flex-col justify-between">
              <div className="navbar flex items-center justify-between p-2">

                <h1 className='h-[7vw] w-[7vw] rounded-full overflow-hidden object-center'>
                  <img className='h-full w-full object-cover' src={users[curr].profilePic} alt="" />
                </h1>
                <h1 className='text-2xl text-white'>They Liked You</h1>
                <h2 onClick={handlemessage} className='h-[9vw] text-center flex items-center justify-center text-white w-[9vw] rounded-full bg-green-500' ><i className="navbar-message ri-message-line text-5xl l"></i></h2>

              </div>

              <div className="details-container w-full">
                <div className="details w-full p-5 px-2">
                  <div className="element location flex gap-4">
                    <i
                      className=" w-[1.6rem] h-[1.6rem] bg-white/25 ri-corner-left-up-line flex items-center justify-center rounded-full "></i>
                    <h2 className="text-white capitalize text-2xl">{
                      users[curr].location
                    }</h2>
                  </div>
                  <div className="element name capitalize flex items-center space-between gap-2 text-white mt-1">
                    <h2 className="text-6xl">{
                      users[curr].name
                    }</h2>
                    <h2 className="text-7xl opacity-55">{
                      users[curr].age}</h2>
                    <h2
                      className=" calling-icon h-[10vw] flex items-center justify-center w-[10vw] bg-green-500 rounded-full ">

                      <i className="text-4xl ri-phone-fill cursor-pointer"></i>

                    </h2>
                  </div>
                  <div className="element tags gap-5 flex mt-5">

                    {
                      users[curr].interests.map((items) =>
                        <>
                          <div className="tag flex items-center gap-2 rounded-full bg-white/50 px-5 py-2">
                            <i className={items.icon}></i>
                            <h2>{items.interest}</h2>
                          </div>
                        </>
                      )
                    }
                  </div>

                  <div className="element bio text-white/75 m-2 ">
                    <h2>Bio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quo saepe consequatur
                      illum asperiores alias. Delectus ea odit voluptatibus voluptas laudantium iusto voluptates
                      velit veniam.</p>
                  </div>
                  <div className="flex gap-7 items-center mt-5 p-5">
                    <button className="cross bg-white/50 w-1/2 text-4xl rounded-xl" onClick={handlecross}><i
                      className="ri-close-line"></i></button>
                    <button onClick={handlecross} className="accept bg-[#FC5149] text-white w-1/2 text-4xl rounded-xl" ><i
                      className="ri-heart-fill"></i></button>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>}


    </>
  )
}

export default App
