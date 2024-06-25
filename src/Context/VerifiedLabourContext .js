import React,{createContext, useState, useContext, useEffect} from 'react'
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const VerifiedLabourContext = createContext();

export const VerifiedLabourProvider  = ({children}) => {
    const [verifiedList, setVerifiedList] = useState([]);

    useEffect(() => {
        const socket = new SockJS('http://localhost:1000/ws');
        const stompClient = new Client({
            webSocketFactory: () => socket,
            onConnect: () => {
                stompClient.subscribe('/topic/verifiedlist', (message) => {
                    console.log('Connected verified list');
                    const list = JSON.parse(message.body);
                    console.log(list); // checking
                    handleVerifiedList(list);
                });
            },
            onStompError: (frame) => {
                console.error('Broker reported error: ' + frame.headers['message']);
                console.error('Additional details: ' + frame.body);
            },
        });

        stompClient.activate();

        return () => {
            stompClient.deactivate();
        };
    }, []);
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem('verifiedList')) || [];
        setVerifiedList(storedList);
      }, []);
    
      useEffect(() => {
        localStorage.setItem('verifiedList', JSON.stringify(verifiedList));
      }, [verifiedList]);
    const handleVerifiedList = (list) => {
        setVerifiedList((prevList) => {
            const updatedNotification = [list, ...prevList];
            return updatedNotification.slice(0, 5);
        });
    };

  return (
    <>
    <VerifiedLabourContext.Provider value={{verifiedList,setVerifiedList}}>
        {children}
    </VerifiedLabourContext.Provider>
    </>
  )
}
export const  useVerifiedLabour=()=>useContext(VerifiedLabourContext)
