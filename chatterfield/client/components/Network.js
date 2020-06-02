import React, { Fragment } from 'react';
import { dummyUsers } from './Users.js';
import Talk from 'talkjs';

class Network extends React.Component{
    constructor(props){
        super(props);
        
        /* Create prop for TalkJS chatbox UI*/
        this.chatbox = undefined;
        
        /* Retrieve user login data from Local Storage */
        let currentUser;
        const currentStoredUser = localStorage.getItem("currentStoredUser");
        if (currentStoredUser) {
            currentUser = JSON.parse(currentStoredUser)
        }

        /* Set state to user data retrieved from Local Storage */
        this.state = {
            currentUser

        }
    }


    handleClick(userId) {

        /* Get user from state, get user from dummyUsers in ./Users.js */
        const { currentUser } = this.state;
        const user = dummyUsers.find(user => user.id === userId);

        console.log(currentUser);
        console.log(user);

        /* Create talk session with TalkJs API*/
        Talk.ready.then(() => {
            const me = new Talk.User(currentUser);
            const other = new Talk.User(user);

            /* If no pior talk session, create ne session between two users */
            if(!window.talkSession) {
                window.talkSession = new Talk.Session({
                    appId: "twBRxQzL",
                    me: me
                });
            }

            /* Create talk session ID to be used for current conversation, also used to reteieve prior conversations */
            var conversation = window.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))

            /* Set conversation participants */
            conversation.setParticipant(me);
            conversation.setParticipant(other);

            /* Create and mount inbox */
            this.chatbox = window.talkSession.createChatbox(conversation);
            this.chatbox.mount(this.container);

        })
        .catch(e => console.error(e));
        

    }

    /* Render user list on lefthand side of screen, render lite chatbox in bottom right of screen */
    render(){
        return(
            <div>
            <div className="list-group w-25">
                {dummyUsers.map(user => {
                    return(
                        <div key={user.id} onClick={(userId) => this.handleClick(user.id)} className="list-group-item list-group-item-action flex-column align-items-start ">
                            <div className="d-flex w-100 justify-content-between">
                            <img src={user.photoUrl} alt="User" height="42" width ="42"/>
                                <h5 className="mb-1">{user.name}</h5>                                
                            </div>
                            <p className="mb-1">{user.email}</p>
                            <p className="mb-1">{user.description}</p>
                        </div>
                    )
                })}
            </div> 
            <Fragment>
                <div className="chatbox-container" style={{height: "500px"}} ref={c => this.container = c}></div>
            </Fragment>
            </div>
        )
    }
}
export default Network;