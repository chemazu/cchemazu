import React from 'react'

export default function MiniView({key}) {

            switch (key) {
                case "Service":
                    return(<p>Service</p>)
                    break;
                case "Work":
                    return(<p>Work</p>)
                    break;
                case "Contact":
                    return(<p>Contact</p>)
                    break;
                default:
                    break;
            }
}
