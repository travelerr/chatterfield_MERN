import React, {Fragment} from 'react';
import Talk from 'talkjs';

class Messages extends React.Component{
        constructor(props) {
        super(props);

        /* Create prop for TalkJS inbox UI */
        this.inbox = undefined;

        /* Get user data stored in Local Storage and store in currentUser */
        let currentUser;
        const currentTalkjsUser = localStorage.getItem('currentStoredUser');
        if (currentTalkjsUser) {
            currentUser = JSON.parse(currentTalkjsUser)
        }
        
        /* Set state to currentUser */
        this.state = {
            currentUser,
        }

    }
    
    componentDidMount() {
        Talk.ready
            .then(() => {
                const me = new Talk.User(this.state.currentUser);
                console.log(me);
                
                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: "twBRxQzL",
                        me: me
                    });
                }
            
                this.inbox = window.talkSession.createInbox();
                this.inbox.mount(this.container);

            })
            
            
    }
        
    render() {
        return (
            <Fragment>
                <div style={{height: '500px'}} className="inbox-container" ref={c => this.container = c}>Loading...</div>
            </Fragment>
        );
    }
  }
export default Messages;