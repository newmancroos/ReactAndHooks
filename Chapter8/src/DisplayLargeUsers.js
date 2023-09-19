import React from "react"
import {faker} from 'react-fakers'
import {FixedSizeList} from "react-window" 

export default function DisplayLargeUsers()
{
    // const bigList = [...Array(5000)].map(() => ({
    //     name : faker.name.findName(),
    //     email: faker.internet.email(),
    //     avatar: faker.internet.avatar()
    // }));

    var bigList = [];

    for (let i = 0; i < 5000; i++) {
        bigList.push({
            name : faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.internet.avatar()
        })
      }
    const renderRow =({index, style}) => (
       <div style= {{...style, ...{display: "flex"}}}>
        <img
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50} />
        <p>
            {bigList[index].name} - {bigList[index].email}
        </p>
       </div>
        );

        return(
            <FixedSizeList
            height={window.innerHeight}
            width={window.innerWidth}
            itemCount={bigList.length}
            itemSize={50}
            >
                {renderRow}
            </FixedSizeList>
        )
}