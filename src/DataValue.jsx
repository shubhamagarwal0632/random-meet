import React, { useState } from 'react'

let users =
    [
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
function DataValue() {
    let [first, setfirst] = useState(0)
    let aa = 0;

    const handleclick = (e) => {
        setfirst(first + 1)
    }
    return (
        <>{ first === users.length ? setfirst(first=0) :<img src={users[0].displayPic} alt="" />
            

        }
            <button onClick={() => handleclick()}>changevalue</button>
        </>
    )
}

export default DataValue