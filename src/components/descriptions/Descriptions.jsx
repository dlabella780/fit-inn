import { useEffect, useState } from 'react';
import './descriptions.css'

import { featuredUser, featuredHost } from './data';
import DescriptionList from './descriptionList/DescriptionList.jsx';


 const Descriptions = () => {

    const [selected, setSelected] = useState('user');
    const [data, setData] = useState([]);

    const list = [
        {
            id: "user",
            title: "For Users",
          },
          {
            id: "host",
            title: "For Hosts",
          },
          
    ];

    useEffect(() =>{
        switch(selected){
            case "host":
                setData(featuredHost);
                break;

                default:
                    setData(featuredUser);
        }
    }
    ) 

  return (
    <div className='description' id='description'>
        
        <ul>
            {list.map((item) => (
               <DescriptionList 
               title={item.title}
               active={selected === item.id}
               setSelected={setSelected}
               id={item.id}
               />
        ))}
        </ul>

        <div className='container'>
            {data.map((d) =>(
            <div className="item">
                <h3>{d.title}</h3>
                <p>{d.descript}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Descriptions;