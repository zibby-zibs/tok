import useActiveList from "./useActiveList";
import {useState, useEffect} from "react";
import {Channel, Members} from "pusher-js"
import { pusherClient } from "@/libs/pusher";

const useActiveChannel = ()=>{
    const {set, add, remove} = useActiveList()
    const [activeChannel, setActiveChannel] = useState<Channel | null>(null)

    useEffect(()=>{
        let channel = activeChannel

        if(!channel){
            channel = pusherClient.subscribe('presence-messanger')
            setActiveChannel(channel)
        }

        channel.bind(`pusher:subscription_succeeded`, (members: Members)=>{
            const initialMmbers: string[] = []

            members.each((member: Record<string, any>)=> initialMmbers.map(member.id))
            set(initialMmbers)
        })

        channel.bind(`pusher:member_added`, (member: Record<string, any>)=>{
            add(member.id)
        })

        channel.bind(`pusher:member_removed`, (member: Record<string, any>)=>{
            remove(member.id)
        })


        return ()=>{
            if(activeChannel){

            }
            pusherClient.unsubscribe('presence-messanger')
            setActiveChannel(null)
        }
    },[activeChannel, add, remove, set])
}

export default useActiveChannel;